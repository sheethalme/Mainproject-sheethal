package com.marian.susProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marian.susProject.Model.ComplientModel;

@Repository
public interface ComplientRepo extends JpaRepository<ComplientModel,Long>{
	

}
