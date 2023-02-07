import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'

function Login() {
  return (
    <div>
        <form className={styles.login}>
            <strong className={styles.loginLogo}>
                Log In
            </strong>
            <input type="text" name="Email" placeholder='Email' />
            <input type="password" name="Password" placeholder='Password' />
            
            <div className={styles.container}> 
              <input className={styles.checkbox} type="checkbox" value="Keep me signed in" id='checkbox'/> <label htmlFor="checkbox">Keep me signed in</label>
            </div>
            <div className={styles.containerButton}>
              <input type="submit" value="Log In" />
            </div>

            <div className={styles.containerForgot}>
              <a> Forgot Password ?</a>
            </div>
            

        </form>
    </div>
  )
}

export default Login