package com.marian.susProject.Controller;

import java.util.List;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marian.susProject.Model.Event;
import com.marian.susProject.Model.Registration;
import com.marian.susProject.Repository.EventRepository;
import com.marian.susProject.Repository.RegistrationRepository;
import com.marian.susProject.Service.RegistrationService;

@RestController
@RequestMapping("/api/registrations")
@CrossOrigin(origins = "http://localhost:3000")
public class RegistrationController {
	private static final Logger logger = LoggerFactory.getLogger(RegistrationController.class);
	 @Autowired
	    private RegistrationService registrationService;

	    @Autowired
	    private EventRepository eventRepository;
	    @Autowired
	    private RegistrationRepository repo;

	    @PostMapping("/eventpost/{eventId}")
	    public ResponseEntity<?> registerForEvent(@PathVariable Long eventId, @RequestBody Registration registration) {
	        try {
	            Event event = eventRepository.findById(eventId)
	                    .orElseThrow(() -> new RuntimeException("Event not found with ID: " + eventId));

	            registration.setEvent(event);
	            Registration savedRegistration = repo.save(registration);

	            return ResponseEntity.status(HttpStatus.CREATED).body(savedRegistration);
	        } catch (Exception e) {
	            logger.error("Error during registration: {}", e.getMessage(), e);
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Registration failed.");
	        }
	    }

	    @GetMapping("/eventget/{eventId}")
	    public ResponseEntity<List<Registration>> getRegistrations(@PathVariable Long eventId) {
	        try {
	            Event event = eventRepository.findById(eventId)
	                    .orElseThrow(() -> new RuntimeException("Event not found with ID: " + eventId));

	            List<Registration> registrations = registrationService.getRegistrationsForEvent(eventId);

	            return ResponseEntity.ok(registrations);
	        } catch (Exception e) {
	            logger.error("Error fetching registrations: {}", e.getMessage(), e);
	            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
	        }
	    }
}
