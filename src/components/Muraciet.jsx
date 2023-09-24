import React from 'react'
import "./Muraciet.css"
import { SlEnvolope } from "react-icons/sl";

const Muraciet = () => {
  return (

   <div className='muracietler'>
    <h1><SlEnvolope /> Müraciət et</h1>
     
    <form action="">
      <input type="text" placeholder='Ad' required />
      <input type="text" placeholder='Soyad' required />
      <input type="phone" placeholder='XXX-XXX-XX-XX' required />
      <input type="gmail" placeholder='Email ünvanı' required />
    </form>

    <button>Müraciət edin</button>
   </div>
  )
}

export default Muraciet