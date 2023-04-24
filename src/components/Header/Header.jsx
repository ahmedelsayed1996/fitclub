import React, { useState } from 'react';
import './Header.css';
import logo from '../../assets/logo.png';
import bars from '../../assets/bars.png';
import { Link } from 'react-scroll';



const Header = () => {
    const mobile = window.innerWidth <= 768 ? true : false;
    const [menuOpened, setMenuOpened] = useState(false);
    return (
        <div className='header'>
            <img src={logo} alt="" className='logo' />
            {menuOpened === false && mobile === true ?
                (<div
                    style={{ padding: '0.5rem', backgroundColor: 'var(--appColor)', borderRadius: '5px' }}
                    onClick={() => setMenuOpened(true)}
                >
                    <img src={bars} alt="" style={{ width: '1.5rem', height: '1.5rem' }} />
                </div>) : (<ul className='header-menu'>
                    <li ><Link
                        onClick={() => setMenuOpened(false)}
                        to='home'
                        activeClass='active'
                        spy={true}
                        smooth={true}
                    >Home</Link> </li>
                    <li ><Link
                        onClick={() => setMenuOpened(false)}
                        to='Programs'
                        spy={true}
                        smooth={true}
                    >Programs</Link> </li>
                    <li ><Link
                        onClick={() => setMenuOpened(false)}
                        to='reasons'
                        spy={true}
                        smooth={true}
                    >Why Us</Link> </li>
                    <li ><Link
                        onClick={() => setMenuOpened(false)}
                        to='plans'
                        spy={true}
                        smooth={true}
                    >Plans</Link> </li>
                    <li ><Link
                        onClick={() => setMenuOpened(false)}
                        to='testimonials'
                        spy={true}
                        smooth={true}
                    >Testimonials</Link></li>
                </ul>)}

        </div>
    );
}

export default Header;
