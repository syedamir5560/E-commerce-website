import React from 'react'
import { NavLink } from 'react-router-dom';
import styled from 'styled-components'
import Nav from './Nav';

function Header() {
    return (
        <MainHeader>
            <NavLink to="/">
                <img src='./images/1686177967-AmirStore.webp' className='logo' />
            </NavLink>
            <Nav />
        </MainHeader>
    )
}

const MainHeader = styled.header`
  padding: 0 5rem;
  height: 7rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 8rem;
  }
`;

export default Header