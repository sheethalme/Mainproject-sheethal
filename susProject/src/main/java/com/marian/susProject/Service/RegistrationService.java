package com.marian.susProject.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.susProject.Model.Registration;
import com.marian.susProject.Repository.RegistrationRepository;

@Service
public class RegistrationService {
	@Autowired
    private RegistrationRepository registrationRepository;

    public Registration createRegistration(Registration registration) {
        return registrationRepository.save(registration);
    }

//    public List<Registration> getRegistrationsForEvent(Long eventId) {
//        return registrationRepository.findAll().stream()
//                .filter(registration -> registration.getEvent().getId().equals(eventId))
//                .toList();
//    }
   
    public List<Registration> getRegistrationsForEvent(Long eventId) {
        return registrationRepository.findByEventId(eventId);
    }

}
