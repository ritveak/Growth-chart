import React from 'react'
import { Link } from 'react-router-dom';
import Banner from '../common/Banner';
import "./HomePage.css";

const data =
    {
      title: "Interested In Seeing How Your Financial Future Grows?",
      subTitle: "Our tools are designed to make your life easier.Take advantage of the many tools that we provide to save your time. So, you can prepare for a financially relaxed future, and live a peaceful life after all.",
      image: "../images/illustration.png",
      btnText: "Check it out",
      btnSideText:"It’s free",
    };

const Home = () => {
    return (
        <div>
            <Banner data={data} />
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
                    <Link to="/growthCalculator">
                        <button className='tryButton'>Try it out!</button>
                        </Link>
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
