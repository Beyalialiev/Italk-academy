import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer>
      <div className="footer-1">

        <div className="footer-top">
          <h2>Akademiya</h2>
        </div>

        <div className="footer-bottom">
          <a href="">Haqqımızda</a>
          <a href="">Təhsil sistemi</a>
          <a href="">Partnyorlar</a>
          <a href="">Müəllimlərimiz</a>
        </div>

      </div>

      <div className="footer-1">

        <div className="footer-top">
          <h2>Tədris sahələri</h2>
        </div>

        <div className="footer-bottom">
          <a href="">Xarici dillər</a>
          <a href="">İELTS</a>
          <a href="">Duolingo</a>
          <a href="">TestDaf</a>
        </div>

      </div>

      <div className="footer-1">

        <div className="footer-top">
          <h2>Digər</h2>
        </div>

        <div className="footer-bottom">
          <a href="050-504-20-00"></a>
          <a href="Italk@gmail.com"></a>
          <a href="Jale plaza 3-cu mertebe"></a>
        </div>

      </div>
    </footer>
      
    
  )
}

export default Footer