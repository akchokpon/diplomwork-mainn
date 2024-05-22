
import "./About.css";
import photo1 from "../img/photo1.jpeg";
import photo2 from "../img/photo2.jpeg";
import photo3 from "../img/photo3.jpeg";
import SlidertwoComponent from "../components/Slidertwo/Slidertwo"


export default function About() {

  return (
    <div className="About">
      <SlidertwoComponent/>

      <h1>Our Team</h1>
      <div className="team">
        <div className="member">
          <img src={photo1} alt="Team Member 1" />
          <h3>Satkynbaeva Akcholpon</h3>
          <p>Florist namber 1</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit atque? Exercitationem illum, neque dolores hic quidem perspiciatis a doloremque unde obcaecati corrupti commodi nulla quos cupiditate. Fugit, ullam sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ipsum officiis atque dicta eum a, dolorum, laudantium nemo eaque quam exercitationem unde, facere earum recusandae sapiente molestias iste molestiae veniam.
          </p>
          <p>
            Phone: <a  className="nomer" href="tel:+996702899920">+996702899920</a>
          </p>
          <a className="link-instagram" href="https://www.instagram.com/">
            Instagram<i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="member">
          <img src={photo2} alt="Team Member 2" />
          <h3>Kim Hyungni</h3>
          <p>Menedjer</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit atque? Exercitationem illum, neque dolores hic quidem perspiciatis a doloremque unde obcaecati corrupti commodi nulla quos cupiditate. Fugit, ullam sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ipsum officiis atque dicta eum a, dolorum, laudantium nemo eaque quam exercitationem unde, facere earum recusandae sapiente molestias iste molestiae veniam.
          </p>
          <p>
            Phone: <a className="nomer" href="tel:+1234567890">+1234567890</a>
          </p>
          <a className="link-instagram" href="https://www.instagram.com/">
            Instagram<i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="member">
          <img src={photo3} alt="Team Member 3" />
          <h3>Jennie Kim Ruby Leny</h3>
          <p>Lead Designer</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, reprehenderit atque? Exercitationem illum, neque dolores hic quidem perspiciatis a doloremque unde obcaecati corrupti commodi nulla quos cupiditate. Fugit, ullam sit. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae ipsum officiis atque dicta eum a, dolorum, laudantium nemo eaque quam exercitationem unde, facere earum recusandae sapiente molestias iste molestiae veniam.
          </p>
          <p>
            Phone: <a className="nomer" href="tel:+1234567890">+1234567890</a>
          </p>
          <a className="link-instagram" href="https://www.instagram.com/">
            Instagram<i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="mission-container">
        <div className="mission">
          <h2 className="mission-header">Our Mission</h2>
          <p className="mission-text">
The main mission of the flower shop is to create a unique and inspiring experience for customers by offering them quality flowers and services that highlight the beauty of nature and bring joy to people's lives. The store aims to be more than just a place to buy flowers, but a hub where people can enjoy the beauty and scent of flowers, get expert advice on plant care and bouquet creation, and find inspiration for special moments in their lives.
          </p>
        </div>
      </div>
    </div>
  );
}
