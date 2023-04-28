function MivieItem (props) {

    function toggleHandler(e) {
        e.preventDefault();
        (e.target.classList.contains("dial-wind") === true) ? e.target.classList.remove("dial-wind") : e.target.classList.add("dial-wind");
    }
    
    
    
    const {
        Title: title,
        Year: year,
        imdbID: id,
        Type: type,
        Poster: poster
    } = props;
    return(
        
            <div   className="card movie" id={id}>
                <div onClick={toggleHandler} className="box">
                        <div className="box__body">
                            <div className="masck"></div>
                            <div className='box_body_img'>
                                <img className="dial-wind_img" src={poster}/>
                            </div>
                            <div className="box_body_info">
                                <h2>{title}</h2>
                                <p>{year}</p><span className="right-side">{type}</span>
                            </div>
                        </div>
                </div>



                <div className="card-image waves-effect waves-block waves-light">
                    
                    <img className="activator" src={poster}/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>{title}</p></span>
                    <p className="card-description">
                    <p>{year}</p><span className="right-side">{type}</span>
                    </p>
                </div>
            </div>
    )
}

export{ MivieItem }




// "Title": "Gladiator",
// "Year": "2000",
// "imdbID": "tt0172495",
// "Type": "movie",
// "Poster": "https://m.media-amazon.com/images/M/MV5BMDliMmNhNDEtODUyOS00MjNlLTgxODEtN2U3NzIxMGVkZTA1L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"