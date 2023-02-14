import Link from 'next/link'
import React from 'react'
import styles from '@/styles/Home.module.css'

function Login() {
  const [isVisible, setIsVisible] = React.useState(true)
  return (
    <div>
      <form className={styles.login}>
        <strong className={styles.loginLogo}>
          Log In
            </strong>
        <input type="text" name="Email" placeholder='Email' required />
        <div className={styles.inputArea}>
          <input type={isVisible ? "password" : "text"} name="Password" placeholder='Password' required />
          <i className={styles.iconEyePassword + ` ${isVisible ? 'fa fa-eye-slash' : 'fa fa-eye'}`} onClick={(event) => {
            event.preventDefault()
            setIsVisible(!isVisible)
          }}></i>
        </div>
        <div className={styles.container}>
          <input className={styles.checkbox} type="checkbox" value="Keep me signed in" id='checkbox' /> <label htmlFor="checkbox">Keep me signed in</label>
        </div>
        <div className={styles.containerButton}>
          <input type="submit" value="Log In" />
        </div>

        <div className={styles.containerForgot}>
          <a> Forgot Password?</a>
        </div>


      </form>
    </div>
  )
}

export default Login