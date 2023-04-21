import React from 'react'
import styles from '../styleAll.module.css'
import { Link } from 'react-router-dom'

export const Home = () => {
  return (
    <div className={styles.hero}>
        <div className={styles.heroText}>
            <h2>The Best Way to <br/><span>Save</span>  &amp; Invest.</h2>
            <p>Saved$ helps over 4 million customers achieve their financial<br />goals by helping them save and invest with ease.</p>
            <Link to="/Signup">Create free Account</Link>
        </div>
        <div>
            <p>motion</p>
        </div>
    </div>
  )
}
