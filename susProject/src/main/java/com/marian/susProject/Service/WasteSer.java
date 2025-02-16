package com.marian.susProject.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.susProject.Model.Waste;
import com.marian.susProject.Repository.WasteRepo;

@Service
public class WasteSer {
	@Autowired
    private WasteRepo wasteRepository;

    public void processDonationRequest(Waste request) {
        // Logic to process the waste donation request
        System.out.println("Processing waste donation: " + request.getWasteType());
        System.out.println("Quantity: " + request.getQuantity());
        System.out.println("Ward No: " + request.getWardNo());
        System.out.println("House Name: " + request.getHouseName());
        System.out.println("Place: " + request.getPlace());
        System.out.println("Preferred Collection Time: " + request.getCollectionTime());

        // Save the donation request to the database
        wasteRepository.save(request);
    }

    public List<Waste> getAllDonations() {
        // Fetch all waste donation records from the database
        return wasteRepository.findAll();
    }
}
	


