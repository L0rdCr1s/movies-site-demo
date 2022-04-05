import Framework from 'components/Framework';
import Hero from 'components/hero/Hero';
import MoviesList from "components/movies/List";

function MainPage() {
  return (
      <Framework>
          <Hero />
          <MoviesList />
      </Framework>
  );
}

export default MainPage;
