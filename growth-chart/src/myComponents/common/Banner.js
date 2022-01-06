import React from 'react'
import './Banner.css'
const Banner = ({data}) => {
    return (
        <div>
            <div className='wave-container'>
                <div className='jumboTron'>
                    <div className='introText'>
                        <div>
                        <div className='introTitle'>{data.title}</div>
                        <div className='introSubtitle'>{data.subTitle}</div>
                        <div className='checkBtn'>
                            <button className='button'>{data.btnText}</button> <span className='freeText'>{data.btnSideText}</span>
                        </div>
                        </div>
                    </div>
                    <div className='introIllustration'>
                        <img className='ilImg' src={data.image} alt=''></img>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
