// Style your components here
import styled from 'styled-components'

export const MemeGeneratorBgContainer = styled.div`
  height: 100vh;
  padding: 50px 100px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 10px 20px;
  }
`

export const MainHeading = styled.h1`
  font-size: 40px;
  color: #35469c;
  font-weight: 700;
`
export const LabelContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
`
export const LabelElement = styled.label`
  color: #5a7184;
  font-size: 15px;
  font-weight: 400;
  margin-bottom: 4px;
`
export const InputElement = styled.input`
  height: 40px;
  width: 500px;
  border-color: #5a7184;
  border-radius: 6px;
  border-width: 0.2px;
  color: #7e858e;
  padding: 10px;
  font-weight: 500;
  font-size: 15px;
  background-color: #ffffff;
  outline: none;
`
export const CustomButton = styled.button`
  height: 40px;
  width: 110px;
  border-width: 0px;
  border-radius: 5px;
  font-size: 17px;
  font-weight: 600;
  color: #ffffff;
  background-color: #0b69ff;
  cursor: pointer;
`
export const MemeContainer = styled.div`
  height: 400px;
  width: 400px;
  display: flex;
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 5px;
`
export const MemeText = styled.p`
  font-size: ${props => props.fontSize}px;
  color: #ffffff;
  font-family: 'Roboto';
  font-weight: 600;
`

export const CustomOption = styled.option`
  font-size: 16px;
  padding-top: 12px;
  padding-right: 14px;
  padding-bottom: 12px;
  padding-left: 14px;
  background-color: #ffffff;
`
export const SampleUrl = styled.p`
  margin-top: 5px;
  font-family: 'Roboto';
  font-weight: 500;
`
