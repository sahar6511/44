import React from 'react';
import Input from '../Input/Input';
import Space from '../Space/Space';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import '../../styles/main.scss'


const SignUp = () => {
  return (
    <div className='signup'>
      <Input placeholder="نام کاربری" type="text"/>
          <Space/>
          <Space/>
          <Input placeholder="رمز عبور" type="text"/>
          <Space />
          <Space />
          <Input placeholder="رمز عبور" type="text"/>


          
      <Space />
        <Button>ورود</Button>
        <Space />
          <Space />
        <Link to="/login" className='login-link'>ثبت نام مشترک جدید</Link>
    </div>
  )
}

export default SignUp