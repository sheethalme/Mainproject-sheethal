package com.marian.susProject.Controller;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.marian.susProject.Model.VideoModel;
import com.marian.susProject.Service.VideoSer;

@RestController
@RequestMapping("/api/videos")
@CrossOrigin(origins = "http://localhost:3000")
public class VideoCon {
	private final VideoSer videoService;

    public VideoCon(VideoSer videoService) {
        this.videoService = videoService;
    }

    @GetMapping("/get")
    public List<VideoModel> getAllVideos() {
        return videoService.getAllVideos();
    }

    @PostMapping("/post")
    public VideoModel addVideo(@RequestBody VideoModel video) {
        return videoService.saveVideo(video);
    }
	

}
