package com.marian.susProject.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.marian.susProject.Model.register;
import com.marian.susProject.Repository.registerRepo;

import jakarta.transaction.Transactional;

@Service
public class registerService {
    @Autowired
    public registerRepo respo;
    private final BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    @Transactional
    public List<register> getAllUsers() {
        return respo.findAll();
    }

    public register putAllusers(register reg) {
        return respo.save(reg);
    }

    public register registerUser(register reg) {
        Optional<register> existingUser = respo.findByUserName(reg.getUserName());
        if (existingUser.isPresent()) {
            throw new RuntimeException("User already in use");
        }
        reg.setPassword(passwordEncoder.encode(reg.getPassword()));
        return respo.save(reg);
    }

    public register loginUser(String userName, String password) {
        Optional<register> user = respo.findByUserName(userName);
        if (user.isPresent()) {
            boolean passwordMatches = passwordEncoder.matches(password, user.get().getPassword());
            if (passwordMatches) {
                return user.get();
            } else {
                throw new RuntimeException("Invalid username or password");
            }
        } else {
            throw new RuntimeException("Invalid username or password");
        }
    }

    public register getUserById(int id) {
        return respo.findById((long) id).orElseThrow(() -> new RuntimeException("User not found"));
    }
//
//    public String deleteUsers(int id) {
//        if (respo.existsById(id)) {
//            respo.deleteById(id);
//            return "User deleted";
//        } else {
//            return "User not deleted";
//        }
//    }

   @Transactional
   public String updateUsers(int id, register res) {
        Optional<register> user = respo.findById((long) id);
        if (user.isPresent()) {
            register existingUser = user.get();
            existingUser.setUserName(res.getUserName());
            existingUser.setHouseName(res.getHouseName());
            existingUser.setHouseNumber(res.getHouseNumber());
            existingUser.setWardNumber(res.getWardNumber());
            existingUser.setPhoneNumber(res.getPhoneNumber());
            existingUser.setPlace(res.getPlace());

            respo.save(existingUser);
            return "User updated";
        } else {
            return "User not found";
        }
    }

public register findById(long id) {
	// TODO Auto-generated method stub
	return null;
}
public void deleteUserById(Long id) { 
	respo.deleteById(id); }
 
    
    
}
