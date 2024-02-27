import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import ArticleSuggest from "../components/ArticleSuggest";
import SocialLinks from "../components/SocialLinks";
import VerticalDivider from "../components/VerticalDivider";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-start justify-center w-full h-full gap-8 p-4">
        <div className="flex flex-col">
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
          <ArticleCard />
        </div>
        <VerticalDivider />
        <div className="">
          <ArticleSuggest />
          <ArticleSuggest />
          <ArticleSuggest />
          <ArticleSuggest />
          <ArticleSuggest />
        </div>
      </div>
      <SocialLinks />
      <Footer />
    </>
  );
};

export default Home;
