import React from 'react';
import style from './solutions.module.scss';
import ContentHeadTitle from '../../components/ContentHeadTitlte/ContentHeadTitle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import first from '../../../assets/45/1.jpeg'
import second from '../../../assets/45/2.jpeg'
import third from '../../../assets/45/5.jpg'
 
const teachers = [
  {
    predmet: 'Компьютерное моделирование математических и физических задач',
    name: 'Барганалиева Жылдыз Калыбековна',
    id: 3,
    image: second,
    books: [
      {
        title: '',
        id: 1
      }
    ]
  },
  {
    predmet: 'Профессионально-базовая практика',
    name: 'Бузурманкулова Айгуль Абдыжалиловна',
    id: 8,
    image: first,
    books: [
      {
        title: '',
        id: 1
      }
    ]
  },
  {
    predmet: 'Теоретические основы информатики',
    name: 'Султанбаева Гульмира Салымбаевна',
    id: 9,
    image: third,
    books: [
      {
        title: '',
        id: 1
      }
    ]
  }
]

const Solutions = () => {

  return (
    <div id={'solutions'} className='container'>
      <div className={style.solutions}>
        <motion.div
          className={style.heading}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <ContentHeadTitle title={'Преподаватели'} centered />
        </motion.div>
        <motion.div
          className={style.blocks}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.5 }}
          variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          {teachers.map(item => (
            <div className={style.block}>
              <div className={style.image_block}>
                <Image src={item.image}/>
              </div>
              <p className={style.name}>{item.name}</p>
              <p className={style.predmet}>{item.predmet}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Solutions;
