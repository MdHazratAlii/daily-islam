import React from 'react';
import { useParams } from 'react-router-dom';
import homeIcon from './assets/home.png';

const QnaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const qnaList = [
    { id: 1, question: 'নামাজের সময় কীভাবে নিয়ত করতে হয়?', answer: 'নামাজের সময় মনে মনে নিয়ত করতে হয় এবং মুখে উচ্চারণ করা সুন্নত।' },
    { id: 2, question: 'রোজার সময় কোন দোয়া পড়া উচিত?', answer: 'রোজার নিয়তের দোয়া: নাওয়াইতু আন আসুমা গাদান লিল্লাহি তাআলা।' },
    { id: 3, question: 'যাকাত কাদের উপর ফরজ?', answer: 'যাকাত সেই ব্যক্তির উপর ফরজ, যার নেসাব পরিমাণ সম্পদ আছে।' },
    { id: 4, question: 'হজের জন্য কী কী শর্ত পূরণ করতে হয়?', answer: 'হজের জন্য শারীরিক ও আর্থিক সামর্থ্য থাকা আবশ্যক।' },
    { id: 5, question: 'কুরআন তিলাওয়াতের আগে কোন দোয়া পড়া হয়?', answer: 'আউজু বিল্লাহি মিনাশ শাইত্বানির রাজিম।' },
  ];

  const qna = qnaList.find((item) => item.id === parseInt(id || '0'));

  if (!qna) {
    return <p>প্রশ্নটি খুঁজে পাওয়া যায়নি।</p>;
  }

  return (
    <div className="qna-details-page">
      <h1 className="top-title">{qna.question}</h1>
      <p>{qna.answer}</p>

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

export default QnaDetails;