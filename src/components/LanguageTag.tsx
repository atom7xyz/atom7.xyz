import React from 'react';
import './LanguageTag.css';

type LanguageTagProps = {
  language: string;
};

const LanguageTag = ({ language }: LanguageTagProps) => (
  <span className={`language-tag ${language}`}>
    {language.toUpperCase()}
  </span>
);

export default LanguageTag; 