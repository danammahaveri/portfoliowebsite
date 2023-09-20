import React from 'react';
import './intro.css';
import bg from '../../react-portfolio-assets/assets/image.png';
import btnImg from '../../react-portfolio-assets/assets/hireme.png';
import {Link} from 'react-scroll';
const Intro = () => {
    return(
        <section id="intro">
            <div className="introcontent"><br></br>
                 <span className="hello">Hello,</span><br></br><br></br>
                 <span className="introText">We are<span className="introName"> Chaitra , Sripada , Danamma</span> <br/> Website Designers <br></br><br></br></span>
                 <p className="introPara">We are skilled web designers with experience in creating <br/>visually appealing and user friendly websites.</p>
                 <Link><button className="btn"><img src={btnImg} alt="Hire Us" className='btnImg'/>Hire Us</button></Link>
            </div>
            <img src={bg} alt="Profile" className="bg"/>
        </section>
    )
}

export default  Intro;