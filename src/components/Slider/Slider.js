import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './Slider.css'; // Импорт вашего CSS файла

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
              <h2 className="title">2022 Flower Trend</h2>
              <p className="desc-content">
                Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no, nec ea quodsi invenire.
              </p>
            </div>
          </div>

          {/* Второй слайд */}
          <div className="intro11-section swiper-slide slide-2 slide-bg-2 bg-position">
            <div className="intro11-content text-left">
              <h3 className="title-slider black-slider-title text-uppercase">Collection</h3>
              <h2 className="title">Flowers and Candle <br /> Birthday Gift</h2>
              <p className="desc-content">
                Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no, nec ea quodsi invenire.
              </p>
            </div>
          </div>

          {/* Третий слайд */}
          <div className="intro11-section swiper-slide slide-3 slide-bg-3 bg-position">
            <div className="intro11-content text-left">
              <h3 className="title-slider black-slider-title text-uppercase">Collection</h3>
              <h2 className="title">Flowers and Candle <br /> Birthday Gift</h2>
              <p className="desc-content">
                Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no, nec ea quodsi invenire.
              </p>
            </div>
          </div>

          <div className="intro11-section swiper-slide slide-4 slide-bg-4 bg-position">
            <div className="intro11-content text-left">
              <h3 className="title-slider black-slider-title text-uppercase">Collection</h3>
              <h2 className="title">Flowers and Candle <br /> Birthday Gift</h2>
              <p className="desc-content">
                Lorem ipsum dolor sit amet, pri autem nemore bonorum te. Autem fierent ullamcorper ius no, nec ea quodsi invenire.
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
