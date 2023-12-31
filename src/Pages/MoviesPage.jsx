import Footer from "../Componants/Footer/Footer";
import Header from "../Componants/Header/Header";
import MoviesList from "../Componants/MoviesPage/Movies";
import SignBoard from "../Componants/SignBoard/SignBoard";
import ReactPaginate from "react-paginate";
const MoviePage = () => {
  return (
    <div className="moviePage">
      <Header />
      <SignBoard headLine={"Movie"} />
      <MoviesList />
      <Footer />
    </div>
  );
};

export default MoviePage;
