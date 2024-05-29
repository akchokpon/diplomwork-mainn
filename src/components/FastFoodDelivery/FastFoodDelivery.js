import React from 'react';
import img1 from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import "./FastFoodDelivery.css";

function FastFoodImages() {
  return (
    <div className="fast_left flex">
      <div className="fast_img-big">
        <img src={img2} alt="" />
      </div>
      <div className="fast_img-sm">
        <div className="fast_img">
          <img src={img1} alt="" />
        </div>
        <div className="fast_img">
          <img src={img3} alt="" />
        </div>
      </div>
    </div>
  );
}

function FastFoodDescription() {
  return (
    <div className="fast_right">
      <h2 className="sec_sub-tit">We have the most beautiful and fresh flowers</h2>
      <p className="fast_txt">We have the most beautiful and fresh flowers to brighten your day and lift your spirits.
With an array of vibrant colors and fragrances, our flowers are sure to captivate your senses and delight your soul.
Explore our collection of stunning blooms, carefully curated to bring joy and beauty into your life.
From elegant roses to cheerful daisies, we offer a wide selection of exquisite flowers to suit every occasion.
Experience the enchantment of nature's finest creations with our exceptional range of floral arrangements.
Whether it's a romantic gesture or a heartfelt expression, our flowers convey your sentiments with grace and elegance.
Indulge in the allure of our blossoms, hand-picked and lovingly arranged to enchant and inspire.
Discover the magic of our floral wonders, designed to add a touch of sophistication to any setting.
Treat yourself or someone special to the luxury of our premium blooms, guaranteed to leave a lasting impression.
Let our beautiful and fresh flowers be the highlight of your celebrations and the symbol of your affection.We have the most beautiful and fresh flowers to brighten your day and lift your spirits.
With an array of vibrant colors and fragrances, our flowers are sure to captivate your senses and delight your soul. </p>
      
    </div>
  );
}

function FastFoodDelivery() {
  return (
    <div className="container">
      <div className="fast_in">
        <FastFoodImages />
        <FastFoodDescription />
      </div>
    </div>
  );
}

export default FastFoodDelivery;
