import React from "react";
import style from "./Header.module.scss";
import { MainMenu } from "./Menu/MainMenu";
import Link from "next/link";
import { useRouter } from 'next/router'
const Header = ({ inView }) => {
  const router = useRouter()
  return (
    <header className={`${style.mainHeader} ${inView ? style.mainHeaderBlack : style.mainHeaderWhite}`}>
      <div className={style.header}>
        <div className={style.logo}>
          <Link href="/">
            <h2>ФМО-И-15-19</h2>
          </Link>
        </div>
        <div className={style.links}>
          <Link href="/group"><p >Группа</p></Link>
          <Link href="/timetable"><p >Расписание</p></Link>
          <Link href="/teacher"><p>Учителя</p></Link>
        </div>
        <div
          className={style.burger}>
          <MainMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;
