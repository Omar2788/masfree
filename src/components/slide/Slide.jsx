import React, { useState } from 'react'
import './Slide.scss'
import Carousel from "react-simply-carousel";

const Slide = ({ children }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  
  return (
    <div className="slide">
      <div className="container">
        <Carousel 
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={2}
          itemsToScroll={2}
          forwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'transparent',
              border: 'none',
              borderRadius: '50%',
              color: 'rgb(0, 155, 142)',
              cursor: 'pointer',
              fontSize: '20px',
              height: 20,
              lineHeight: 1,
              textAlign: 'center',
              width: 20,
              margin: '0 10px',
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            style: {
              alignSelf: 'center',
              background: 'transparent',
              border: 'none',
              borderRadius: '50%',
              color: 'rgb(0, 155, 142)',
              cursor: 'pointer',
              fontSize: '20px',
              height: 20,
              lineHeight: 1,
              textAlign: 'center',
              width: 20,
              margin: '0 10px',
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: 4,
              itemsToScroll: 4,
              minWidth: 768,
            },
          ]}
          speed={400}
          easing="linear"
        >
          {children}
        </Carousel>
      </div>
    </div>
  );
};

export default Slide;

