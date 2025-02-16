package com.marian.susProject.Controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.marian.susProject.Model.ProfileImage;
import com.marian.susProject.Model.register;
import com.marian.susProject.Service.ProfileImageService;
import com.marian.susProject.Service.registerService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api") // Add a base URL for consistency
public class registerController {

    private static final Logger logger = LoggerFactory.getLogger(registerController.class);

    @Autowired
    public registerService regs;
    
    @Autowired
    public ProfileImageService profileImageService;

    @GetMapping("/panchayatusers")
    public List<register> showAllUsers() {
        return regs.getAllUsers();
    }

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody register reg) {
        try {
            regs.registerUser(reg);
            return ResponseEntity.ok("Registration successful");
        } catch (Exception e) {
            logger.error("Error during registration: ", e);
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody register loginData) {
        try {
            register reg = regs.loginUser(loginData.getUserName(), loginData.getPassword());
            switch (reg.getRole()) {
                case "Admin":
                    return ResponseEntity.ok(reg);
                case "User":
                	  return ResponseEntity.ok(reg); // Return the user profile data
                default:
                    throw new RuntimeException("Invalid role");
                    
            }
        } catch (Exception e) {
            logger.error("Error during login: ", e);
            return ResponseEntity.badRequest().body(null);
        }
    }

    @GetMapping("/panchayatusers/{id}")
    public ResponseEntity<register> getUserProfile(@PathVariable int id) {
        try {
            register reg = regs.getUserById(id);
            return ResponseEntity.ok(reg);
        } catch (Exception e) {
            logger.error("Error fetching user profile: ", e);
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/deletepanchayatusers/{id}") 
    public ResponseEntity<String> deleteUser(@PathVariable Long id) { 
    	try 
    	{ regs.deleteUserById(id); 
    	return ResponseEntity.ok("User deleted successfully"); 
    	} 
    	catch (Exception e) { 
    		return ResponseEntity.status(500).body("Failed to delete user"); } 
    	}

    
    @PutMapping("/panchayatusers/{id}")
    public ResponseEntity<String> changeUsers(@PathVariable int id, @RequestParam("userData") String userData, @RequestParam(value = "profilePicture", required = false) MultipartFile profilePicture) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            register reg = objectMapper.readValue(userData, register.class);

            logger.info("Received request to update user with ID: " + id);
            logger.info("Updated user data: " + reg.toString());

            if (profilePicture != null && !profilePicture.isEmpty()) {
                byte[] profilePictureBytes = profilePicture.getBytes();
                // Handle file storage, save file to a location or to database
            }

            regs.updateUsers(id, reg);
            logger.info("User profile updated successfully.");
            return ResponseEntity.ok("User updated successfully");
        } catch (Exception e) {
            logger.error("Error updating user: ", e);
            return ResponseEntity.badRequest().body("An error occurred while updating the profile.");
        }
    }
    @GetMapping("/{id}") 
    public ResponseEntity<register> getUser(@PathVariable int id) {
    	try { 
    		register user = regs.findById(id); 
    		ProfileImage profileImage = profileImageService.findById((long) id);
    		user.setProfileImage(profileImage); // Ensure Register class has setProfileImage method 
    		return ResponseEntity.ok(user); 
    		}
    	catch (Exception e) 
    	{ 
    		logger.error("Error fetching user: ", e); 
    		return ResponseEntity.badRequest().body(null); 
    		}
    	}
    }


