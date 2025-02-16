package com.marian.susProject.Model;

import java.util.Arrays;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Lob;

@Entity
public class ComplientModel {
	  @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    private String description;
	    private String location;

	    @Lob
	    private byte[] photo;

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}

		public String getLocation() {
			return location;
		}

		public void setLocation(String location) {
			this.location = location;
		}

		public byte[] getPhoto() {
			return photo;
		}

		public void setPhoto(byte[] photo) {
			this.photo = photo;
		}

		public ComplientModel() {
			super();
			// TODO Auto-generated constructor stub
		}

		public ComplientModel(Long id, String description, String location, byte[] photo) {
			super();
			this.id = id;
			this.description = description;
			this.location = location;
			this.photo = photo;
		}

		@Override
		public String toString() {
			return "ComplientModel [id=" + id + ", description=" + description + ", location=" + location + ", photo="
					+ Arrays.toString(photo) + "]";
		}

}
