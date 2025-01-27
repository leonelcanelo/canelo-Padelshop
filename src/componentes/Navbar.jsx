import CartWidgetCss from "./cartWidgetCss"

const Navbar = ()=> {
    return(
        <nav className="nav-container">
            <a href="">
                <img className="logo-nav" src='../img/Pelota de paddle.jpeg' alt=''/> 
            </a>
              <a className="nav-links" href="">Paletas <img className="logoimg" src="../img/Pelota de paddle.jpeg" alt="" /></a>
              <a className="nav-links" href="">Pelotas <img className="logoimg" src="../img/Pelota de paddle.jpeg" alt="" /></a>
              <a className="nav-links" href="">Indumentaria <img className="logoimg" src="../img/Pelota de paddle.jpeg" alt="" /></a>
            <CartWidgetCss/>
        </nav>
    )
}

export default Navbar

