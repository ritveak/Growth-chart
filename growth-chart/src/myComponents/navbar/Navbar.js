import React from 'react'
import './Navbar.css'
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
                            <li><h3>Home</h3></li>
                            <li><h3>Tools</h3></li>
                            <li><h3>About</h3></li>
                        </ul>
                    </div>
                </div>
        </div>
    )
}

export default Navbar
