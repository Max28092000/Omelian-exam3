import "./InfoFilm.css";
function InfoFilm() {

    function toggleHandler(e) {
        e.preventDefault();
        (e.target.classList.contains("active_p") === true) ? e.target.classList.remove("active_p") : e.target.classList.add("active_p");
    }

    const setActive = ({isActive}) => isActive ? 'active-link' : '';

    return(
        <div className="container" >
            <article className="project">
                <div className="project__photo">
                    <div onClick={toggleHandler} className="more-details-1 active_p">
                        <p className="project__p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum porro odit alias ducimus dicta, vitae placeat, quisquam atque, quia eveniet unde ipsa facilis fuga? Quos voluptas porro, ipsam incidunt repellendus corporis molestiae, doloremque tempore aspernatur quas dolorem ex voluptatibus harum voluptatum minima maxime. </p>
                    </div>
                    <img src="./assets/img/CREED.jpg" alt="project-img_1" className="project-img"/>
                </div>
                <div className="project__content">
                    <h2 className="title">
                        <span>CREED III</span><br/>
                        03.03.2023
                    </h2>
                    <p className="project__p">
                        Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.<br/>
                        Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.<br/>
                    </p>
                </div>
            </article>
            <article className="project">
                <div className="project__photo project__photo_rev">
                    <div onClick={toggleHandler} className="more-details-1 active_p">
                        <p className="project__p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum porro odit alias ducimus dicta, vitae placeat, quisquam atque, quia eveniet unde ipsa facilis fuga? Quos voluptas porro, ipsam incidunt repellendus corporis molestiae, doloremque tempore aspernatur quas dolorem ex voluptatibus harum voluptatum minima maxime. </p>
                    </div>
                    <img src="./assets/img/FORDVFERRARI.jpg" alt="project-img_1" className="project-img"/>
                </div>
                <div className="project__content">
                    <h2 className="title">
                        <span>FORD v FERRARI</span><br/>
                        25.05.2023
                    </h2>
                    <p className="project__p">
                        Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.<br/>
                        Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.<br/>
                    </p>
                </div>
            </article>
            <article className="project">
                <div className="project__photo">
                    <div onClick={toggleHandler} className="more-details-1 active_p">
                        <p className="project__p1">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum porro odit alias ducimus dicta, vitae placeat, quisquam atque, quia eveniet unde ipsa facilis fuga? Quos voluptas porro, ipsam incidunt repellendus corporis molestiae, doloremque tempore aspernatur quas dolorem ex voluptatibus harum voluptatum minima maxime. </p>
                    </div>
                    <img src="./assets/img/KINGSMAN.jpg" alt="project-img_1" className="project-img"/>
                </div>
                <div className="project__content">
                    <h2 className="title">
                        <span>KINGSMAN</span><br/>
                        12.01.2023
                    </h2>
                    <p className="project__p">
                        Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.<br/>
                        Increasing prosperity in our lives can be accomplished by having the right frame of mind. The truth is, our thoughts are very powerful.<br/>
                    </p>
                </div>
            </article>
        </div>

    )
}

export {InfoFilm};
