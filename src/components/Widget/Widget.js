import React from "react";
import "./Widget.css";

const Widget = () => {
  return (
    <div className="widget">
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%Fwww.facebook.com%2FCCleverProgrammerr%2F&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
        width="340"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrollings="no"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default Widget;
