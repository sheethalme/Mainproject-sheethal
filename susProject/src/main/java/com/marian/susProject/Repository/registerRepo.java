package com.marian.susProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.Optional;

import com.marian.susProject.Model.register;

@Repository
public interface registerRepo extends JpaRepository<register, Long> {
    Optional<register> findByUserName(String userName);

	Optional<register> findByEmail(String email); 
}


