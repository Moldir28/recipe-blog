import React, {useState} from 'react'
import './Footer.css'
import {FiFacebook} from 'react-icons/fi'; 
import {FiInstagram} from 'react-icons/fi'




function Footer() {
 
    return (
        <div className='footer'>
            <h4 className='webName'>Food Loose</h4>
            <div className='subscribe'>
              <h5> SUBSCRIBE FOR MORE RECIPES</h5>
              <input type='text'  placeholder='email' className='input'/>
            </div>
            <div className='logos'>
                <FiFacebook className='smLogo' />
                <FiInstagram className='smLogo' />
        
            </div>
        </div>
    )
}

export default Footer
