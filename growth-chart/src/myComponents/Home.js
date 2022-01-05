import React from 'react'
import "./style.css";

const Home = () => {
    return (
        <div>
            <div id="section">
                    <h1>Tools</h1>
                    <br></br>
                    <p>Take control over your wealth by making cleaver decisions.</p>
                    <br></br>
                    <div id="banner">
                        <div id="heading">
                        <img src="../images/salaryForcast.svg"></img>
                        <h1>Salary Forcast</h1>
                        </div>
                        <div id="heading">
                            <img class="icon" src="../images/chartIcon.svg"></img>
                            <div>
                                <span>Income Growth</span>
                                <p>Predict over 10 years of income raise, differentiate the results, and act accordingly.</p>
                            </div>
                        </div>

                        <div id="heading">
                            <img class="icon" src="../images/bulbIcon.svg"></img>
                            <div>
                                <span>Fast Results</span>
                                <p>Get results in under 10 seconds with the help of smart AI & ML.</p>
                            </div>
                        </div>

                        <div id="heading">
                            <img class="icon" src="../images/clockIcon.svg"></img>
                            <div>
                                <span>Add Multiple Positions</span>
                                <p>Add as many positions you want to make better future assumptions for yourself.</p>
                            </div>
                        </div>

                    </div>
                   
                </div>
        </div>
    )
}

export default Home
