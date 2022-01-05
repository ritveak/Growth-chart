import React from 'react'
import './Banner.css'
import vector from './images/vector.png'
import illustration from './images/illustration.png'
const Banner = () => {
    return (
        <div>
            <div className='wave-container'>
                <div className='navBar'>
                    <div className='logo'>
                        <div className='logoGroup'>
                            <div className='logoIcon'>
                            <div className='logoVector'><img src={vector} alt=''></img></div>
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

                <div className='jumboTron'>
                    <div className='introText'>
                        <div>
                        <div className='introTitle'>Interested In Seeing How Your Financial Future Grows?</div>
                        <div className='introSubtitle'>Our tools are designed to make your life easier.
                                    Take advantage of the many tools that we provide to
                                    save your time. So, you can prepare for a financially
                                    relaxed future, and live a peaceful life after all.  
                        </div>
                        <div className='checkBtn'>
                            <button className='button'>Check it out</button> <span className='freeText'>It’s free</span>
                        </div>
                        </div>
                    </div>
                    <div className='introIllustration'>
                        <img className='ilImg' src={illustration} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
