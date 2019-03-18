import React from 'react'
import styled from 'styled-components'

const About = () => (
  <Content>
    <h2>My name is Enrique</h2>
  </Content>
)

const Content = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    display: none;
    color: #000;
    font-size: 2.5rem;
    font-weight: 500;

    @media (min-width: 768px) {
      font-size: 3.8rem;
      display: block;
    }
  }

  p {
    width: 100%;
    font-size: 1.7rem;
    color: #a5a9b5;
    font-weight: 300;
    line-height: 3rem;

    @media (min-width: 768px) {
      width: 50%;
      font-size: 1.9rem;
      margin-top: 1.6rem;
    }
  }
`

export default About
