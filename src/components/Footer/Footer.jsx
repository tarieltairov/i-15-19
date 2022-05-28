import React from 'react';
import style from './Footer.module.scss';
import Insta from '../../assets/new/insta.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className='container'>
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
          <div className={style.blockFooter}>
            <div className={style.logoBlock}>
              <h2>ФМО-И-15-19</h2>
            </div>
            <p>Группа информатиков</p>
          </div>
          <div className={style.blockFooter}>
            <h3>Страницы</h3>
            <a href='/'>Главная</a>
            <a href='/group'>Группа</a>
            <a href='/timetable'>Расписание</a>
            <a href='/teacher'>Учителя</a>
          </div>
          <div className={style.blockFooter}>
            <h3>Контакты</h3>
            <a href='mailto:fmo.i15.19@mail.ru'>fmo.i15.19@mail.ru</a>
            <a href='tel:+996704135830'>+996704135830</a>
            <div className={style.socialMedia}>
              <a
                rel='noreferrer noopener'
                target='_blank'
                href='https://www.instagram.com/fmo_i1519/'
                style={{display: 'flex'}}
              >
                <Image src={Insta} width={50} height={50} />
                instagram
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
