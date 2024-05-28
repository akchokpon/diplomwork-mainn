import HitProducts from "../components/HitProducts/HitProducts";
import SliderComponent from "../components/Slider/Slider";

import CategoryList from "../components/CategoryList/CategoryList";



export default function Home() {
  return (
    <div className="Home">
     <div className="container">
      <SliderComponent/>
      <CategoryList />
      <HitProducts/>
      </div>
    </div>
  )
}