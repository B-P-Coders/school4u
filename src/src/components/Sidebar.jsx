import {FiSettings}  from "react-icons/fi";
import React, {useState} from 'react';
import styles from '../styles/sidebar.module.css';
import { Link } from 'react-router-dom';
import Links from './Links';
import logo from "../images/icon.png"
import ToggleSwitch from './ToggleSwitch';

export default function Sidebar () {
  return (
    <>
    <div className={styles.drag}></div>
    <div className={styles.main}>
      <div className={styles.logo}>
        <img className={styles.logoimg} src={logo} alt="logo" />
      </div>

      <ul className={styles.list}>
        <Links/>
      </ul>
    </div>
    </>
  )
}
