import React from 'react'
import Navbar from '../navbar/Navbar'
import './Banner.css'
const Banner = () => {
    return (
        <div>
            <div className='wave-container'>
                <Navbar/>
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
                        <img className='ilImg' src="../images/illustration.png" alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
