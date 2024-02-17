import React from "react";
import { useParams } from "react-router-dom";
import "./Video.css";
import PLayVideo from "../../components/PlayVideo/PlayVideo";
import Recommended from "../../components/Recommended/Recommended";

const Video = () => {
  const { videoId, categoryId } = useParams();

  return (
    <div className="play-container">
      <PLayVideo videoId={videoId} />
      <Recommended categoryId={categoryId} /> {/* Passe categoryId para o componente Recommended */}
    </div>
  );
};

export default Video;
