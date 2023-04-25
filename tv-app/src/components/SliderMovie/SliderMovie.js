import React, { useState } from "react";
import "./SliderMovie.css";
import data from "../../data.json";
import { useStateProvider } from "../../utils/StateProvider";
import { actionTypes } from "../../utils/Constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function SliderMovie() {
  const [, dispatch] = useStateProvider();
  const [focus, setFocus] = useState(false);

  const handleSetCurrentMovie = ({ id, image, title, description, rate }) => {
    setFocus(true);

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

  return (
    <div className="slider-container">
      <div className="slider-title">Popular Movies</div>
      <Carousel
        className="slider-content"
        arrows
        autoPlay={!focus}
        autoPlaySpeed={2000}
        pauseOnHover={true}
        infinite
        draggable
        swipeable
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1200,
            },
            items: 6,
            partialVisibilityGutter: 40,
          },
          desktopSm: {
            breakpoint: {
              max: 1200,
              min: 1024,
            },
            items: 5,
            partialVisibilityGutter: 40,
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 864,
            },
            items: 4,
            partialVisibilityGutter: 30,
          },
          tabletSm: {
            breakpoint: {
              max: 864,
              min: 464,
            },
            items: 3,
            partialVisibilityGutter: 30,
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0,
            },
            items: 1,
            partialVisibilityGutter: 30,
          },
        }}
      >
        {data.map(({ id, image, title, description, rate }) => {
          return (
            <div
              key={id}
              className="slider-item"
              onMouseLeave={() => setFocus(false)}
            >
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
      </Carousel>
    </div>
  );
}
