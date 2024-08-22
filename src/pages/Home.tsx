import HomeDescription from "../features/main/HomeDescription";
import HomeFeatures from "../features/main/HomeFeatures";
import HomeHero from "../features/main/HomeHero";
import HomeSteper from "../features/main/HomeSteper";

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <HomeSteper />
      <HomeFeatures />
      <HomeDescription />
    </>
  );
};

export default Home;
