import React from 'react';
import './works.css';
import Portfolio1 from '../../react-portfolio-assets/assets/portfolio-1.png';
import Portfolio2 from '../../react-portfolio-assets/assets/portfolio-2.png';
import Portfolio3 from '../../react-portfolio-assets/assets/portfolio-3.png';
import Portfolio4 from '../../react-portfolio-assets/assets/portfolio-4.png';
import Portfolio5 from '../../react-portfolio-assets/assets/portfolio-5.png';
import Portfolio6 from '../../react-portfolio-assets/assets/portfolio-6.png';
const Works = () => {
    return (
     <section id='works'>
        <h2 className="worksTitle">Our Portfolio</h2>
        <span className="worksDesc">We take pride in paying attention to the smallest details and making sure that our work is pixel perfect. We are excited to bring our skills and experience to help achieve their goals and create a strong online presence. </span>
       <div className="worksImgs">
         <img src={Portfolio1} alt="" className="workImg"/>
         <img src={Portfolio2} alt="" className="workImg"/>
         <img src={Portfolio3} alt="" className="workImg"/>
         <img src={Portfolio4} alt="" className="workImg"/>
         <img src={Portfolio5} alt="" className="workImg"/>
         <img src={Portfolio6} alt="" className="workImg"/>
       </div>
       <button className="workBtn">See More</button>
     </section>
    );
}

export default Works