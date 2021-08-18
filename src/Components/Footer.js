import React, {useState} from 'react'
import './Footer.css'

function Footer() {
    const [input, setInput] = useState('email')

    const handleChange = ({target}) => {
      setInput(target.value)
    }


    return (
        <div className='footer'>
            <h4 className='webName'>Food Loose</h4>
            <div className='subscribe'>
              <h5> SUBSCRIBE FOR MORE RECIPES</h5>
              <input type='text' onChange={handleChange} value={input} className='input'/>
            </div>
            <div className='logos'>
                <img src='././Media/facebook.png' alt='facebook' />
                <img src='././Media/insta.png' alt='instagram' />
                <img src='././Media/pinterest.png' alt='pinterest'/>
                <img src='././Media/twitter.png' alt='twitter'/>
            </div>
        </div>
    )
}

export default Footer
