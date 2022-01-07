import React from 'react'
import '../about/About.css'
const About = () => {
    return (
        <div className='containerAbout'>
            <div className='bgDiv'>
                <div className='containerBg'></div>
                <div className='overlayBg'>
                    <div className='containerTitle'>Meet the Creators</div>
                    <div className='creators'>
                        <div className='creatorsImg'>
                            <div className='creator'>
                                <div className='usrImg'>
                                    <img width='100px' src='../images/vikrant.jpg'></img>
                                </div>
                                <div className='userTitle'>Vikrant Singh</div>
                                <div className='userSubtitle'>Fullstack Software Developer</div>
                            </div>
                            <div className='creator'>
                                <div className='usrImg'>
                                    <img width='100px' src='../images/ritveak.png'></img>
                                </div>
                                <div className='userTitle'>Ritveak Dugar</div>
                                <div className='userSubtitle'>Software Developer</div>
                            </div>
                        </div>
                        
                        <div className='creatorsMsg'>
                            <div>Our motive behind making this tool was to provide a tool which helps to calculate the salary over the years from the previous data available. Initially same we did that using Microsoft Excel but we figured that there are more people like us, who want to calculate their future growth. Hence, we thought we should turn this idea into a tool using our coding skills. So here it is, we hope this tool helps you in some way!                         
                            </div>
                        </div>
                    </div>
                    
                    <div className='feedback'>
                        <div className='feedbackTitle'>Got any feedback?</div>
                        <div className='feedbacksubTitle'>Hit us up at <b>vikrantpbh@gmail.com</b> | <b>ritveakdugar@gmail.com</b></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
