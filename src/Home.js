import React from 'react'
import styled from 'styled-components'

function Home() {
  return (
    <Wrapper className="test">hi</Wrapper>
  )
}

const Wrapper = styled.section`
background-color:${({theme})=>theme.colors.helper};
width:50rem;
height:50rem;
`;


export default Home