package com.marian.susProject.Model;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;

@Entity
public class ProfileImage {
	@Id 
	@GeneratedValue(strategy = GenerationType.IDENTITY) 
	private long id; 
	
	@Lob 
	private byte[] image; 
	
	@OneToOne @JoinColumn(name = "user_id", referencedColumnName = "resId") 
	private register user; // Getters and Setters
	
	public long getId() 
	{
		return id; 
	} 
	
	public void setId(Long id) {
		this.id = id; } 
	public byte[] getImage() { 
		return image; } 
	public void setImage(byte[] image) { 
		this.image = image; } 
	public register getUser() {
		return user; } 
	public void setUser(register user) { 
		this.user=user;
	}
}
	
