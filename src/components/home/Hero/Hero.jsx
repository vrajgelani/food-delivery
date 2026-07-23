import "./Hero.css";
import "./Hero.css";
import heroBg from "../../../assets/images/hero-bg.jpg";

function Hero() {
  return (
    <section
  className="hero"
  style={{
    backgroundImage: `url(${heroBg})`,
  }}
>
  <div className="overlay">
    <div className="hero-content">

      <h1>Order Delicious Food Online</h1>

      <p>
        Fresh food delivered to your doorstep in minutes.
      </p>

      <div className="hero-search">
        <input
          type="text"
          placeholder="Search food..."
        />

        <button>
          Order Now
        </button>
      </div>

    </div>
  </div>
</section>
  );
}

export default Hero;