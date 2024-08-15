import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContiner from "./MainContiner";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainContiner />
      <SecondaryContainer />
      {/* MainContainer
     - VideoBackground
     - VideoTitle
    SecondaryContainer
     - MovieList * n
        - Cards * n */}
    </div>
  );
};

export default Browse;
