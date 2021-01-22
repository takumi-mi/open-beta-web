import React from "react";
import List from "./tecblog/react/List";
import HowToStart from "./tecblog/react/HowToStart";
import HowToScss from "./tecblog/react/HowToScss";

export default function VuePage() {
  return (
    <div>
      <hr />
      <div class="article" data-aos="fade" data-aos-duration="1000">
        <List />
        <hr />
        <HowToStart />
        <hr />
        <HowToScss />
      </div>
    </div>
  );
}
