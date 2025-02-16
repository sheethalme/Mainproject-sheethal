package com.marian.susProject.Model;



import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class register {
	@Id
@GeneratedValue(strategy=GenerationType.IDENTITY)
	private long resId;
	
	@OneToOne(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY) 
	private ProfileImage profileImage;
	
	private String userName;
	
	private String houseName;
	
	private Integer houseNumber;

	private Integer wardNumber;
	
	private String phoneNumber;
	private String place;
	private String email;
	private String role;
	private String password; 
	private String confirmPassword;
	
	

	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getRole() {
		return role;
	}
	public void setRole(String role) {
		this.role = role;
	}
	
	public long getResId() {
		return resId;
	}
	public void setResId(long resId) {
		this.resId = resId;
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
	public Integer getHouseNumber() {
		return houseNumber;
	}
	public void setHouseNumber(Integer houseNumber) {
		this.houseNumber = houseNumber;
	}
	public Integer getWardNumber() {
		return wardNumber;
	}
	public void setWardNumber(Integer wardNumber) {
		this.wardNumber = wardNumber;
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
	public ProfileImage getProfileImage() { 
		return profileImage; 
	} 
	public void setProfileImage(ProfileImage profileImage) 
	{ 
		this.profileImage = profileImage;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmPassword() {
		return confirmPassword;
	}
	public void setConfirmPassword(String confirmPassword) {
		this.confirmPassword = confirmPassword;
	}
	
	
	
	public register() {
		super();
		// TODO Auto-generated constructor stub
	}
	public register(long resId, String userName, String houseName, Integer houseNumber, Integer wardNumber, String phoneNumber,
			String place,String role,String email, String password,String confirmPassword)
			{
		super();
		this.resId = resId;
		this.userName = userName;
		this.houseName = houseName;
		this.houseNumber = houseNumber;
		this.wardNumber = wardNumber;
		this.phoneNumber = phoneNumber;
		this.place = place;
		this.email=email;
		this.role=role;
		this.password = password;
		this.confirmPassword = confirmPassword;
	}
	@Override
	public String toString() {
		return "register [resId=" + resId + ", userName=" + userName + ", houseName=" + houseName + ", houseNumber="
				+ houseNumber + ", wardNumber=" + wardNumber + ", phoneNumber=" + phoneNumber + ", place=" + place+",email"+email
				+ ", role=" + role + ", password=" + password + ", confirmPassword=" + confirmPassword + "]";
	}
	
	}
	
	
	
	

