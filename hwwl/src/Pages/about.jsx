import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './styles.css';
import card from './card.png';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const About = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);

  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div>
      <div style={{ width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", marginTop: "100px", border: "1px solid gray", padding: "60px", borderRadius: "10px" }}>
        <div style={{ width: "50%" }}>
          <button>Overview</button>
          <h1 style={{ color: "#1A1A1A" }}>Welcome to Little Learners <br /> Academy</h1>
        </div>
        <div style={{ width: "45%" }}>
          <p>A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential.</p>
        </div>
      </div>

      <div style={{ width: "90%", margin: "auto", textAlign: "center", marginTop: "100px" }}>
        <button>Mission & Visions</button>
        <h1 style={{ color: "#1A1A1A" }}>Our Mission & Visions</h1>
        <p>We are here to provide a nurturing and inclusive environment where young minds can thrive, fostering a love for learning and <br /> personal growth.</p>
      </div>

      <div style={{ flexWrap: "wrap", width: "90%", margin: "auto", display: "flex", justifyContent: "space-between", marginTop: "70px" }}>
        <div style={{ backgroundColor: "white", padding: "20px 40px", borderRadius: "12px", boxShadow: "5px 5px 0px #262626" }}>
          <h1 style={{ fontSize: '40px' }}>Mission</h1>
          <p style={{ width: "450px", fontSize: "16px" }}>At Little Learners Academy, our mission is to inspire a passion for learning and empower young minds to become confident, compassionate, and creative individuals. We strive to create a safe and inclusive space where children thrive academically, socially, and emotionally, setting the stage for a successful educational journey.</p>
        </div>
        <div style={{ backgroundColor: "white", padding: "20px 40px", borderRadius: "12px", boxShadow: "5px 5px 0px #262626" }}>
          <h1 style={{ fontSize: '40px' }}>Vision</h1>
          <p style={{ width: "450px", fontSize: "16px" }}>Our vision is to be a beacon of educational excellence, where children are encouraged to explore, discover, and express their unique talents. We aim to foster a generation of lifelong learners equipped with critical thinking, empathy, and a deep appreciation for diversity.</p>
        </div>
      </div>

      <div style={{ width: "90%", margin: "auto", marginTop: "100px" }}>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={card} alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>

          <div className="autoplay-progress" slot="container-end">
            <svg viewBox="0 0 48 48" ref={progressCircle}>
              <circle cx="24" cy="24" r="20"></circle>
            </svg>
            <span ref={progressContent}></span>
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default About;
