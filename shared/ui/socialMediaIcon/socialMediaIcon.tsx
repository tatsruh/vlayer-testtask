'use client';
import React from 'react';

type SocialMediaIconProps = {
  href: string;
};

export const SocialMediaIcon = ({ href }: SocialMediaIconProps) => {
  return (
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      fill={'currentColor'}
      stroke="currentColor"
    >
      <use
        xlinkHref={`/sprite/sprite-icons.svg#${href}`}
        transform="translate(2 3)"
      />
    </svg>
  );
};
