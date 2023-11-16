import React from "react";
import Section from "./Section";
import Header from "./Header";
import { useSelector } from "react-redux";

const Home = () => {
  const { carData } = useSelector((state) => state.car);
  return (
    <div className="Container">
      <Header />
      {carData.map((item) => {
        const {
          id,
          title,
          description,
          image,
          LeftButton,
          RightButton,
          video,
          isVideo,
        } = item;
        return (
          <Section
            key={id}
            title={title}
            description={description}
            image={image}
            LeftButton={LeftButton}
            RightButton={RightButton}
            isVideo={isVideo}
            video={video}
          />
        );
      })}
    </div>
  );
};

export default Home;
