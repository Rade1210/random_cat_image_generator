import React, { useEffect, useState } from "react";
import style from "./CatGenerator.module.css";

const RandomCatGenerator = () => {
  const [catImage, setCatImage] = useState("");

  useEffect(() => {
    fetchCatImage();
  }, []);

  const fetchCatImage = async () => {
    const response = await fetch("https://api.thecatapi.com/v1/images/search");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    setCatImage(data[0].url);
  };

  return (
    <div className={style.container}>
      {catImage && (
        <img className={style.main_image} src={catImage} alt="Random cat" />
      )}
      <br />
      <button className={style.main_button} onClick={fetchCatImage}>Generisi sliku</button>
    </div>
  );
};

export default RandomCatGenerator;