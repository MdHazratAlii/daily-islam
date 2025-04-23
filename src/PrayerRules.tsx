import React from 'react';
import homeIcon from './assets/home.png';
import './PrayerRules.css'; // Assuming you have a CSS file for styling

const PrayerRules: React.FC = () => {
  return (
    <div className="prayer-rules">
      <p class="top-title">নামাজের সম্পূর্ণ নিয়ম <br></br> (শুরু থেকে শেষ পর্যন্ত)</p>
      <p>নামাজ পড়ার সময় প্রতিটি ধাপে কিছু নির্দিষ্ট দোয়া ও জিকির পড়তে হয়। এখানে নামাজের প্রতিটি ধাপ এবং সাথে প্রয়োজনীয় দোয়াগুলো উল্লেখ করা হলো।</p>

      <div className="video-container">
  <iframe
    src="https://www.youtube-nocookie.com/embed/vx1rz-28HNk?si=y-GMfJsZx6FqyabW"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>

<p class="ytvideo">ভিডিওতে নামাজের নিয়মগুলো বিস্তারিতভাবে দেখানো হয়েছে।</p>

<div className="video-container">
  <iframe
    src="https://www.youtube.com/embed/9cUB1Ga8BBk?si=sAJbwJgUqxDWusJp"
    title="YouTube video player"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    referrerPolicy="strict-origin-when-cross-origin"
    allowFullScreen
  ></iframe>
</div>


      <h2>নামাজের ধাপে ধাপে নিয়ম</h2>
      <ol>
        <li>
          <strong>নিয়ত করা (নামাজের উদ্দেশ্য নির্ধারণ)</strong>
          <p>নামাজ শুরু করার আগে মনে মনে নিয়ত করতে হয়। মুখে উচ্চারণ করা সুন্নত।</p>
          <blockquote>
            "আমি আল্লাহর সন্তুষ্টির উদ্দেশ্যে [ফরজ/সুন্নত/নফল] [ফজর/যোহর/আসর/মাগরিব/ইশা] নামাজ আদায় করছি, কিবলামুখী হয়ে, আল্লাহু আকবার।"
          </blockquote>
        </li>

        <li>
          <strong>তাকবিরে তাহরিমা (নামাজ শুরু করা)</strong>
          <p>আল্লাহু আকবার বলে হাত তুলে কান পর্যন্ত নিয়ে যান এবং বুকের উপর বাঁধুন।</p>
        </li>

        <li>
          <strong>সানা পড়া (নামাজের শুরুতে)</strong>
          <blockquote>
            سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلٰهَ غَيْرُكَ
          </blockquote>
          <p>উচ্চারণ: সুবহানাকা আল্লাহুম্মা ওয়া বিহামদিকা, ওয়া তাবারাকাসমুকা, ওয়া তা’আলা জাদ্দুক, ওয়া লা ইলাহা গাইরুক।</p>
          <p>অর্থ: "হে আল্লাহ! তোমার মহিমা ও প্রশংসার সাথে তোমাকে পবিত্র ঘোষণা করছি..."</p>
        </li>

        <li>
          <strong>তাআউজ ও তাসমিয়া পড়া</strong>
          <p><strong>তাআউজ:</strong></p>
          <blockquote>أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ</blockquote>
          <p>উচ্চারণ: আউজু বিল্লাহি মিনাশ শাইত্বানির রাজিম।</p>
          <p><strong>তাসমিয়া:</strong></p>
          <blockquote>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</blockquote>
          <p>উচ্চারণ: বিসমিল্লাহির রাহমানির রাহিম।</p>
        </li>

        <li>
          <strong>সূরা ফাতিহা পড়া</strong>
          <blockquote>
            الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ... وَلَا الضَّالِّينَ
          </blockquote>
          <p>উচ্চারণ: আলহামদু লিল্লাহি... আমীন।</p>
        </li>

        <li>
          <strong>অতিরিক্ত সূরা পড়া</strong>
          <p>যেমন সূরা ইখলাস:</p>
          <blockquote>
            قُلْ هُوَ اللَّهُ أَحَدٌ... وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ
          </blockquote>
        </li>

        <li>
          <strong>রুকু করা</strong>
          <blockquote>سُبْحَانَ رَبِّيَ الْعَظِيمِ (৩ বার)</blockquote>
          <p>উচ্চারণ: সুবহানা রব্বিয়াল আজীম।</p>
        </li>

        <li>
          <strong>রুকু থেকে দাঁড়ানো</strong>
          <blockquote>
            سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ<br />
            رَبَّنَا وَلَكَ الْحَمْدُ
          </blockquote>
        </li>

        <li>
          <strong>সেজদা করা</strong>
          <blockquote>سُبْحَانَ رَبِّيَ الْأَعْلَى (৩ বার)</blockquote>
        </li>

        <li>
          <strong>দুই সেজদার মাঝে দোয়া</strong>
          <blockquote>
            رَبِّ اغْفِرْ لِي وَارْحَمْنِي وَاهْدِنِي وَاجْبُرْنِي...
          </blockquote>
        </li>

        <li>
          <strong>দ্বিতীয় সেজদা</strong>
          <p>একইভাবে দ্বিতীয় সেজদা করুন এবং উপরের দোয়া পড়ুন।</p>
        </li>

        <li>
          <strong>দ্বিতীয় রাকাআতে দাঁড়ানো</strong>
          <p>প্রথম রাকাআতের মতো দ্বিতীয় রাকাআত পড়ুন।</p>
        </li>

        <li>
          <strong>শেষ বৈঠক</strong>
          <p><strong>তাশাহুদ:</strong></p>
          <blockquote>اَلتَّحِيَّاتُ لِلّٰهِ... أَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ</blockquote>
          <p><strong>দরুদ ইব্রাহিম:</strong></p>
          <blockquote>اللَّهُمَّ صَلِّ عَلَىٰ مُحَمَّدٍ... إِنَّكَ حَمِيدٌ مَجِيدٌ</blockquote>
          <p><strong>দোয়া মাসুরা:</strong></p>
          <blockquote>رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ... يَوْمَ يَقُومُ الْحِسَابُ</blockquote>
          <blockquote>اللَّهُمَّ إِنِّي أَعُوذُ بِكَ... الْمَسِيحِ الدَّجَّالِ</blockquote>
        </li>

        <li>
          <strong>সালাম ফিরানো</strong>
          <blockquote>
            السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ (ডানে ও বামে)
          </blockquote>
        </li>
      </ol>

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

export default PrayerRules;
