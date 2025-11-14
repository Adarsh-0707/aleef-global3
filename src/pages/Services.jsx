import ServicesGrid from "../components/ServicesGrid.jsx";
import bannerImg from "../assets/home 2.png";

export default function Services() {
  return (
    <>
      <div className="container-xl section">
       <div className="overflow-hidden rounded-5 shadow-lg banner-wrapper">
  <img
    src={bannerImg}
    alt="Aleef Global Services"
    className="
      w-100 
      h-100
      object-cover
      grayscale
      hover:grayscale-0
      brightness-90
      hover:brightness-105
      transition-all
      duration-700
      ease-in-out
      hover:scale-[1.02]
    "
  />
</div>

      </div>

      <ServicesGrid />
    </>
  );
}
