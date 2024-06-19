import React from 'react'
import { Link } from 'react-router-dom'
import arrow from '../assets/icons/arrow.svg'

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font medium sm:text-xl text-center'>{text}</p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} alt='arrow'/>
        </Link>
    </div>
)



const renderContent = {
    1: (
        <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">Hi, I am <span className="font-semibold">Nadzim</span> 👋
        <br/> A Software Engineer from Indonesia.</h1>
    ),
    2: (
        <section className='info-box'>
            <h1 className="font-medium sm:text-xl text-center">I'm currently an 
                <span className='font-semibold'> Information Systems</span> student at
                <br/><span className="font-bold">University of Indonesia</span>
            </h1>
            <Link to='/about' className='neo-brutalism-white neo-btn'>
                Learn More
                <img src={arrow} alt="arrow" />
            </Link>
        </section>
    ),
    3: (
        <section className='info-box'>
            <h1 className="font-medium sm:text-xl text-center">I've made some <span className='font-bold'> projects </span> while I'm here
            </h1>
            <Link to='/projects' className='neo-brutalism-white neo-btn'>
                See Portofolio
                <img src={arrow} alt="arrow" />
            </Link>
        </section>
    ),
    4: (
        <section className='info-box'>
            <h1 className="font-medium sm:text-xl text-center">Looking for a developer? Feel free to <span className='font-bold'>contact me</span>!
                
            </h1>
            <Link to='/contact' className='neo-brutalism-white neo-btn'>
                Contact Here
                <img src={arrow} alt="arrow" />
            </Link>
        </section>
    )
}


const HomeInfo = ({currentStage}) => {
  return renderContent[currentStage] || null;
} 

export default HomeInfo