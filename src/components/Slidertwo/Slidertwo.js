import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Slidertwo.css'; // Импорт вашего CSS файла

const SliderComponent = () => {
  useEffect(() => {
    const swiper = new Swiper('.intro11-slider', {
      loop: true,
      autoplay: {
        delay: 5000,
      },
      navigation: {
        nextEl: '.home1-slider-next',
        prevEl: '.home1-slider-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="intro11-slider-wrap section">
      <div className="intro11-slider swiper-container">
        <div className="swiper-wrapper">
          {/* Первый слайд */}
          <div className="intro11-section swiper-slide slide-1 slide-bg-1 bg-position">
            <div className="intro11-content text-left">
              <h3 className="title-slider text-uppercase">Top Trend</h3>
              <h2 className="title">2024 Flower Trend</h2>
              <p className="desc-content">
              Discover the Top Trending Flowers of 2024! Elevate your space with the latest floral sensations. From vibrant hues to delicate blossoms, explore the blooms captivating markets worldwide. Stay ahead of the curve and infuse your surroundings with the freshest floral trends of the year
              </p>
            </div>
          </div>

          {/* Второй слайд */}
          <div className="intro11-section swiper-slide slide-2 slide-bg-2 bg-position">
            <div className="intro11-content text-left">
              <h3 className="title-slider black-slider-title text-uppercase">Collection</h3>
              <h2 className="title">Flowers and Candle <br /> Birthday Gift</h2>
              <p className="desc-content">
              "Unveil the Floral Marvels Shaping 2024's Market Trends! Dive into a world of botanical wonders, where each petal tells a story of elegance and charm. Elevate your decor with the season's most sought-after blooms. Explore the top trends in floral design and bring nature's beauty into your life!"
              </p>
            </div>
          </div>

          {/* Третий слайд */}
          <div className="intro11-section swiper-slide slide-3 slide-bg-3 bg-position">
            <div className="intro11-content text-left">
              <h3 className="title-slider black-slider-title text-uppercase">Collection</h3>
              <h2 className="title">Flowers and Candle <br /> Birthday Gift</h2>
              <p className="desc-content">
              "Unveil the Floral Marvels Shaping 2024's Market Trends! Dive into a world of botanical wonders, where each petal tells a story of elegance and charm. Elevate your decor with the season's most sought-after blooms. Explore the top trends in floral design and bring nature's beauty into your life!"
              </p>
            </div>
          </div>

          <div className="intro11-section swiper-slide slide-4 slide-bg-4 bg-position">
            <div className="intro11-content text-left">
              <h3 className="title-slider black-slider-title text-uppercase">Collection</h3>
              <h2 className="title">Flowers and Candle <br /> Birthday Gift</h2>
              <p className="desc-content">
                "Discover the Bloom Buzz: 2024's Top Flower Trends! From classic roses to exotic orchids, explore the captivating array of floral favorites dominating the market. Elevate your space with vibrant hues and delicate petals. Stay ahead of the curve and indulge in the timeless allure of nature's finest creations!"
              </p>
            </div>
          </div>
        </div>
        {/* Slider Navigation */}
       
        {/* Slider pagination */}
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SliderComponent;
