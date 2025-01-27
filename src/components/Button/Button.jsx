import styled from 'styled-components';
import styles from './Button.css.js';

const ButtonWrapper = styled.button`
    ${styles}
`;

const Button = ({ label, style, isSubscribe, labelStyle }) => (
    <ButtonWrapper
        style={{
            ...style,
            borderRadius: isSubscribe ? '5px' : 0,
            margin: isSubscribe ? '0' : '20px 0',
        }}
    >
        <span className='label' style={{ ...labelStyle }}>
            {label}
        </span>
    </ButtonWrapper>
);

export default Button;
