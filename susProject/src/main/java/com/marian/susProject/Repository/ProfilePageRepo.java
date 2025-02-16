package com.marian.susProject.Repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marian.susProject.Model.ProfilePage;

@Repository
public interface ProfilePageRepo  extends JpaRepository <ProfilePage,Long>{

	


	
}
