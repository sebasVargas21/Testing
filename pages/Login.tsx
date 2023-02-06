import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'

function Login() {
  return (
    <div>
        <form className={styles.login}>
            <label>
                Log In
            </label>
            <input type="text" name="Email" placeholder='Email' />
            <input type="password" name="Password" placeholder='Password' />
            <div className={styles.container}> 
              
      
            <input className={styles.checkbox} type="checkbox" value="Keep me signed in" id='checkbox'/> <label htmlFor="checkbox">Keep me signed in</label>
            </div>
            <input type="submit" value="Log In" />
            

        </form>
    </div>
  )
}

export default Login