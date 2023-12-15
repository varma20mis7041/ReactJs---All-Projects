import styled from 'styled-components'

export const PopUpViewBackgroundContainer = styled.div`
  background-color: #ffffff;
  border-radius: 16px;
  display: flex;
  flex-direction:column;
  justify-content:center:
  align-item:center;

 
@media screen and (max-width:768px){
    position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
min-height:50vh;
max-height:80vh;
min-width:90vw;
max-width:90vw;
}
@media screen and (orientation: landscape) and (max-width:768px){
min-width:50vw

}
`

export const CustomRulesButton = styled.button`
  height: 40px;
  width: 100px;
  font-size: 22px;
  font-family: 'Roboto';
  font-weight: 600;
  border-width: 0px;
  border-radius: 6px;
  background-color: #ffffff;
  cursor: pointer;
`

export const RulesViewBgContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
  //   height: 70vh;
  //   width: 70vw;
`
export const CustomCloseButton = styled.button`
  align-self: flex-end;
  margin: 0px;
  padding: 0px;
  background-color: transparent;
  cursor: pointer;
  border-width: 0px;
`

export const CloseButtonBgContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`
export const RulesViewImgElement = styled.img`
  min-height: 90%;
  max-height: 95%;
  max-width: 100%;
  min-width: 100%;
  @media screen and (orientation: landscape) and (max-width: 768px) {
    max-height: 50vh;
  }
`
