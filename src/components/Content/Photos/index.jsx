// import { useState } from "react";
import PhotoAlbum from "react-photo-album";

function Photos() {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1718115257239-7246f434a7b0?q=80&w=2350&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1683290222161-c5a296987dc9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8",
    },
    {
      src: "https://images.unsplash.com/photo-1718019668172-5380fd58f2c5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4fHx8ZW58MHx8fHx8",
    },
  ];
  return (
    <div>
      <PhotoAlbum layout="masonry" photos={photos} />;
    </div>
  );
}
export default Photos;
