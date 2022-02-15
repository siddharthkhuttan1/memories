import styled from '@emotion/styled'
import Box from '../atoms/box.atom'

export const Input = styled.input`
padding: 10px;
border: 1px solid #4c4c4c;
font-size: 14px;
box-sizing: border-box;
width; 100%;
margin-top: 12px;
margin-bottom: 12px;
border-radius: 8px;
`

export const Button = styled(Box)`
padding: 8px;
background: ${(props) =>  props.bgColor ? props.bgColor  : '#256fef'};
font-size: 14px;
line-height:16px;
box-sizing: border-box;
width: 140px;
height:32px;
color: #fff;
border-radius: 6px;
margin-top: 12px;
cursor: pointer;
`