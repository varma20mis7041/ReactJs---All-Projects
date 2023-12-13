// Style your elements here
import styled from 'styled-components'

export const CustomButton = styled.button`
  height: 40px;
  width: 100px;
  border-width: 0px;
  border-radius: 6px;
  background-color: #ededed;
  opacity: ${props => (props.active ? '1' : '0.5')};
  color: #334155;
  font-size: 17px;
  font-weight: 600;
  margin-right: 10px;
  cursor: pointer;
  @media screen and (max-width: 768px) {
    width: 122px;
    margin-bottom: 10px;
  }
`
