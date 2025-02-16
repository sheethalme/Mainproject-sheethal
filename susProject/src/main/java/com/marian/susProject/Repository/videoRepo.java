package com.marian.susProject.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.marian.susProject.Model.VideoModel;

@Repository
public interface videoRepo extends JpaRepository <VideoModel,Long> {

}
