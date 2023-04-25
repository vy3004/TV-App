import React from "react";
import "./SliderMovie.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../../data.json";
import { useStateProvider } from "../../utils/StateProvider";
import { actionTypes } from "../../utils/Constant";

export default function SliderMovie() {
  const [, dispatch] = useStateProvider();

  const handleSetCurrentMovie = ({ id, image, title, description, rate }) => {
    dispatch({
      type: actionTypes.SET_CURRENT_MOVIE,
      current_movie: {
        id: id,
        title: title,
        image: image,
        description: description,
        rate: rate,
      },
    });
  };

  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    data && (
      <div className="slider-container">
        <div className="slider-title">Popular Movies</div>
        <Slider {...settings} className="slider-content">
          {data.map(({ id, image, title, description, rate }) => {
            return (
              <div key={id} className="slider-item">
                <img
                  src={image}
                  alt="img"
                  onClick={() =>
                    handleSetCurrentMovie({
                      id,
                      image,
                      title,
                      description,
                      rate,
                    })
                  }
                />
              </div>
            );
          })}
        </Slider>
      </div>
    )
  );
}
