import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import style from "./Hero.module.scss";
import Image from "next/image";
import q from '../../../assets/1.jpg';
import w from '../../../assets/2.jpg';
import e from '../../../assets/3.jpg';
import r from '../../../assets/4.jpg';
import t from '../../../assets/5.jpg';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={style.hh}>
      <div className={style.toto}>
        <h1>ИНФОРМАТИКИ</h1>
        <p>Ваша любимая группа!</p>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect} className={style.slider}>
        <Carousel.Item className={style.lol}>
          <Image src={q} className={style.img} />
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={w} className={style.img} width={4000} height={3000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={e} className={style.img} />
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={r} className={style.img} height={1150}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={t} className={style.img} height={3000}/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
