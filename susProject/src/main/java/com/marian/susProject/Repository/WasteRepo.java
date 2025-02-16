package com.marian.susProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marian.susProject.Model.Waste;

@Repository
public interface WasteRepo extends JpaRepository<Waste,Long>{

}
