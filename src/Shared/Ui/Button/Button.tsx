'use client';
import React from 'react';
import { classNames } from '@/Shared/Lib';
import cl from './Button.module.scss';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant: 'primary' | 'secondary' | 'danger';
    className?: string;
}

const Button = (props: ButtonProps) => {

    const { variant, className='', children, ...otherProps } = props;

    return (
        <button {...otherProps} className={classNames(cl.button, {}, [className, cl[variant]])}>
            {children}
        </button>
    );
};

export default Button;