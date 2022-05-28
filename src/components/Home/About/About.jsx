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
import Aliya from '../../../assets/students/aliya.jpeg';
import jora from '../../../assets/students/jora.jpeg'
import tari from '../../../assets/students/tari.jpeg'
import q from '../../../assets/1.jpg'
import e from '../../../assets/3.jpg';
const group = [
  {
    id: 1, name: 'Алия Исамудинова', url: Aliya
  },
  {
    id: 2, name: 'Жакешова Алтынай', url: Aliya
  },
  {
    id: 3, name: 'Икрам к Турсунай', url: Aliya
  },
  {
    id: 4, name: 'Эркалиева Айнура', url: Aliya
  },
  {
    id: 5, name: 'Айбек к Кундузай', url: Aliya
  },
  {
    id: 6, name: 'Кенешова Даражан', url: Aliya
  },
  {
    id: 7, name: 'Мендибай к Жора', url: jora
  },
  {
    id: 8, name: 'Тургунбаева Айзирек', url: Aliya
  },
  {
    id: 9, name: 'Омошева Айзада', url: Aliya
  },
  {
    id: 9, name: 'Таиров Тариэл', url: tari
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
                <p>Профиль - Информатика.  Код группы - ФМО-И-15-19</p>
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
              <Image src={student.url} height={1000} width={500} />

              <h4>{student.name}</h4>
            </motion.div>
          ))}

        </motion.div>
      </div>
    </div>
  );
};

export default About;
