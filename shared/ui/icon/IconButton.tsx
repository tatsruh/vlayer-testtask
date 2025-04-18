'use client';
import React from 'react';
import style from './IconButton.module.scss';

type IconButtonProps = {
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const IconButton = ({ onClick, ...props }: IconButtonProps) => {
  return (
    <button
      className={style.icon_btn}
      onClick={onClick}
      type="button"
      {...props}
    >
      <svg
        width="24px"
        height="24px"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <use
          xlinkHref="/sprite/sprite-icons.svg#heart"
          transform="translate(2 3)"
        />
      </svg>
    </button>
  );
};
