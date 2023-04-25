import React from "react";
import "./SliderMovie.css";
import data from "../../data.json";
import { useStateProvider } from "../../utils/StateProvider";
import { actionTypes } from "../../utils/Constant";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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

  return (
    <div className="slider-container">
      <div className="slider-title">Popular Movies</div>
      <Carousel
        className="slider-content"
        additionalTransfrom={1}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        centerMode={false}
        draggable
        focusOnSelect={false}
        infinite
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover={true}
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
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
      </Carousel>
    </div>
  );
}
