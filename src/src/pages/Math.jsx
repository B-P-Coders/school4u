import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../components/Layout'
import * as styles from '../styles/index.module.css'
import Header from '../components/Header'
import Card  from "../components/Card";
import Calculator from '../images/calc.png';
import Charts from '../images/chart.png';
import Formulas from '../images/formulas.png';
import BinCalculator from '../pages/BinCalculator';

export default function Math () {
  return (
    <Layout>
      <div className={styles.main}>
      <Header value="Welcome to our Math mark! You can find here some reaally helpful tools!"/>
      <div className={styles.cardsContainer}>
        <Link to="/bincalculator">
          <Card pic={Charts} title="From decimal to binary, hex and octal" desc="No number system is a problem for you now!"  values={
            [
              'Tool used mostly by people intrested in IT but not only.  Hope you enjoy it!'
            ]
          }/>
        </Link>

        <Link to="/formulas">
        <Card pic={Formulas} title="Those are really helpful" desc="We've made some amazing tools just for you! It's all to help you get better in any subject!" values={
          [
            'Basics', 'Advanced', 'Physics', 'Chemistry', 'Math'
          ]
        }/>
        </Link>
        <Link to="/calculator">
        <Card pic={Calculator} title="Calculator4U" desc="Feel free to use this calculator whenever you need!" values={
          [
            'Probably the most useful thing to use while doing math or physics homework. Essential for counting.'
          ]
        }/>
        </Link>

      </div>
      </div>

    </Layout>
  )
}
