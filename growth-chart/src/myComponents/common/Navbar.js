import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className='navBar'>
                    <div className='logo'>
                        <div className='logoGroup'>
                            <div className='logoIcon'>
                            <div className='logoVector'><img src="../images/vector.png" alt=''></img></div>
                            </div>
                        </div>
                        <div className='logoText'><h2>Tool Hub</h2></div>
                    </div>
                    <div className='menuLinks'>
                        <ul className='menuItems'>
                            <li><Link to="/"><h3>Home</h3></Link></li>
                            <li><Link to="/growthCalculator"><h3>Growth Tool</h3></Link></li>
                            <li><Link to="/about"><h3>About</h3></Link></li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Navbar
