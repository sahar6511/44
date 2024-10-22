import React from 'react';
import Input from '../Input/Input';
import Space from '../Space/Space';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import '../../styles/main.scss'


const LogIn = () => {
  return (
    <div className='login'>
      <Input placeholder="نام کاربری" type="text"/>
          <Space/>
          <Space/>
          <Input placeholder="رمز عبور" type="text"/>
          <Space />
          <Space />
      <Space />
        <Button>ورود</Button>
        <Space />
          <Space />
        <Link to="/signup" className='signup-link'>ثبت نام مشترک جدید</Link>
    </div>
  )
}

export default LogIn
