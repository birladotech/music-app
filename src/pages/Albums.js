import React from "react";
import ReactJkMusicPlayer from "react-jinke-music-player";
import 'react-jinke-music-player/assets/index.css';
import { options } from "../assets/data/option";

export default function Albums() {

  return (

    
    <ReactJkMusicPlayer
      {...options}
      onThemeChange={(theme) => {
        console.log("onThemeChange: ", theme);
        // updateParams({ theme });
      }}
      onModeChange={(mode) => {
        console.log("onModeChange: ", mode);
        // updateParams({ mode });
      }}
      onPlayModeChange={(playMode) => {
        console.log("onPlayModeChange: ", playMode);
        // updateParams({ playMode });
      }}
      onPlayIndexChange={(playIndex) => {
        console.log("onPlayIndexChange: ", playIndex);
        // updateParams({ playIndex });
      }}
    />
  );
}
