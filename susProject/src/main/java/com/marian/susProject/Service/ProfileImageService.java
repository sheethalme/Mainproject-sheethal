package com.marian.susProject.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.marian.susProject.Model.ProfileImage;
import com.marian.susProject.Repository.ProfileImageRepository;

import jakarta.transaction.Transactional;

@Service
public class ProfileImageService {
	
	@Autowired 
	private ProfileImageRepository profileImageRepository; 
	@Transactional 
	public ProfileImage save(ProfileImage profileImage)
	{ 
		return profileImageRepository.save(profileImage);
	} 
	public ProfileImage findById(long id) 
	{
		return profileImageRepository.findById(id).orElse(null);
	}
	public ProfileImage findByUserResId(Long userId) 
	{
		return profileImageRepository.findByUserResId(userId);
	}
}
