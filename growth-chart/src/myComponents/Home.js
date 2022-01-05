import React from 'react'
import "./home.css";
const Home = () => {
    return (
        <div>
            <div class="section">
                <div class="heading">
                    <div class="headingH1">
                        <h1>Tools</h1>
                    </div>
                    <div class="headingP">
                        <p>Take control over your wealth by making cleaver decisions.</p>
                    </div>
                </div>

                <div class="greySection">
                    <div class="greySectionHeading">
                        <img class="icon" src="../images/salaryForcast.png" alt=''></img>
                        <h1>Salary Forcast</h1>
                    </div>
                    <div class="greySectionContent">
                        <div>
                            <div class="pointer">
                                <div class="left">
                                    <img class="icon" src="../images/chartIcon.png" alt=''></img>
                                </div>
                                <div class="right">
                                    <p class="pointerHead">Income Growth</p>
                                    <p  class="pointerContent">Predict over 10 years of income raise, differentiate the results, and act accordingly.</p>
                                </div>
                            </div>

                            <div class="pointer">
                                <div class="left">
                                    <img class="icon" src="../images/clockIcon.png" alt=''></img>
                                </div>
                                <div class="right">
                                    <p class="pointerHead">Fast Results</p>
                                    <p class="pointerContent">Get results in under 10 seconds with the help of smart AI & ML.</p>
                                </div>
                            </div>

                            <div class="pointer">
                                <div class="left">
                                    <img class="icon" src="../images/bulbIcon.png" alt=''></img>
                                </div>
                                <div class="right">
                                    <p class="pointerHead">Add Multiple Positions</p>
                                    <p class="pointerContent">Add as many positions you want to make better future assumptions for yourself.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="imageHolder">
                        <img class="image" src="../images/chartIllustration.png" alt=''></img>
                    </div>

                    <div className='tryBtn'>
                        <button className='tryButton'>Try it out!</button>
                    </div>
                </div>

                <div class="goTop">
                    <h3><u>Go to top!</u></h3>
                </div>
                
                </div>
        </div>
    )
}

export default Home
