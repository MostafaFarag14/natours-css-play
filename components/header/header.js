import Image from 'next/image'
import classes from './header.module.css'

function Header() {
  return (
    <header className={classes.header}>
      <div className={classes.logoBox}>
        <img className={classes.logo} src='/img/logo-white.png' alt='logo' />
      </div>
      <div className={classes.textBox}>
        <h1 className={classes.headingPrimary}>
          <span className={classes.main}>outdoors</span>
          <span className={classes.sub}>is where life happens</span>
        </h1>
        <a href='#' className={`${classes.btn}`}>Discover Our Tours</a>
      </div>
    </header>
  )
}

export default Header
