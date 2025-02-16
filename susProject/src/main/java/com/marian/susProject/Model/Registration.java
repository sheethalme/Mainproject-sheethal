package com.marian.susProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;

@Entity
public class Registration {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String houseName;
    private String wardNumber;
    private String phoneNumber;
    

    @ManyToOne
    private Event event; // Link to the Event entity


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public String getHouseName() {
		return houseName;
	}


	public void setHouseName(String houseName) {
		this.houseName = houseName;
	}


	public String getWardNumber() {
		return wardNumber;
	}


	public void setWardNumber(String wardNumber) {
		this.wardNumber = wardNumber;
	}


	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public Event getEvent() {
		return event;
	}


	public void setEvent(Event event) {
		this.event = event;
	}


	public Registration() {
		super();
		// TODO Auto-generated constructor stub
	}


	public Registration(Long id, String name, String houseName, String wardNumber, String phoneNumber, Event event) {
		super();
		this.id = id;
		this.name = name;
		this.houseName = houseName;
		this.wardNumber = wardNumber;
		this.phoneNumber = phoneNumber;
		this.event = event;
	}


	@Override
	public String toString() {
		return "Registration [id=" + id + ", name=" + name + ", houseName=" + houseName + ", wardNumber=" + wardNumber
				+ ", phoneNumber=" + phoneNumber + ", event=" + event + "]";
	}
    
    


}
