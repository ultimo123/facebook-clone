import React from "react";
import "./StoryReel.css";
import Story from "./Story/Story";

const StoryReel = () => {
  return (
    <div className="storyReel">
      {/* Story */}
      <Story
        image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png"
        profileSrc="https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg"
        title="Olger Sema"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTJEWskoAsOT9PqucyXxos1FsUfbaftJlwQMg&usqp=CAU"
        profileSrc="https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg"
        title="Michael jordan"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRMzBCWWvRPe1Jh5oIaBrtaPBJkeUUZweenlw&usqp=CAU"
        profileSrc="https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg"
        title="Kaka"
      />
      <Story
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjWMotEN7-OAWD8Eik6fe5gElGuQibad1J5Q&usqp=CAU"
        profileSrc="https://upload.wikimedia.org/wikipedia/en/b/b0/Avatar-Teaser-Poster.jpg"
        title="Shevcenko"
      />
    </div>
  );
};

export default StoryReel;
