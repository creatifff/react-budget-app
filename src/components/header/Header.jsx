import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <header>
            
                    <nav>
                        <ul>
                            <li>
                                <NavLink to="/">
                                    Main
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/about">
                                    About
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
        </header>
    )
}

export default Header;