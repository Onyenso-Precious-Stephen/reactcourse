import React from 'react';
import './header.css';
import people from '../../asset/people.png'
import ai from '../../asset/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id='home'>
      <div className="gpt3__header-content">
        <h1 className='gradient__text'>
          Let's Build Something Amazing with GPT-3 openAI
        </h1>
        <p> Yet bad any for travelling assistance indulgence unpleasing, Not thoughts all exercise blessing indulgence way everything joy alteration boisterous the attachment. party we years to order allow asked of. </p>
        <div className="gpt3__header-content__input">
          <input type="email" placeholder='Your Email' />
          <button type='button'> Get started </button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="" />
          <p>1600 people requested access a visit in last 24 hours </p>
        </div>
      </div>

      <div className="gpt3__header-image">
          <img src={ai} alt="AI" />

        </div>
      
    </div>
  )
}


export default Header