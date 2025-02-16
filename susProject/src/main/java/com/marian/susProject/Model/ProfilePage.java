package com.marian.susProject.Model;

import java.util.Arrays;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.Lob;
import jakarta.persistence.OneToOne;

@Entity
public class ProfilePage {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    private String houseName;
    private String wardNumber;
    private String houseNumber;
    private String phoneNumber;
    private String place;
    
    @OneToOne
    @JoinColumn(name="user_id")
    private register register;

    @Lob
    private String profilePicture;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
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

	public String getHouseNumber() {
		return houseNumber;
	}

	public void setHouseNumber(String houseNumber) {
		this.houseNumber = houseNumber;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getPlace() {
		return place;
	}

	public void setPlace(String place) {
		this.place = place;
	}

	public register getRegister() {
		return register;
	}

	public void setRegister(register register) {
		this.register = register;
	}

	public String getProfilePicture() {
		return profilePicture;
	}

	public void setProfilePicture(String profilePicture) {
		this.profilePicture = profilePicture;
	}

	@Override
	public String toString() {
		return "ProfilePage [id=" + id + ", userName=" + userName + ", houseName=" + houseName + ", wardNumber="
				+ wardNumber + ", houseNumber=" + houseNumber + ", phoneNumber=" + phoneNumber + ", place=" + place
				+ ", register=" + register + ", profilePicture=" + profilePicture + "]";
	}

	public ProfilePage(Long id, String userName, String houseName, String wardNumber, String houseNumber,
			String phoneNumber, String place, com.marian.susProject.Model.register register, String profilePicture) {
		super();
		this.id = id;
		this.userName = userName;
		this.houseName = houseName;
		this.wardNumber = wardNumber;
		this.houseNumber = houseNumber;
		this.phoneNumber = phoneNumber;
		this.place = place;
		this.register = register;
		this.profilePicture = profilePicture;
	}

	public ProfilePage() {
		super();
		// TODO Auto-generated constructor stub
	}

}
