import React from 'react'
import styles from '../styleAll.module.css'
import { Link } from 'react-router-dom'
import { Svg } from '../components/Svg'

export const Login = () => {
  return (
    <div>
      <div className={styles.hero}>
          <div className={styles.heroText}>
                <fieldset>
                  <legend>Login</legend>
                  <form className={styles.loginForm}>
                    <input type='text' required placeholder='Username'/>
                    <input type='password' required placeholder='Your Password'/> 
                    <button>Submit</button>
                  </form>
                </fieldset>
            </div>
            <div>
                <Svg />
            </div>
        </div>
    </div>
  )
}
