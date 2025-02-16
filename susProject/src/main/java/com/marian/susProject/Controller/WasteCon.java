package com.marian.susProject.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marian.susProject.Model.Waste;
import com.marian.susProject.Repository.WasteRepo;
import com.marian.susProject.Service.WasteSer;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class WasteCon {
	@Autowired
    private WasteSer wasteDonationService;

    // Endpoint for processing waste donation requests
    @PostMapping("/waste-donation")
    public String donateWaste(@RequestBody Waste request) {
        wasteDonationService.processDonationRequest(request);
        return "Waste donation request submitted successfully!";
    }

 
    @GetMapping("/api/waste-donation")
    public List<Waste> getAllWasteDonations() {
        // Call the service to get the list of donations
        return wasteDonationService.getAllDonations();
    }
    @GetMapping("/waste-donation")
    public ResponseEntity<List<Waste>> getAllDonations() {
        List<Waste> donations = wasteDonationService.getAllDonations();
        if (!donations.isEmpty()) {
            return ResponseEntity.ok(donations); // Return 200 OK with donations list
        } else {
            return ResponseEntity.noContent().build(); // Return 204 No Content if no donations exist
        }
    }
}

