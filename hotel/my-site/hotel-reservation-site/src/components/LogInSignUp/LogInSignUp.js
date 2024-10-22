import React from 'react';
import TopMenu from "../TopMenu/TopMenu";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import hotelimg from "../../images/hotel.webp";
import Space from "../Space/Space";
import logo from "../../images/Logo.png";
import Title from "../Title/Title"
import Button from '../Button/Button';
import ScrollButton from '../ScrollButton/ScrollButton ';
import { useLocation } from 'react-router-dom';
import '../../styles/main.scss'
import LogIn from './LogIn';
 import SignUp from './SignUp'

const LogInSignUp = () => {

  const location = useLocation()

  return (
    <div className="login-signup">
      <TopMenu />
      <Header />
      <Space />
      <Space />
      <Space />
      <Space />
      
      <div className='login-signup__container'>
        <div className='login-signup__container--info'>
 <Space/>
          <div>
          <img src={logo} alt="logo" className='logo'/>
            <Title title1="به هتل آریا خوش آمدید"></Title>
          <Space/>
          <p className='text-justify'>هتل بزرگ پنج ستاره آریا با الهام از طرح شکوهمند تخت جمشید در زمینی با وسعت دوازده هکتار در شمال شرق جزیره زیبای کیش نزدیک به ساحل شرقی در سال 1382 توسط بهترین معماران ایرانی ساخته شده است. این هتل موزه دارای 184 اتاق، سوییت و کاباناهای مجلل با چشم انداز دریا و باغ است.</p>
          <Space/>
          <Space/>
          </div>
          {
            location.pathname === "/loginsignup" ?<LogIn/>:null
          }
          <Space />
 
        </div>
        <img src={hotelimg} alt="hotelimg" className='login-container__img'/>
      </div>






      <Space />
      <Space />
      <Space />

      <Footer />
      <ScrollButton/>
    </div>
  )
}

export default LogInSignUp
