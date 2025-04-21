import React from 'react';
import './WeddingLocation.css';
const WeddingLocation: React.FC = () => {
  return (
    <div className="wedding-location">
      <h2>Địa điểm cưới</h2>
      <div className="location-container">
        {/* Lễ cưới - cô dâu */}
        <div className="location">
          <h3>Lễ cưới - Cô dâu</h3>
          <div className="location-image" style={{ backgroundImage: `url(${require('../assets/lecuoicodau.webp')})` }}></div>
          <p>Địa chỉ: 123 Phố ABC, Hà Nội</p>
          <p>Thời gian: 10:00 AM, ngày 1 tháng 6 năm 2025</p>
          <a href="https://www.google.com/maps?q=123+Phố+ABC,+Hà+Nội" target="_blank" rel="noopener noreferrer" className="google-map-link">
            Xem địa điểm trên bản đồ
          </a>
        </div>

        {/* Lễ cưới - chú rể */}
        <div className="location">
          <h3>Lễ cưới - Chú rể</h3>
          <div className="location-image" style={{ backgroundImage: `url(${require('../assets/lecuoichure.webp')})` }}></div>
          <p>Địa chỉ: 456 Phố DEF, Hà Nội</p>
          <p>Thời gian: 2:00 PM, ngày 1 tháng 6 năm 2025</p>
          <a href="https://www.google.com/maps?q=456+Phố+DEF,+Hà+Nội" target="_blank" rel="noopener noreferrer" className="google-map-link">
            Xem địa điểm trên bản đồ
          </a>
        </div>
      </div>
    </div>
  );
};

export default WeddingLocation;
