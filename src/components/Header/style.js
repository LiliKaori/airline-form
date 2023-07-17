
import styled from "styled-components"
import dbTheme from '@/styles/theme.json'
const { colors, fonts } = dbTheme

export const Menu = styled.ul`
  width: 100%;
  margin: 0;
  display: flex;
  align-items: center;
  list-style: none;
  gap: 15%;
  
  @media (max-width: 470px) {
    display: none;
  }
`

export const Li = styled.li`
  cursor: pointer;
  font-size: ${fonts.text.sizes.big};
  color: ${colors.gray50};
  padding: 5px 20px;

  &:hover{
    border-bottom: 2px solid ${colors.gray50};
  }
`

export const Img = styled.img`
  width: ${props => props.width || 'auto'};
  max-width: ${props => props.$maxWidth || '100%'};;
  padding: 20px;

  @media (max-width: 470px) {
    margin:auto;
  }

  @media (max-width: 300px) {
    width: 100vw;
    
  }
`