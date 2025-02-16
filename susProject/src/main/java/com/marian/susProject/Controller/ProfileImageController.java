package com.marian.susProject.Controller;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.marian.susProject.Model.ProfileImage;
import com.marian.susProject.Model.register;
import com.marian.susProject.Service.ProfileImageService;

@RestController
@RequestMapping("/api/profilepic")
@CrossOrigin(origins = "http://localhost:3000")
public class ProfileImageController {
	

	    @Autowired
	    private ProfileImageService profileImageService;

	    @Autowired
	    private com.marian.susProject.Service.registerService registerService; // Assuming this exists to fetch user details

	    // Fetch Profile Image by User ID
	    @GetMapping("/{userId}")
	    public ResponseEntity<?> getProfileImage(@PathVariable Long userId) {
	        try {
	            ProfileImage profileImage = profileImageService.findByUserResId(userId);
	            if (profileImage != null) {
	                return ResponseEntity.ok(profileImage);
	            } else {
	                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Profile image not found.");
	            }
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                                 .body("Error retrieving profile image.");
	        }
	    }

	    // Upload or Update Profile Image
	    @PostMapping
	    public ResponseEntity<?> uploadProfileImage(
	            @RequestParam("image") MultipartFile image,
	            @RequestParam("userId") Long userId) {

	        try {
	            // Fetch the user by ID
	            register user = registerService.findById(userId);
	            if (user == null) {
	                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("User not found.");
	            }

	            // Check if a profile image already exists for the user
	            ProfileImage profileImage = profileImageService.findByUserResId(userId);
	            if (profileImage == null) {
	                profileImage = new ProfileImage();
	                profileImage.setUser(user);
	            }

	            // Set the new image
	            profileImage.setImage(image.getBytes());

	            // Save the profile image
	            ProfileImage savedImage = profileImageService.save(profileImage);

	            return ResponseEntity.ok(savedImage);
	        } catch (IOException e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                                 .body("Error processing the image file.");
	        } catch (Exception e) {
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
	                                 .body("An unexpected error occurred.");
	        }
	    }
	}


