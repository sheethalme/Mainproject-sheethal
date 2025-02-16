package com.marian.susProject.Service;

import java.io.IOException;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.marian.susProject.Model.ProfilePage;
import com.marian.susProject.Model.register;
import com.marian.susProject.Repository.ProfilePageRepo;
import com.marian.susProject.Repository.registerRepo;

@Service
public class ProfilePageSer {

@Autowired
private  ProfilePageRepo profilePageRepository ; 


@Autowired
private registerRepo registerRepository;


// Fetch a profile by ID
public ProfilePage getProfile(Long id) {
    return profilePageRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Profile not found with ID: " + id));
}

// Update a profile by ID
public ProfilePage updateProfile(Long id, ProfilePage profileData, MultipartFile file) {
    // Fetch the existing profile
    ProfilePage existingProfile = profilePageRepository.findById(id)
            .orElseThrow(() -> new RuntimeException("Profile not found with ID: " + id));

    // Update profile fields
    existingProfile.setUserName(profileData.getUserName());
    existingProfile.setHouseName(profileData.getHouseName());
    existingProfile.setWardNumber(profileData.getWardNumber());
    existingProfile.setHouseNumber(profileData.getHouseNumber());
    existingProfile.setPhoneNumber(profileData.getPhoneNumber());
    existingProfile.setPlace(profileData.getPlace());

    // Handle file upload if a file is provided
    if (file != null && !file.isEmpty()) {
        try {
            // Convert the file to Base64 format and save it
            byte[] fileBytes = file.getBytes();
            String base64File = java.util.Base64.getEncoder().encodeToString(fileBytes);
            existingProfile.setProfilePicture(base64File);
        } catch (IOException e) {
            throw new RuntimeException("Error while processing profile picture", e);
        }
    }

    // Save the updated profile to the database
    return profilePageRepository.save(existingProfile);
}

// Optional: Create a new profile associated with a register entity
public ProfilePage createProfileFromRegister(Long registerId) {
    register reg = registerRepository.findById(registerId)
            .orElseThrow(() -> new RuntimeException("Register not found with ID: " + registerId));

    // Map fields from register to ProfilePage
    ProfilePage profilePage = new ProfilePage();
    profilePage.setUserName(reg.getUserName());
    profilePage.setHouseName(reg.getHouseName());
    profilePage.setWardNumber(reg.getWardNumber() != null ? String.valueOf(reg.getWardNumber()) : null);
    profilePage.setHouseNumber(reg.getHouseNumber() != null ? String.valueOf(reg.getHouseNumber()) : null);
    profilePage.setPhoneNumber(reg.getPhoneNumber());
    profilePage.setPlace(reg.getPlace());
    profilePage.setRegister(reg);

    return profilePageRepository.save(profilePage);
}
}


