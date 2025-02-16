package com.marian.susProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.marian.susProject.Model.ComplientModel;
import com.marian.susProject.Service.ComplientSer;

@RestController
@RequestMapping("/api/complaints")
public class ComplientCon {
	 @Autowired
	    private ComplientSer complaintService;

	 @PostMapping
	 public ResponseEntity<String> submitComplaint(
	         @RequestParam("description") String description,
	         @RequestParam("location") String location,
	         @RequestParam("photo") MultipartFile photo) {

	     try {
	         // Create a new ComplientModel object
	         ComplientModel complaint = new ComplientModel();
	         complaint.setDescription(description);
	         complaint.setLocation(location);

	         // Convert the MultipartFile to byte array and set it on the model
	         if (photo != null && !photo.isEmpty()) {
	             byte[] photoBytes = photo.getBytes();  // Convert the MultipartFile to bytes
	             complaint.setPhoto(photoBytes);  // Set the photo as bytes
	         }

	         // Save the complaint using the service
	         complaintService.saveComplaint(complaint);

	         return new ResponseEntity<>("Complaint registered successfully!", HttpStatus.OK);
	     } catch (Exception e) {
	         return new ResponseEntity<>("Error registering complaint: " + e.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR);
	     }
	 }

	    @GetMapping
	    public ResponseEntity<List<ComplientModel>> getComplaints() {
	        try {
	            List<ComplientModel> complaints = complaintService.getAllComplaints();
	            return new ResponseEntity<>(complaints, HttpStatus.OK);
	        } catch (Exception e) {
	            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
}
