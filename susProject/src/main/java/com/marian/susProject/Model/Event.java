package com.marian.susProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Event {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String date;
    private String location;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public String getDate() {
		return date;
	}
	public void setDate(String date) {
		this.date = date;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Event() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Event(Long id, String title, String description, String date, String location) {
		super();
		this.id = id;
		this.title = title;
		this.description = description;
		this.date = date;
		this.location = location;
	}
	@Override
	public String toString() {
		return "Event [id=" + id + ", title=" + title + ", description=" + description + ", date=" + date
				+ ", location=" + location + "]";
	}
    
    

}
