package com.marian.susProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marian.susProject.Model.ProfileImage;

@Repository
public interface ProfileImageRepository extends JpaRepository <ProfileImage, Long>
{
	ProfileImage findByUserResId(long userId);

}
