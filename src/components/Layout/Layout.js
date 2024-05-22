
import "./Layout.css";
import CategoryList from "../CategoryList/CategoryList";
import Footer from "../Footer/Footer";
import DiscountProd from "../DiscountProd/DisountProd";
import Header from "../Header/Header"

export default function Layout(props) {
  return (
    <div className="Layout">

      <header>
        <Header/>
      </header>
      <aside>
        <CategoryList />
        <DiscountProd/>
      </aside>
      <main>{props.children}</main>

      <footer>
        <Footer />
      </footer>


    </div>
  )
}