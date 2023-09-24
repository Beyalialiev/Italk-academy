import React from 'react'
import "./Section.css"
import BizimKurs from "../assets/images/BizimKurs/bizimKurs.jpg"


const Section = () => {
    return (
        <section>

            <div className="section-left">

                <div className="section-top">
                    <h1>Niyə məhz italk academy?</h1>
                </div>

                <div className="section-bottom">
                    <p>Bu dili bilmək insanı həyat nailiyyətlərinin yeni səviyyəsinə çıxarır. Bu dildə danışarkən, siz dünyanı gəzməkdən, sonsuz uğurlu karyera qurmaqdan, dil baryeri problemi ilə üzləşmədən yeni tanışlıqlardan xoşbəxt olacaqsınız. Yuxarıda göstərilənlərin hamısını yerinə yetirməyin ən asan yolu ITALK ACADEMY İngilis dili kurslarına yazılmaqdır. <br />

🇷🇺 Знание этого языка выводит человека на новый уровень жизненных достижений. Разговаривая на нем, вы с удовольствием путешествуете по всему миру, строите безгранично успешную карьеру, заводите новые знакомства, не сталкиваясь с проблемой языкового барьера. Самый простой способ осуществить все вышеназванное ─ записаться на курсы английского языка ITALK ACADEMY.</p>
                </div>

            </div>

            <div className="section-right">
                
                <img src={BizimKurs} alt="#" />
            </div>

        </section>
    )
}

export default Section