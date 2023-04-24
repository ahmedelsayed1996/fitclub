import React from 'react';
import './Programs.css';
import {programsData} from '../../data/programsData';
import RigthArrow from '../../assets/rightArrow.png';
const Programs = () => {
    return (
        <div className='Programs' id='programs'>
            <div className='programs-header'>
                <span className='stroke-text'>Explore our</span>
                <span>Programs</span>
                <span className='stroke-text'>to Shap you</span>
            </div>
            <div className='programs-categories'>
                {programsData.map((program)=>(
                    <div className='category'>
                        {program.image}
                        <span>{program.heading}</span>
                        <span>{program.details}</span>
                        <div className='join-now'>
                            <span>Join Now</span>
                            <span><img src={RigthArrow}/></span>
                        </div>
                    </div>
                ))}
            </div>
            
        </div>
    );
}

export default Programs;
