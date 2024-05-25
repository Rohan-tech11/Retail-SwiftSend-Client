// Footer.jsx
import React from 'react';
import { FooterContainer } from './footerStyles';
import logo from '/logo-glyph.png';

export default function Footer() {
  return (
    <FooterContainer>
      Copyright &copy; 2023. All rights reserved | Team SwiftSend{' '}
      <img src={logo} alt="logo" width="15px" />
    </FooterContainer>
  );
}
