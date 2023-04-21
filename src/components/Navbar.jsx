import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styleAll.module.css'


export const Navbar = () => {
  return (
   <div className={styles.navbarComponents}>
      <div className={styles.navLogo}>
        <Link to="/">Saved$</Link>
      </div>
      <div className={styles.navLinks}>
        <Link to="/">Invest</Link>
        <Link to="/Login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
   </div>
  )
}
