import React, { useEffect, useState } from 'react';
import style from './About.module.scss';
import BoltIcon from '../../../assets/svg/Icon-bolt.svg';
import Image from 'next/image';
import { useMediaQuery } from 'react-responsive';
import ContentHeadTitle from '../../components/ContentHeadTitlte/ContentHeadTitle';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { motion } from 'framer-motion';
import q from '../../../assets/18/7.jpeg'
import e from '../../../assets/18/2.jpeg'

import ko from '../../../assets/18/student/1.jpeg';
import w from '../../../assets/18/student/2.jpeg';
import n from '../../../assets/18/student/3.jpeg';
import r from '../../../assets/18/student/4.jpeg';
import t from '../../../assets/18/student/5.jpeg';
import y from '../../../assets/18/student/6.jpeg';
import u from '../../../assets/18/student/7.jpeg';
import i from '../../../assets/18/student/8.jpeg';
import o from '../../../assets/18/student/9.jpeg';
import p from '../../../assets/18/student/10.jpeg';
import a from '../../../assets/18/student/11.jpeg';
import s from '../../../assets/18/student/12.jpeg';
import d from '../../../assets/18/student/13.jpeg';
import f from '../../../assets/18/student/14.jpeg';
import g from '../../../assets/18/student/15.jpeg';
import h from '../../../assets/18/student/16.jpeg';
import j from '../../../assets/18/student/17.jpeg';
import k from '../../../assets/18/student/18.jpeg';
import l from '../../../assets/18/student/19.jpeg';

import tariel from '../../../assets/students/tari.jpeg';


const group = [
  {
    id: 1, name: 'Алина Назарбекова', url: ko
  },
  {
    id: 2, name: 'Жылдызбек кызы Нургул', url: w
  },
  {
    id: 3, name: 'Кенешбекова Айжамал', url: n
  },
  {
    id: 4, name: 'Эмилова Альбина ', url: r
  },
  {
    id: 5, name: 'Жыргалбек кызы Дариха', url: t
  },
  {
    id: 6, name: 'Назарбекова Бурул', url: y
  },
  {
    id: 7, name: 'Мыктыбек кызы Айгерим', url: u
  },
  {
    id: 8, name: 'Доолотбаев Бектур', url: tariel
  },
  {
    id: 9, name: 'Автандил кызы Айнура', url: o
  },
  {
    id: 10, name: 'Абдыкалил у Адилет', url: p
  },
  {
    id: 11, name: 'Бакыт уулу Расул', url: a
  },
  {
    id: 12, name: 'Султанбекова Айгерим', url: s
  },
  {
    id: 13, name: 'Собитов Донишжон', url: d
  },
  {
    id: 14, name: 'Нурбек к Айдай ', url: f
  },
  {
    id: 15, name: 'Ыдырыс кызы Бурмачач', url: g
  },
  {
    id: 16, name: 'Бекмуратова Уулжан', url: h
  },
  {
    id: 17, name: 'Жолчубек кызы Арчагул', url: j
  },
  {
    id: 18, name: 'Абышова Керез', url: k
  },
  {
    id: 19, name: 'Орозбекова Жумаян', url: l
  },
]

const About = () => {
  const [open, setOpen] = useState(false);
  const isLaptop = useMediaQuery({ query: '(max-width: 992px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');
  useEffect(() => {
    getText1();
  }, []);
  async function getText1() {
    try {
      let res = await axios.get(
        'https://kanatik6.pythonanywhere.com/message/about_us/'
      );
      setText(res.data[0]);
    } catch (e) {
      console.log(e);
    }
  }
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [open]);

  const animateShadow = open
    ? {
      position: 'fixed',
      width: '100vw',
      height: '100vh',
      borderRadius: '0%',
      background: 'rgba(0, 0, 0, 0.5)',
      zIndex: 13,
    }
    : {
      width: '10px',
      height: '10px',
      borderRadius: '50%',
      background: 'transparent',
    };




  return (
    <div className={style.main}>
      <div id={'about'} className='container'>
        <div className={style.block}>
          <div className={style.firstBlock}>
            <motion.div
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0 },
              }}
              className={style.heading}
            >
              <ContentHeadTitle title={'Группа'} centered/>
            </motion.div>
            <div className={style.content}>
              <motion.h4
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                Кыргызский Государственный Университет им. Ишеналы Арабаева
              </motion.h4>
              <motion.div
                className={style.contentBlock}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <Image src={BoltIcon} />
                <p>Факультет физико-математического образования и информационных технологий</p>
              </motion.div>
              <motion.div
                className={style.contentBlock}
                initial='hidden'
                whileInView='visible'
                transition={{ duration: 0.5 }}
                variants={{
                  visible: { opacity: 1, scale: 1 },
                  hidden: { opacity: 0, scale: 0 },
                }}
              >
                <Image src={BoltIcon} />
                <p>Профиль - Информатика.  Код группы - ФМО-И-15-18</p>
              </motion.div>
            </div>

          </div>

          <div animate={animateShadow} className={style.shadow} />
          <motion.div
            initial='hidden'
            whileInView='visible'
            transition={{ duration: 0.5 }}
            variants={{
              visible: { scale: 1 },
              hidden: { scale: 0 },
            }}
          >
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              className={style.slider}
            >
              <Carousel.Item>
                <Image src={q} width={900} height={650} />
              </Carousel.Item>
              <Carousel.Item>
                <Image src={e} width={900} height={650} />
              </Carousel.Item>
            </Carousel>
          </motion.div>
        </div>
        <motion.div

          className={style.group}
        >
          {group.map(student => (
            <motion.div
              initial='hidden'
              whileInView='visible'
              transition={{ duration: 0.5 }}
              variants={{
                visible: { scale: 1 },
                hidden: { scale: 0 },
              }}
              key={student.id}
              className={style.student_block}
            >
              <Image src={student.url} height={7000}/>

              <h4>{student.name}</h4>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default About;
