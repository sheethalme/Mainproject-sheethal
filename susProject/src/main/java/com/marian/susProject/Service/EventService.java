package com.marian.susProject.Service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.susProject.Model.Event;
import com.marian.susProject.Repository.EventRepository;

@Service
public class EventService {
	

	    @Autowired
	    private EventRepository eventRepository;

	    /**
	     * Save a new event to the database.
	     *
	     * @param event Event object to be saved.
	     * @return Saved Event object.
	     */
	    public Event createEvent(Event event) {
	        return eventRepository.save(event);
	    }

	    /**
	     * Retrieve all events from the database.
	     *
	     * @return List of events.
	     */
	    public List<Event> getAllEvents() {
	        return eventRepository.findAll();
	    }

	    /**
	     * Retrieve a single event by its ID.
	     *
	     * @param id Event ID.
	     * @return Event object if found, otherwise null.
	     */
	    public Optional<Event> getEventById(Long id) {
	        return eventRepository.findById(id);
	    }

	    /**
	     * Update an existing event.
	     *
	     * @param id    Event ID.
	     * @param event Updated event details.
	     * @return Updated Event object if found, otherwise null.
	     */
	    public Event updateEvent(Long id, Event event) {
	        return eventRepository.findById(id).map(existingEvent -> {
	            existingEvent.setTitle(event.getTitle());
	            existingEvent.setDescription(event.getDescription());
	            existingEvent.setDate(event.getDate());
	            existingEvent.setLocation(event.getLocation());
	            return eventRepository.save(existingEvent);
	        }).orElse(null);
	    }

	    /**
	     * Delete an event by its ID.
	     *
	     * @param id Event ID.
	     */
	    public void deleteEvent(Long id) {
	        eventRepository.deleteById(id);
	    }
	}


