package com.marian.susProject.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marian.susProject.Model.Registration;

@Repository
public interface RegistrationRepository extends JpaRepository<Registration,Long>{
	List<Registration> findByEventId(Long eventId);
}
