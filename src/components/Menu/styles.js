import styled, { css } from 'styled-components';

import LogoImg from '../../assets/images/Logo.svg';
import LogoMobile from '../../assets/images/LogoMobile.png';

export const Container = styled.header`
  max-width: 80%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const LogoContainer = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  height: 100px;
  max-width: 250px;
  border-radius: 0px 0px 40px 40px;
  margin-bottom: 46px;

  div {
    background: url(${LogoImg}) no-repeat center;
    width: 100%;
    height: 100%;

    @media(max-width: 768px) {
      background: url(${LogoMobile}) no-repeat center;
    }
  }
  
  svg {
    display: none;
  }

  @media (max-width: 768px) {
    flex-direction: row;
    justify-content: space-between;

    max-width: 100%;
    border-radius: 0px;
    margin-bottom: 0px;

    padding: 0px 20px;

    svg {
      display: inline;
    }
  }
`;

export const MenuContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;

  div {
    display: none;

    width: 140px;
    margin: 0 auto 16px auto;
    background-color: #F6F6F6;
    border-radius: 20px;
    height: 26px;
    padding: 18px;
      
    input {
      flex: 1;
      width: 100%;
      background-color: #F6F6F6;

      border: 0;
      text-align: center;
      

      &::placeholder {
        color: #BCBCCB;
      }

      &:focus {
        border: 0;
        outline: 0;
      }
    }
  }

  a {
    color: #C6C6D4;
    text-transform: uppercase;
    text-decoration: none;
    transition: color 0.2s;

    & + a {
      margin-left: 50px;
    }

    &:nth-child(2) {
      color: #fff;
      border-bottom: 1px solid #fff;
    }

    &:hover {
      color: #fff;
    }
  }

  @media(max-width: 768px) {
    background: #fff;
    justify-content: center;
    flex-direction: column;

    a {
      &:nth-child(2) {
        color: #C6C6D4;
      }
    }
    
    ${({open}) => open ? 
      css`
        display: flex;
      `
    :
      css`
        display: none;
      `
    }

    > div {
      display: flex;
      align-items: center;
      flex-direction: row;

      svg {
        margin-left: 6px;
      }
    }

    a {
      text-align: center;
      margin-bottom: 16px;

      & + a {
        margin-left: 0;
      }

      &:hover {
        color: #4621AD;
      }
    }
  }
`;