import React, { useState } from 'react';
import './WishForm.css';
const WishForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [wish, setWish] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Bạn có thể xử lý form ở đây, ví dụ gửi dữ liệu đến server
    alert(`Lời chúc từ: ${name}\nSố điện thoại: ${phone}\nLời chúc: ${wish}`);
  };

  return (
    <div className="wish-form">
      <h2>Lời chúc của bạn</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Họ và tên</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Nhập họ tên"
          />
        </div>
        <div className="input-group">
          <label htmlFor="phone">Số điện thoại</label>
          <input
            type="text"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            placeholder="Nhập số điện thoại"
          />
        </div>
        <div className="input-group">
          <label htmlFor="wish">Lời chúc</label>
          <textarea
            id="wish"
            value={wish}
            onChange={(e) => setWish(e.target.value)}
            required
            placeholder="Nhập lời chúc của bạn"
          />
        </div>
        <button type="submit" className="submit-button">Gửi lời chúc</button>
      </form>
    </div>
  );
};

export default WishForm;
