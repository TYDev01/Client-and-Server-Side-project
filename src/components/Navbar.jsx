import React from 'react'
import { Link } from 'react-router-dom'
import styles from '../styleAll.module.css'


export const Navbar = () => {
  return (
   <div className={styles.navbarComponents}>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/">Home</Link>
        <Link to="/Login">Login</Link>
        <Link to="/signup">Signup</Link>
      </div>
   </div>
  )
}
