import React, { useState } from 'react';

import { FaBars, FaAngleDown, FaBell, FaSearch } from 'react-icons/fa';

import { Container, LogoContainer, MenuContainer } from './styles';

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <Container>
      <LogoContainer>
        {open ? 
          <FaAngleDown size={26} color="#BCBCCB" onClick={() => setOpen(!open)}/>
        :
          <FaBars size={26} color="#BCBCCB" onClick={() => setOpen(!open)}/>
        }
        <div />
        <FaBell size={26} color="#BCBCCB" />
      </LogoContainer>

      <MenuContainer open={open}>
        <div>
          <FaSearch size={14} color="#BCBCCB" />
          <input type="text" placeholder="Search" />
        </div>
        <a href="/">Home</a>
        <a href="/">Articles</a>
        <a href="/">Audio</a>
      </MenuContainer>
    </Container>
  );
}

export default Menu;