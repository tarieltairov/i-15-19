import { Carousel } from "react-bootstrap";
import React, { useState } from "react";
import style from "./Hero.module.scss";
import Image from "next/image";
import q from '../../../assets/18/1.jpeg';
import w from '../../../assets/18/2.jpeg';
import e from '../../../assets/18/3.jpeg';
import r from '../../../assets/18/4.jpeg';
import t from '../../../assets/18/5.jpeg';
import y from '../../../assets/18/6.jpeg';
import u from '../../../assets/18/7.jpeg';
import i from '../../../assets/18/8.jpeg';
import o from '../../../assets/18/9.jpeg';
import p from '../../../assets/18/10.jpeg';

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
          <Image src={q} className={style.img} height={1000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={w} className={style.img} height={1000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={e} className={style.img} height={1000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={r} className={style.img} height={1000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={t} className={style.img} height={1000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={y} className={style.img} height={1000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={u} className={style.img} height={1000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={i} className={style.img} height={1000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={o} className={style.img} height={1000}/>
        </Carousel.Item>
        <Carousel.Item className={style.lol}>
          <Image src={p} className={style.img} height={1000}/>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Hero;
