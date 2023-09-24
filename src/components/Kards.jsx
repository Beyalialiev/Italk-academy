import React from 'react'
import "./Kards.css"

const Kards = () => {
  return (
    <div className='Kartlar'>
        <div className="kart-1">

          <div className="kart-top">
            <h2>Fərdi və Qrup dərsləri</h2>
          </div>

          <div className="kart-bottom">
            <p>Dərslərimiz müasir metodikaya əsaslanan xüsusi <br /> proqramla keçirilir. Siz istədiyiniz dili 4-6 aya zəmanətlə <br /> öyrənə bilərsiniz. Dərslər həftədə 2 dəfə 90 dəqiqə olmaqla keçirilir.</p>
          </div>

        </div>

          <div className="kart-1">

          <div className="kart-top">
            <h2>Xaricdə təhsil</h2>
          </div>

          <div className="kart-bottom">
            <p>İstədiyiniz xarici universiteti seçərək yüksək təhsil almaq şansı əldə edə bilərsiniz. Bir çox universitetlə əməkdaşlığımız sayəsində ödənişsiz təhsil ala bilərsiniz.</p>
          </div>

        </div>

          <div className="kart-1">

          <div className="kart-top">
            <h2>Beynəlxalq sertifikatlar</h2>
          </div>

          <div className="kart-bottom">
            <p>İELTS, Duolingo və TestDaf kimi sertifikatları zəmanətlə əldə edə bilərsiniz. 5 illik təcrübəmizə əsaslanaraq deyə bilərik ki, biz bu sahədə tam profesionalıq.</p>
          </div>

        </div>
    </div>
  )
}

export default Kards