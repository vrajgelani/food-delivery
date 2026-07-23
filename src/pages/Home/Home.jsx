import Hero from "../../components/home/Hero/Hero";
import Categories from "../../components/home/Categories/Categories";
import PopularFood from "../../components/home/PopularFood/PopularFood";
import Offers from "../../components/home/Offers/Offers";
import Restaurants from "../../components/home/Restaurants/Restaurants";

function Home() {
  return (
    <>
      <Hero />
      <Categories />
      <PopularFood />
      <Offers />
      <Restaurants />
    </>
  );
}

export default Home;