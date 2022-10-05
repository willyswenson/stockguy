import React from 'react'
import { FooterContainer, FooterWrap, FooterLinksContainer,
FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink } from './FooterElements'
const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/William_Swenson_Resume.pdf">LinkedIn</FooterLink>
                            <FooterLink to="/about">2</FooterLink>
                            <FooterLink to="/about">3</FooterLink>
                            <FooterLink to="/about">4</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> About Us </FooterLinkTitle>
                            <FooterLink to="/about">1</FooterLink>
                            <FooterLink to="/about">2</FooterLink>
                            <FooterLink to="/about">3</FooterLink>
                            <FooterLink to="/about">4</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer