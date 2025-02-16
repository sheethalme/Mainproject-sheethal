package com.marian.susProject.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Waste {
	 	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		private Long WasteId;
		private String wasteType;
	    private String quantity;
	    private String wardNo;
	    private String houseName;
	    private String place;
	    private String collectionTime;
		public Long getWasteId() {
			return WasteId;
		}
		public void setWasteId(Long wasteId) {
			WasteId = wasteId;
		}
		public String getWasteType() {
			return wasteType;
		}
		public void setWasteType(String wasteType) {
			this.wasteType = wasteType;
		}
		public String getQuantity() {
			return quantity;
		}
		public void setQuantity(String quantity) {
			this.quantity = quantity;
		}
		public String getWardNo() {
			return wardNo;
		}
		public void setWardNo(String wardNo) {
			this.wardNo = wardNo;
		}
		public String getHouseName() {
			return houseName;
		}
		public void setHouseName(String houseName) {
			this.houseName = houseName;
		}
		public String getPlace() {
			return place;
		}
		public void setPlace(String place) {
			this.place = place;
		}
		public String getCollectionTime() {
			return collectionTime;
		}
		public void setCollectionTime(String collectionTime) {
			this.collectionTime = collectionTime;
		}
		public Waste() {
			super();
			// TODO Auto-generated constructor stub
		}
		public Waste(Long wasteId, String wasteType, String quantity, String wardNo, String houseName, String place,
				String collectionTime) {
			super();
			WasteId = wasteId;
			this.wasteType = wasteType;
			this.quantity = quantity;
			this.wardNo = wardNo;
			this.houseName = houseName;
			this.place = place;
			this.collectionTime = collectionTime;
		}
		@Override
		public String toString() {
			return "Waste [WasteId=" + WasteId + ", wasteType=" + wasteType + ", quantity=" + quantity + ", wardNo="
					+ wardNo + ", houseName=" + houseName + ", place=" + place + ", collectionTime=" + collectionTime
					+ "]";
		}
	    

}
