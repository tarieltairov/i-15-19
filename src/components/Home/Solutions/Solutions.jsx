import React from 'react';
import style from './solutions.module.scss';
import ContentHeadTitle from '../../components/ContentHeadTitlte/ContentHeadTitle';
import { motion } from 'framer-motion';

const teachers = [
  {
    predmet: 'Информационная безопасность',
    name: 'Кашкароева Алтын Абдюбековна',
    id: 1,
    image: '',
    books: [
      {
        title: '',
        id: 1
      }
    ]
  },
  {
    predmet: 'Информационные системы и база данных',
    name: 'Керимов Улан Турсунбекович',
    id: 2,
    image: '',
    books: [
      {
        title: '',
        id: 1
      }
    ]
  },
  {
    predmet: 'Компьютерное моделирование математических и физических задач',
    name: 'Барганалиева Жылдыз Калыбековна',
    id: 3,
    image: '',
    books: [
      {
        title: '',
        id: 1
      }
    ]
  },
  {
    predmet: 'Компьютерные сети и системы телекоммуникаций',
    name: 'Юсупов Кабулджан Мусинович',
    id: 4,
    image: '',
    books: [
      {
        title: '',
        id: 1
      }
    ]
  },
  {
    predmet: 'Методика преподавания физико-математического образования (Информатика)',
    name: 'Султанбаева Гульмира Салымбаевна',
    id: 5,
    image: '',
    books: [
      {
        title: '',
        id: 1
      }
    ]
  },
  {
    predmet: 'Практикум программирования по решению предметно-ориентированных задач на ПК',
    name: 'Султанбаева Гульмира Салымбаевна',
    id: 6,
    image: '',
    books: [
      {
        title: '',
        id: 1
      }
    ]
  },
  {
    predmet: 'Программирование нестандартных и проблемно-ситуационных задач',
    name: 'Ачекеев Кадырбек сталбекович',
    id: 7,
    image: '',
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
    image: '',
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
    image: '',
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
