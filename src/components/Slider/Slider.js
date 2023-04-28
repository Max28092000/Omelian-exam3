
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./style.css";

// import  modules
import { EffectCoverflow, Pagination,Navigation, Mousewheel, Keyboard } from "swiper";

function Slider () {
    return (
        <>
          <h1 className="Slider-title">TOP New</h1>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            navigation={true}
            pagination={true}
            modules={[EffectCoverflow, Pagination,Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="./assets/img/GATSBY.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>GATSBY</p></span>
                    <p className="card-description">
                        <p>2023</p><span className="right-side">movie</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="./assets/img/FORDVFERRARI.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>FORDFERRARI</p></span>
                    <p className="card-description">
                        <p>2023</p><span className="right-side">movie</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="./assets/img/CREED.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>CREED</p></span>
                    <p className="card-description">
                        <p>2023</p><span className="right-side">movie</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="./assets/img/JUMANJI.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>JUMANJI</p></span>
                    <p className="card-description">
                        <p>2023</p><span className="right-side">movie</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="./assets/img/KINGSMAN.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>KINGSMAN</p></span>
                    <p className="card-description">
                        <p>2023</p><span className="right-side">movie</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="./assets/img/MADMAX.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>MADMAX</p></span>
                    <p className="card-description">
                        <p>2023</p><span className="right-side">movie</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="./assets/img/SPIDERMAN.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>SPIDERMAN</p></span>
                    <p className="card-description">
                        <p>2023</p><span className="right-side">movie</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="./assets/img/THOR.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>THOR</p></span>
                    <p className="card-description">
                        <p>2023</p><span className="right-side">movie</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card movie">
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src="./assets/img/WOLFOFWALLSTREET.jpg"/>
                </div>
                <div className="card-content">
                    <span className="card-title activator "><p>WOLFOFWALLSTREET</p></span>
                    <p className="card-description">
                        <p>2023</p><span className="right-side">movie</span>
                    </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </>
      );
    };

export {Slider};

