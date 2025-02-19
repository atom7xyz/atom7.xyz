import React from 'react';
import './SocialButton.css';

type SocialButtonProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

const SocialButton = ({ href, title, children }: SocialButtonProps) => (
  <a 
    href={href} 
    className="social-button" 
    title={title} 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label={title}
  >
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" role="img" aria-hidden="true">
      {children}
    </svg>
  </a>
);

export default SocialButton; 