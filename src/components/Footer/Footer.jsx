import React from 'react';

import './Footer.css';

const Footer = function (props) {
    return (
        <div className='footer__navigation'>
            <div className='footer__inner'>
                <div className='footer__column'>
                    <ul>
                        <li>
                            <a href='/'>{props.items[0].col_values[0]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[0].col_values[1]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[0].col_values[2]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[0].col_values[3]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[0].col_values[4]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[0].col_values[5]}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__column'>
                    <ul>
                        <li>
                            <a href='/'>{props.items[1].col_values[0]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[1].col_values[1]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[1].col_values[2]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[1].col_values[3]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[1].col_values[4]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[1].col_values[5]}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__column'>
                    <ul>
                        <li>
                            <a href='/'>{props.items[2].col_values[0]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[2].col_values[1]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[2].col_values[2]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[2].col_values[3]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[2].col_values[4]}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__column'>
                    <ul>
                        <li>
                            <a href='/'>{props.items[3].col_values[0]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[3].col_values[1]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[3].col_values[2]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[3].col_values[3]}</a>
                        </li>
                    </ul>
                </div>
                <div className='footer__column'>
                    <ul>
                        <li>
                            <a href='/'>{props.items[4].col_values[0]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[4].col_values[1]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[4].col_values[2]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[4].col_values[3]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[4].col_values[4]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[4].col_values[5]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[4].col_values[6]}</a>
                        </li>
                        <li>
                            <a href='/'>{props.items[4].col_values[7]}</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
