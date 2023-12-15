import Popup from 'reactjs-popup'

import {RiCloseLine} from 'react-icons/ri'

import 'reactjs-popup/dist/index.css'

import {
  CustomRulesButton,
  RulesViewBgContainer,
  CustomCloseButton,
  CloseButtonBgContainer,
  PopUpViewBackgroundContainer,
  RulesViewImgElement,
} from './StyledComponents'

const RulesPopup = () => (
  <div>
    <Popup
      modal
      trigger={<CustomRulesButton type="button">Rules</CustomRulesButton>}
    >
      {close => (
        <PopUpViewBackgroundContainer>
          <RulesViewBgContainer>
            <CloseButtonBgContainer>
              <CustomCloseButton onClick={() => close()}>
                <RiCloseLine size={25} />
              </CustomCloseButton>
            </CloseButtonBgContainer>
            <RulesViewImgElement
              src="https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rules-image.png"
              alt="rules"
            />
          </RulesViewBgContainer>
        </PopUpViewBackgroundContainer>
      )}
    </Popup>
  </div>
)

export default RulesPopup
