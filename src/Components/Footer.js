import React, {useState} from 'react'

function Footer() {
    const [input, setInput] = useState('type your email')

    const handleChange = ({target}) => {
      setInput(target.value)
    }


    return (
        <div className='footer'>
            <h4>Food Loose</h4>
            <div className='subscribe'>
            <h5> Subscribe for more recipes </h5>
            <input type='text' onChange={handleChange} value={input}/>
            </div>
            <div>
                <img />
                <img />
                <img />
                <img />
            </div>
        </div>
    )
}

export default Footer
