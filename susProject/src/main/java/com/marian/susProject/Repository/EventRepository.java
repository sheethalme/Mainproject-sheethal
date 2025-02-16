package com.marian.susProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marian.susProject.Model.Event;

@Repository
public interface EventRepository extends JpaRepository<Event,Long>{

}
