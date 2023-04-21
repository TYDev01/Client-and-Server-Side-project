import React from 'react'
import styles from '../styleAll.module.css'
import { Link } from 'react-router-dom'
import { Svg } from '../components/Svg'

export const Signup = () => {
  return (
    <div>
       <div className={styles.hero}>
          <div className={styles.heroText}>
              <fieldset>
                <legend>Signup</legend>
                <form className={styles.signupForm}>
                  <input type='text' required placeholder='First name'/> 
                  <input type='text' required placeholder='Last name'/> 
                  <input type='text' required placeholder='Username'/> 
                  <input type='email' required placeholder='Email Address'/> 
                  <input type='password' required placeholder='Your Password'/> 
                  <input type='password' required placeholder='Re-type Password'/> 
                  <input type='checkbox' required/>
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
