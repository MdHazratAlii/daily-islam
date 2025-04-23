import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import homeIcon from './assets/home.png';
import PrayerRules from './PrayerRules';
import Dua from './Dua';
import Qna from './Qna';
import QnaDetails from './QnaDetails';
import DuaDetails from './DuaDetails';
import AdminLogin from './AdminLogin';
import AdminPanel from './AdminPanel';

const convertToBanglaDigits = (numberString: string) => {
  const banglaDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return numberString.replace(/[0-9]/g, (digit) => banglaDigits[parseInt(digit)]);
};

const salatDetails: Record<string, JSX.Element> = {
  fajr: (
    <div>
      <h3>📿 ফজর (Fajr) – মোট 4 রাকাত</h3>
      <ul>
        <li>2 রাকাত সুন্নাত মুয়াক্কাদা</li>
        <li>2 রাকাত ফরজ</li>
      </ul>
    </div>
  ),
  dhuhr: (
    <div>
      <h3>📿 যোহর (Dhuhr) – মোট 10 রাকাত</h3>
      <ul>
        <li>4 রাকাত সুন্নাত মুয়াক্কাদা</li>
        <li>4 রাকাত ফরজ</li>
        <li>2 রাকাত সুন্নাত মুয়াক্কাদা</li>
        <li>2 রাকাত নফল (ঐচ্ছিক)</li>
      </ul>
    </div>
  ),
  asr: (
    <div>
      <h3>📿 আসর (Asr) – মোট 4 রাকাত</h3>
      <ul>
        <li>4 রাকাত সুন্নাত গাইর মুয়াক্কাদা</li>
        <li>4 রাকাত ফরজ</li>
      </ul>
    </div>
  ),
  maghrib: (
    <div>
      <h3>📿 মাগরিব (Maghrib) – মোট 5 রাকাত</h3>
      <ul>
        <li>3 রাকাত ফরজ</li>
        <li>2 রাকাত সুন্নাত মুয়াক্কাদা</li>
        <li>2 রাকাত নফল (ঐচ্ছিক)</li>
      </ul>
    </div>
  ),
  isha: (
    <div>
      <h3>📿 ইশা (Isha) – মোট 13 রাকাত</h3>
      <ul>
        <li>4 রাকাত সুন্নাত গাইর মুয়াক্কাদা</li>
        <li>4 রাকাত ফরজ</li>
        <li>2 রাকাত সুন্নাত মুয়াক্কাদা</li>
        <li>2 রাকাত নফল</li>
        <li>3 রাকাত বিতর ওয়াজিব</li>
      </ul>
    </div>
  ),
  jummah: (
    <div>
      <h3>📿 জুম্মা (Jumu'ah) – মোট 14 রাকাত (সাধারণ নিয়মে)</h3>
      <ul>
        <li>4 রাকাত সুন্নাত মুয়াক্কাদা</li>
        <li>2 রাকাত ফরজ (জামাতে)</li>
        <li>4 রাকাত সুন্নাত মুয়াক্কাদা</li>
        <li>2 রাকাত সুন্নাত মুয়াক্কাদা</li>
        <li>2 রাকাত নফল</li>
      </ul>
    </div>
  )
};

const App: React.FC = () => {
  const [time, setTime] = useState<string>("");
  const [popupContent, setPopupContent] = useState<JSX.Element | null>(null);

  useEffect(() => {
    const updateTime = () => {
      const dhakaTime = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Dhaka" }));
      const formattedTime = dhakaTime.toLocaleTimeString();
      setTime(convertToBanglaDigits(formattedTime));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleCardClick = (salat: string) => {
    setPopupContent(salatDetails[salat]);
  };

  const closePopup = () => {
    setPopupContent(null);
  };

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <div>
              {/* Top Bar */}
              <div className="top-bar">
                <p className="welcome-message">ইসলামিক ওয়েব অ্যাপে স্বাগতম</p>
                <p className="clock">{time}</p>
              </div>

              {/* Summary Section */}
              <div className="summary">
                <h2>সংক্ষিপ্ত বিবরণ</h2>
                <p>ইসলামের শিক্ষা অন্বেষণ করুন, সূরা পড়ুন, আপনার প্রশ্নের উত্তর খুঁজুন এবং দৈনন্দিন ইসলামী নিয়ম শিখুন।</p>
              </div>

              {/* Salat Times Section */}
              <div className="salat-times">
                <h2>নামাজের সময়</h2>
                <div className="salat-cards">
                  <div className="salat-card" id="jummah" onClick={() => handleCardClick('jummah')}>
                    <h3>জুম্মা</h3>
                    <p>1:05 AM</p>
                  </div>
                  <div className="salat-card" id="fajr" onClick={() => handleCardClick('fajr')}>
                    <h3>ফজর</h3>
                    <p>5:05 AM</p>
                  </div>
                  <div className="salat-card next-salat" id="dhuhr" onClick={() => handleCardClick('dhuhr')}>
                    <h3>যোহর</h3>
                    <p>1:15 PM</p>
                  </div>
                  <div className="salat-card" id="asr" onClick={() => handleCardClick('asr')}>
                    <h3>আসর</h3>
                    <p>4:00 PM</p>
                  </div>
                  <div className="salat-card" id="maghrib" onClick={() => handleCardClick('maghrib')}>
                    <h3>মাগরিব</h3>
                    <p>6:35 PM</p>
                  </div>
                  <div className="salat-card" id="isha" onClick={() => handleCardClick('isha')}>
                    <h3>ইশা</h3>
                    <p>8:15 AM</p>
                  </div>
                </div>
                <Link to="/prayer-rules" className="prayer-rules-button">নামাজ পড়ার নিয়ম</Link>
              </div>

              {/* Popup */}
              {popupContent && (
                <div className="popup" onClick={closePopup}>
                  <div className="popup-content">
                    {popupContent}
                    <button onClick={closePopup}>Close</button>
                  </div>
                </div>
              )}

              {/* Bottom Navigation */}
              <div className="bottom-nav">
                <button onClick={() => window.location.href = '/dua'}>দোয়া</button>
                <button onClick={() => window.location.href = '/'}>
                  <img src={homeIcon} alt="Home" className="icon" />
                </button>
                <button onClick={() => window.location.href = '/qna'}>প্রশ্নোত্তর</button>
              </div>
            </div>
          } />
          <Route path="/prayer-rules" element={<PrayerRules />} />
          <Route path="/dua" element={<Dua />} />
          <Route path="/dua/:id" element={<DuaDetails />} />
          <Route path="/qna" element={<Qna />} />
          <Route path="/qna/:id" element={<QnaDetails />} />
          <Route path="/adminlogin" element={<AdminLogin />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
