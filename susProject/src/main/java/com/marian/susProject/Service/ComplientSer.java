package com.marian.susProject.Service;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.susProject.Model.ComplientModel;
import com.marian.susProject.Repository.ComplientRepo;

@Service
public class ComplientSer {
	@Autowired
    private ComplientRepo complaintRepository;

	public void saveComplaint(ComplientModel complaint) throws IOException {
	    // Check if a photo is provided and convert it to a byte array
	    if (complaint.getPhoto() != null) {
	        byte[] photoBytes = complaint.getPhoto();  // Convert the file to bytes
	        complaint.setPhoto(photoBytes);  // Set the photo as bytes
	    }

	    // Save the complaint
	    complaintRepository.save(complaint);
	}


    // Get all complaints
    public List<ComplientModel> getAllComplaints() {
        return complaintRepository.findAll();
    }

}
