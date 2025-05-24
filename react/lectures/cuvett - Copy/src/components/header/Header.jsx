import headercss from "./Header.module.css"


const Header = ()=>{


    return(
        <div className={headercss.container}>
        <ul>
            <li><a href="Home">Home</a></li>
            <li><a href="About">About</a></li>
            <li><a href="Footer">Contact us</a></li>
        </ul>
        </div>
    )
}

export default Header;