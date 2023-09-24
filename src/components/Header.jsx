import React from 'react'
import "./Header.css"
import { BsFillChatFill } from "react-icons/bs";
import saytinShekili from "../assets/images/NiyeItalk/american.jpg"


const Header = () => {
  return (
    <header>

        <div className="header-left-side">

            <div className="header-top ">
                <h1> <span>Bizim kursu seçsən </span> <br /> əldə edəcəklərin </h1>
            </div>

            <div className="header-bottom">

                <div className="paraqraf">
                    <p> <BsFillChatFill />  Fərdi şəkildə istədiyin dili sürətli şəkildə öyrənmək şansı</p>
                </div>

                <div className="paraqraf">
                    <p> <BsFillChatFill />  Büdcənizə və cədvəlinizə uyğun dərslərə qoşulma şansı </p>
                </div>

                <div className="paraqraf">
                    <p> <BsFillChatFill />  Təcrübəli müəllimlər tərəfindən dərs almaq şansı </p>
                </div>

            </div>

        </div>

        <div className="header-right-side">
        <img src={saytinShekili} alt="" />
        </div>

    </header>
  )
}

export default Header