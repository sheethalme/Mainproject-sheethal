package com.marian.susProject.Service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.marian.susProject.Model.VideoModel;
import com.marian.susProject.Repository.videoRepo;

@Service
public class VideoSer {
	private final videoRepo videoRepository;

    public VideoSer(videoRepo videoRepository) {
        this.videoRepository = videoRepository;
    }

    public List<VideoModel> getAllVideos() {
        return videoRepository.findAll();
    }

    public VideoModel saveVideo(VideoModel video) {
        return videoRepository.save(video);
    }

}
