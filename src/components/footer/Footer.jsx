import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer>
            
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
        </footer>
    )
}

export default Footer;