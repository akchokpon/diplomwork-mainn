import HitProducts from "../components/HitProducts/HitProducts";
import SliderComponent from "../components/Slider/Slider";

import FastFoodDelivery from "../components/FastFoodDelivery/FastFoodDelivery";




export default function Home() {
  return (
    <div className="Home">
     <div className="container">
      <SliderComponent/>
      <HitProducts/>
      <FastFoodDelivery/>
  
      </div>
    </div>
  )
}