import React from 'react';
import './Introduction.css';

const Introduction: React.FC = () => {
  return (
    <section className="introduction">
      <div className="profile-container">
        <div className="profile">
          <img src={require('../assets/codau.jpg')} alt="Cô Dâu" className="profile-image" />
          <div className="profile-info">
            <h2>Cô Dâu: Nguyễn Thị A</h2>
            <p>Sở thích: Du lịch, Nấu ăn, Cắm hoa...</p>
            <p>Câu chuyện tình yêu: Chúng tôi gặp nhau ở một quán café nhỏ...</p>
          </div>
        </div>

        <div className="profile">
          <img src={require('../assets/chure.jpg')} alt="Chú Rể" className="profile-image" />
          <div className="profile-info">
            <h2>Chú Rể: Trần Văn B</h2>
            <p>Sở thích: Chạy bộ, Chơi game, Du lịch...</p>
            <p>Câu chuyện tình yêu: Tôi đã gặp cô ấy trong một chuyến du lịch...</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
