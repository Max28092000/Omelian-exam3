import React from "react";
import { MovieList } from '../components/MovieList';
import { Preloader } from '../components/Preloader';
import { InputSearch } from '../components/InputSearch/InputSearch';

import { Slider } from "../components/Slider/Slider";

// import  bgvideo  from '../assets/img/bg-video.mp4';

const API_KEY = process.env.REACT_APP_API_KEY;

class Home extends React.Component{
    state = {
        movieList: [],
        loading: true,
    }

    

    componentDidMount() {
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }

    searchMovies = (stringSearch, type = 'all') => {
        let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${stringSearch}${type !== 'all' ? `&type=${type}` : ``}`;
        fetch(url)
            .then(response => response.json())
            .then(data => this.setState({movieList: data.Search, loading: false}))
    }
    render(){
        const {movieList, loading} = this.state;
        return(

            <main className='main'>
                {/* <video src={bgvideo} autoPlay loop muted /> */}
                <div className="container">
                    <Slider/>
                    <br/>
                    <br/>
                <InputSearch searchMovies={this.searchMovies} />
                {
                    loading ?  <Preloader /> : (<MovieList movieList={movieList}/>) 
                }
                </div>
            </main>
        )
    }
}

export {Home};