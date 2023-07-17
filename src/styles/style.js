import styled from "styled-components"
import dbTheme from './theme'
const {colors, fonts} = dbTheme


export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  justify-content: flex-start;
  align-items: center;
  overflow: hidden;  
  width: 100%;
  max-width: 100vw;
  height: ${props => props.$height || '100%'};
  min-height: ${props => props.$minH || '100vh'};  
  padding: ${props => (props.$hasPadding ? '30px' : '0px')};  
  background: ${props =>
    props.background
      ? colors[props.background] || props.background
      : colors.primary};
`

export const Wrap = styled.div`
  width: 100%;
`

export const Box = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 470px) {
    flex-direction: column;
    gap:0;
  }
`

export const Title = styled.h1`  
  color: ${props => colors[props.color || 'dark']};
  font-size: ${props => fonts.title.sizes[props.$variant || 'normal']};
  padding: ${props => (props.$hasPadding ? '20px' : '0px')};
  line-height: ${props => fonts.title.sizes[props.$variant || 'normal']};
  text-align: ${props => props.align || 'left'};
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  font-weight: ${props => (props.$bold ? '800' : 'normal')};
  margin-bottom: 30px;

  @media (max-width: 470px) {
    font-size: ${fonts.title.sizes.small};
    text-align: center;
    margin-bottom: 15px;
  }
`
export const Text = styled.p`
  color: ${props => colors[props.color || colors.text]};  
  font-size: ${props => fonts.text.sizes[props.$variant || 'normal']};
  font-weight: ${props => (props.$bold ? 'bold' : 'normal')};  
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  text-decoration-color: ${props => colors[props.color || 'text']};  
  padding: ${props =>
    props.$hasPadding ?
      !props.$removePaddingBottom ?
        '20px' :
        '20px 20px 0 20px' :
      '0px'};

  @media (max-width: 470px) {
    font-size: ${fonts.text.sizes.small};    
  }
`

export const Label = styled.label`
  color: ${props => colors[props.color || colors.text]};  
  font-size: ${props => fonts.text.sizes[props.$variant || 'normal']};
  font-weight: ${props => (props.bold ? 'bold' : 'normal')};  
  text-decoration: ${props => (props.underline ? 'underline' : 'none')};
  text-decoration-color: ${props => colors[props.color || 'text']};
  padding: ${props =>
    props.$hasPadding ?
      !props.$removePaddingBottom ?
        '20px' :
        '20px 20px 0 20px' :
      '0px'};

  @media (max-width: 470px) {
    font-size: ${fonts.text.sizes.small};    
  }
`

export const Button = styled.button`
  border-radius: 0.5em;
  padding: 13px 30px;
  align-items: center;
  margin: ${props => props.spacing || 0};
  background: ${props => colors[props.background || 'primary']};
  width: ${props => (props.block ? '100%' : 'auto')};

  &:hover{
    opacity: 0.7;
  }

  &:active{
    opacity: 0.5;
  }

  @media (max-width: 470px) {
    font-size: ${fonts.text.sizes.small};    
  }
`

export const Input = styled.input`  
  width: 100%;
  padding: 13px 15px;
  font-size: ${fonts.text.sizes.normal};
  border: 1px solid ${colors.muted};
  color: ${colors.dark};
  border-radius: 0.5em;

  @media (max-width: 470px) {
    font-size: ${fonts.text.sizes.small};    
  }
`

export const Form =styled.form`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`

export const Load = styled.div`
  position:absolute;
  top:0;
  bottom: 0;  
  left:0;
  right: 0;
  display:flex;
  align-items: center;
  justify-content: center;
  background-color: ${colors.light};
  opacity: 0.7;
`

