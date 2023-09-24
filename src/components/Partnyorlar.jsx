import React from 'react'
import "./Partnyorlar.css"
import uni1 from "../assets/images/Partnyorlar/Adnsu.jpg"
import uni2 from "../assets/images/Partnyorlar/Adpu.jpg"
import uni3 from "../assets/images/Partnyorlar/Adu.jpg"
import uni4 from "../assets/images/Partnyorlar/TexnikiUniversitet.jpg"
import uni5 from "../assets/images/Partnyorlar/TibbUniversiteti.jpg"

const Partnyorlar = () => {
  return (
    <div>

        <div className="partnyor-top">
            <h3>Partnyorlarımız</h3>
        </div>

        <div className="partnyor-bottom">
          <div className="partnyor neft">
            <img src={uni1} alt="" />
          </div>

          <div className="partnyor">
            <img src={uni2} alt="" />
          </div>

          <div className="partnyor">
            <img src={uni3} alt="" />
          </div>

          <div className="partnyor">
            <img src={uni4} alt="" />
          </div>

          <div className="partnyor">
            <img src={uni5} alt="" />
          </div>

        </div>

    </div>
  )
}

export default Partnyorlar