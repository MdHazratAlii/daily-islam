import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import homeIcon from './assets/home.png';
import './Qna.css'; // Assuming you have a CSS file for styling

const Qna: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const qnaList = [
    { id: 1, question: 'নামাজের সময় কীভাবে নিয়ত করতে হয়?', answer: 'নামাজের সময় মনে মনে নিয়ত করতে হয় এবং মুখে উচ্চারণ করা সুন্নত।' },
    { id: 2, question: 'রোজার সময় কোন দোয়া পড়া উচিত?', answer: 'রোজার নিয়তের দোয়া: নাওয়াইতু আন আসুমা গাদান লিল্লাহি তাআলা।' },
    { id: 3, question: 'যাকাত কাদের উপর ফরজ?', answer: 'যাকাত সেই ব্যক্তির উপর ফরজ, যার নেসাব পরিমাণ সম্পদ আছে।' },
    { id: 4, question: 'হজের জন্য কী কী শর্ত পূরণ করতে হয়?', answer: 'হজের জন্য শারীরিক ও আর্থিক সামর্থ্য থাকা আবশ্যক।' },
    { id: 5, question: 'কুরআন তিলাওয়াতের আগে কোন দোয়া পড়া হয়?', answer: 'আউজু বিল্লাহি মিনাশ শাইত্বানির রাজিম।' },
  ];

  const filteredQna = qnaList.filter((qna) =>
    qna.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
    qna.answer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="qna-page">
      <h1 className="top-title">প্রশ্নোত্তর</h1>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="প্রশ্ন খুঁজুন..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {/* QnA List */}
      <ul className="qna-list">
        {filteredQna.map((qna) => (
          <li key={qna.id} className="qna-item">
            <Link to={`/qna/${qna.id}`} className="qna-link">
              <div>{qna.question}</div>
            </Link>
          </li>
        ))}
      </ul>

      {/* Bottom Navigation */}
      <div className="bottom-nav">
        <button onClick={() => window.location.href = '/dua'}>দোয়া</button>
        <button onClick={() => window.location.href = '/'}>
          <img src={homeIcon} alt="Home" className="icon" />
        </button>
        <button onClick={() => window.location.href = '/qna'}>প্রশ্নোত্তর</button>
      </div>
    </div>
  );
};

export default Qna;