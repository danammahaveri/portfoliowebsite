import React from 'react';
import './skills.css';
import UIDesign from '../../react-portfolio-assets/assets/ui-design.png';
import WebDesign from '../../react-portfolio-assets/assets/website-design.png';
import AppDesign from '../../react-portfolio-assets/assets/app-design.png';

const Skills = () => {
    return (
       <section id='skills'>
        <span className="skillTitle">What we do</span>
        <span className="skillDesc">We are skilled and passinate Web designer with experience in creatig visually appealing and user-friendly websites. We have a strong understanding of design and a keen eye for detail. We are proficient in HTML, CSS, and JavaScript, as well as design software such as Adode Photoshop and Illustartor. </span>
        <div className="skillBars">
         <div className="skillBar">
            <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>UI/UX Design</h2>
                <p>This is the demo text, you can write your own content here.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={WebDesign} alt="WebDesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>WebDesign</h2>
                <p>This is the demo text, you can write your own content here.</p>
            </div>
        </div>
        <div className="skillBar">
            <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
            <div className="skillBarText">
                <h2>AppDesign</h2>
                <p>This is the demo text, you can write your own content here.</p>
            </div>
        </div>
    </div>
       </section>
    );
}

export default Skills