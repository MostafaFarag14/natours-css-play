// import classes from './header.module.scss'

function Header() {
  return (
    <header className={"header"}>
      <div className={"logoBox"}>
        <img className={"logo"} src='/img/logo-white.png' alt='logo' />
      </div>
      <div className={"textBox"}>
        <h1 className={"headingPrimary"}>
          <span className={"main"}>outdoors</span>
          <span className={"sub"}>is where life happens</span>
        </h1>
        <a href='#' className={`${"btn"} ${"btn__white"}`}>Discover Our Tours</a>
      </div>
    </header>
  )
}

export default Header
