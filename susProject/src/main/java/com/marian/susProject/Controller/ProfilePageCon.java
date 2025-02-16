package com.marian.susProject.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import com.marian.susProject.Model.ProfilePage;
import com.marian.susProject.Service.ProfilePageSer;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/profile")
public class ProfilePageCon {
  @Autowired
  private ProfilePageSer userProfileService;

  @GetMapping("/{id}")
  public ProfilePage getProfile(@PathVariable Long id) {
    return userProfileService.getProfile(id);
  }

  @PutMapping("/putprofile/{id}")
  public ProfilePage updateProfile(
      @PathVariable Long id,
      @RequestPart("profileData") ProfilePage profileData,
      @RequestPart(value = "file", required = false) MultipartFile file
  ) {
    try {
      return userProfileService.updateProfile(id, profileData, file);
    } catch (Exception e) {
      e.printStackTrace();
      return null;
    }
  }
}
