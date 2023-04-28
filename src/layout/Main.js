import React from "react";
import { MovieList } from '../components/MovieList';

import { InfoFilm } from "../components/InfoFilm/InfoFilm";
import { Slider } from "../components/Slider/Slider";

// import  bgvideo  from '../assets/img/bg-video.mp4';
// import { CarouselBox } from "../components/CarouselBox";


class Main extends React.Component{
    state = {
        movieList: []
    }

     componentDidMount(){
        fetch('http://www.omdbapi.com/?apikey=44b8a6f5&s=top')
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search}))
     }
    render(){
        const {movieList} = this.state;
        return(

            <main className='main'>
                {/* <video src={bgvideo} autoPlay loop muted /> */}
                <div className="container">
                    <Slider/>
                    <br/>
                    <br/>
                {
                    movieList.length ? (<MovieList movieList={this.state.movieList}/>)  : <h3> Loading ...</h3>
                }
                <InfoFilm/>
                </div>
            </main>
        )
    }
}

export {Main};