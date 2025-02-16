package com.marian.susProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Data;

@Entity
@Data
public class VideoModel {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;
	    private String title;
	    private String description;
	    private String videoUrl; // URL to the video
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
		public String getVideoUrl() {
			return videoUrl;
		}
		public void setVideoUrl(String videoUrl) {
			this.videoUrl = videoUrl;
		}
		public VideoModel() {
			super();
			// TODO Auto-generated constructor stub
		}
		public VideoModel(Long id, String title, String description, String videoUrl) {
			super();
			this.id = id;
			this.title = title;
			this.description = description;
			this.videoUrl = videoUrl;
		}
		@Override
		public String toString() {
			return "VideoModel [id=" + id + ", title=" + title + ", description=" + description + ", videoUrl="
					+ videoUrl + "]";
		}
	    
	    
	
}
