import React from 'react';
import { useParams } from 'react-router-dom';
import homeIcon from './assets/home.png';
import './Dua.css';

const duas = [
  { id: 1, title: 'রাব্বানা আতিনা', text: 'রাব্বানা আতিনা ফিদ্দুনিয়া হাসানাতাওঁ ওয়া ফিল আখিরাতি হাসানাতাওঁ ওয়া ক্বিনা আযাবান্নার।' },
  { id: 2, title: 'আল্লাহুম্মাগফিরলি', text: 'আল্লাহুম্মাগফিরলি ওয়া লিওয়ালিদাইয়া ওয়া লিলমুমিনিনা ইয়াওমা ইয়াকুমুল হিসাব।' },
  { id: 3, title: 'রাব্বিজ্জালনি', text: 'রাব্বিজ্জালনি মুকিমাস সালাতি ওয়া মিন যুররিয়্যাতি।' },
  { id: 4, title: 'রাব্বির হামহুমা', text: 'রাব্বির হামহুমা কামা রাব্বাইয়ানি সাগিরা।' },
  { id: 5, title: 'আল্লাহুম্মা ইন্নি', text: 'আল্লাহুম্মা ইন্নি আসআলুকা ইলমান নাফিআ।' },
];

const DuaDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dua = duas.find((d) => d.id === parseInt(id || '0'));

  if (!dua) {
    return <p>দোয়া খুঁজে পাওয়া যায়নি।</p>;
  }

  return (
    <div className="dua-details-page">
      <h1 className="top-title">{dua.title}</h1>
      <p>{dua.text}</p>

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

export default DuaDetails;