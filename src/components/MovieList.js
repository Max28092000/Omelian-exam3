import { MivieItem } from "./MovieItem";


function MovieList(props) {
    const {movieList =[]} = props;

    return(
         <section className="movies">
            {movieList.map(movie => <MivieItem key={movie.imdbID}{...movie}/>)}
         </section>
    )
}
export {MovieList};