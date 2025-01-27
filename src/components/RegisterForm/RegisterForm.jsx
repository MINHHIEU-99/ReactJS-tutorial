import React from 'react';

import './RegisterForm.css';
import Button from '../Button/Button.jsx';

const RegisterForm = function (props) {
    return (
        <div className='foreground'>
            <div className='register__form'>
                <h1>Save Time, save money!</h1>
                <p>Sign up and we'll send the best deals to you</p>
                <form className='form__control' action='/'>
                    <input
                        type='text'
                        name='input'
                        id=''
                        placeholder='Your email'
                    />
                    <Button label='Subscribe' isSubscribe/>
                </form>
            </div>
        </div>
    );
};

export default RegisterForm;
