import ProductsGrid from "../components/ProductsGrid.jsx";
import bannerImg from "../assets/product-background.png";

export default function Products() {
  return (
    <>
      <div className="container-xl section">
        <div className="overflow-hidden rounded-5 mb-5 shadow-lg">
          <img
            src={bannerImg}
            alt="Aleef Global Products"
            className="
              w-100 
              object-cover
              transition-all
              duration-700
              ease-in-out
              hover:scale-[1.02]
            "
            style={{ height: "420px", width: "100%", objectFit: "cover" }}
          />
        </div>
      </div>

      <ProductsGrid />
    </>
  );
}
