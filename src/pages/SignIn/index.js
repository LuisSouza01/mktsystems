import React from 'react';

import ManImg from '../../assets/images/ManIcon.svg';
import WomanImg from '../../assets/images/WomanIcon.svg';
import MicImg from '../../assets/images/MicIcon.svg';
import DiamondImg from '../../assets/images/DiamondIcon.svg';
import BoostImg from '../../assets/images/BoostIcon.svg';
import SmartWatchImg from '../../assets/images/SmartTimeIcon.svg';

import { FaUser, FaAngleDown } from 'react-icons/fa';

import { Container, PageContent, ContentContainer, LoginContainer, InputContainer } from './styles';

function SignIn() {
  return (
    <Container>
      <PageContent>
        <h1>Join us<br/> today</h1>
        <p>Lorem ipsum dolor sit amet, consectur adipiscing elit, sed do eiusmod tempor<br/> incididunt ut labore et dolore magna aliqua.</p>
      
        <ContentContainer>
          <div>
            <img src={SmartWatchImg} alt="Desenho em amarelo de um smart watch"/>
            <h1>Spend time smart</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div>
            <img src={MicImg} alt="Desenho em amarelo de um microfone de podcast"/>
            <h1>Audio podcast</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div>
            <img src={BoostImg} alt="Desenho em amarelo das setas de um gráfico apontando pra cima"/>
            <h1>Line-chart</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>

          <div>
            <img src={DiamondImg} alt="Desenho em amarelo de um diamante"/>
            <h1>Quality</h1>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </ContentContainer>
        
        <LoginContainer>
          <section>
            <button>Sign up</button>
            <button>Login</button>
          </section>

          <div>
            <div>
              <img src={ManImg} alt=""/>
            </div>
            <div>
              <img src={WomanImg} alt=""/>
            </div>
          </div>

          <InputContainer>
            <input type="text" placeholder="Username" />
            <FaUser size={16} color="#CDD0D9" />
          </InputContainer>

          <InputContainer>
            <input type="text" placeholder="Mail" />
            <FaUser size={16} color="#CDD0D9" />
          </InputContainer>
          
          <InputContainer>
            <input type="text" placeholder="What Are Your Interests?" />
            <FaAngleDown size={16} color="#CDD0D9" />
          </InputContainer>

          <button>+</button>
        </LoginContainer>
      </PageContent>

      <footer>Copyright 2019 All Rights Reserved</footer>
    </Container>
  );
}

export default SignIn;