import styled from 'styled-components';

export const Container = styled.div`
  position:relative;
  min-height: 100%;

  footer {
    width: 100%;
    display: none;
    font-size: 12px;
    
    position:absolute;
    margin-bottom: 0;
    margin-top: 12px;
    padding: 6px;
    
    text-align: center;
    background-color: rgba(70, 33, 173);

    @media(max-width: 768px) {
      display: inline
    }
  }
`;

export const PageContent = styled.div`
  min-height: 100%;
  max-width: 80%;
  margin: 0 auto;
  text-align: center;

  h1 {
    margin-top: 64px;
    
    br {
      display: none;
    }
  }

  p {
    margin-top: 12px;
  }

  @media(max-width: 768px) {
    text-align: left;

    h1 {
      br {
        display: inline;
      }
    }

    p {
      max-width: 300px;
      margin-top: 32px;

      br {
        display: none;
      }
    }
  }
`;

export const ContentContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;

  width: 80%;
  margin: 0 auto;

  div {
    margin-top: 42px;

    h1 {
      margin-top: 12px;
      font-size: 16px;
    }

    p {
      margin-top: 6px;
      font-size: 14px;
    }
  }

  @media(max-width: 1240px) {
    max-width: 500px;
  }

  @media(max-width: 768px) {
    justify-content: center;

    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: 42px 16px;
    }
  }
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  width: 362px;

  margin: 32px auto;
  background-color: #fff;
  border-radius: 12px;

  section {
    display: flex;
    flex-direction: column;
    width: 80%;
    
    > button {
      height: 50px;
      margin: 12px 0px;

      border: 0;
      border-radius: 32px;

      color: #fff;
      font-size: 20px;
      font-weight: bold;
      background-color: #8d89fc;

      &:focus {
        border: 0;
        outline: 0;
      }

      & + button {
        background-color: #fff;
        color: #4621ad;
        box-shadow: 0px 6px 12px #0000000D;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    flex-direction: row;

    margin: 6px 0px;

    div {
      display: flex;
      justify-content: center;

      width: 72px;
      height: 82px;

      background-color: #FFF;
      
      border-radius: 10px;
      box-shadow: 0px 6px 12px #0000000D;
      cursor: pointer;

      &:first-child {
        background-color: #4621AD;
        margin-right: 12px;
      }
    }
  }

  > button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 50px;
    margin: 12px 0px;

    font-size: 40px;
    color: #FFEE00;
    background-color: #4723AE;
    border-radius: 50%;
    border: 0;

    &:focus {
      border: 0;
      outline: 0;
    }
  }

  @media(max-width: 768px) {
    section {
      display: flex;
      flex-direction: row;

      > button {
        flex: 1;
      }
    }
  }

  @media(max-width: 480px) {
    max-width: 95%;
    margin: 0 auto;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;

  width: 80%;
  height: 50px;

  border-radius: 22px;
  border: 1px solid #4621AD;

  input {
    width: 100%;
    flex: 1;
    border: 0;
    margin-left: 22px;
    background: none;

    &::placeholder {
      color: #CDD0D9;
      font-size: 12px;
    }

    &:focus {
      border: 0;
      outline: none;
    }
  }

  svg {
    margin: 0px 8px;
  }
`;

export const Footer = styled.footer`
  top: 0px;
  bottom: 0px;
`;