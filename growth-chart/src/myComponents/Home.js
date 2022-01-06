import React from 'react'
import "./home.css";
const Home = () => {
    return (
        <div>
            <div className="section">
                <div className="heading">
                    <div className="headingH1">
                        <h1>Tools</h1>
                    </div>
                    <div className="headingP">
                        <p>Take control over your wealth by making cleaver decisions.</p>
                    </div>
                </div>

                <div className="greySection">
                    <div className="greySectionHeading">
                        <img className="icon" src="../images/salaryForcast.png" alt=''></img>
                        <h1>Salary Forcast</h1>
                    </div>
                    <div className="greySectionContent">
                        <div>
                            <div className="pointer">
                                <div className="left">
                                    <img className="icon" src="../images/chartIcon.png" alt=''></img>
                                </div>
                                <div className="right">
                                    <p className="pointerHead">Income Growth</p>
                                    <p  className="pointerContent">Predict over 10 years of income raise, differentiate the results, and act accordingly.</p>
                                </div>
                            </div>

                            <div className="pointer">
                                <div className="left">
                                    <img className="icon" src="../images/clockIcon.png" alt=''></img>
                                </div>
                                <div className="right">
                                    <p className="pointerHead">Fast Results</p>
                                    <p className="pointerContent">Get results in under 10 seconds with the help of smart AI & ML.</p>
                                </div>
                            </div>

                            <div className="pointer">
                                <div className="left">
                                    <img className="icon" src="../images/bulbIcon.png" alt=''></img>
                                </div>
                                <div className="right">
                                    <p className="pointerHead">Add Multiple Positions</p>
                                    <p className="pointerContent">Add as many positions you want to make better future assumptions for yourself.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="imageHolder">
                        <img className="image" src="../images/chartIllustration.png" alt=''></img>
                    </div>

                    <div className='tryBtn'>
                        <button className='tryButton'>Try it out!</button>
                    </div>
                </div>

                <div className="goTop">
                    <h3><u>Go to top!</u></h3>
                </div>
                
                </div>
        </div>
    )
}

export default Home
