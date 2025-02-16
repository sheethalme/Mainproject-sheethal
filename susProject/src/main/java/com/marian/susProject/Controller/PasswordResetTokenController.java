package com.marian.susProject.Controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marian.susProject.Service.PasswordResetTokenService;

@RestController
@CrossOrigin(origins = "http://localhost:3000") 
public class PasswordResetTokenController {
	
	@Autowired
	private PasswordResetTokenService tokenService;
	
	@PostMapping("/forgot-password")
	public ResponseEntity<String> forgotPassword(@RequestBody Map<String, String> body) {
	    try {
	        String email = body.get("email");  // Correctly extracting from the body
	        String response = tokenService.generateResetToken(email);
	        return ResponseEntity.ok(response);
	    } catch (Exception e) {
	        return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
	    }
	}

    // Reset password endpoint to accept JSON with token and newPassword
    @PostMapping("/ResetPassword")
    public ResponseEntity<String> resetPassword(@RequestBody Map<String, String> body) {
        try {
            // Extract the token and new password from the request body
            String token = body.get("token");
            String newPassword = body.get("newPassword");
            // Reset password using the token and new password
            String response = tokenService.resetPassword(token, newPassword);
            return ResponseEntity.ok(response);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(e.getMessage());
        }
    }

}
