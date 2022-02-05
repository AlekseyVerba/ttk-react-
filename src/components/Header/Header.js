import HeaderDown from "./HeaderDown"
import HeaderUp from "./HeaderUp"
import "./Header.scss"

const Header = () => {
    return (
        <div className="header">
            <HeaderUp />
            <HeaderDown />
        </div>
    )
}

export default Header