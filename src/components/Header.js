import Logo from "../assets/logotodo.png"
const Header = () => {
  return (
    <header>
        <div className="logo">
        <img src={Logo} alt="The logo has been slain"/>
        <span>Todo List</span>
        </div>
        <div className="themeSelector">
            <span className="light"></span>
            <span className="medium"></span>
            <span className="dark"></span>
            <span className="gOne"></span>
            <span className="gTwo"></span>
            <span className="gThree"></span>
        </div>
    </header>
  )
}

export default Header