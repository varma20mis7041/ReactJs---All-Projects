// Write your code here.
import './index.css'

const FaqItem = props => {
  const {faqDetails, display, onClikeShowButton, onClickHideButton} = props
  const {id, questionText, answerText} = faqDetails

  console.log(display)
  const showButtonClicked = () => {
    onClikeShowButton(id)
  }

  const hideButtonClicked = () => {
    console.log('hide', id)
    onClickHideButton(id)
  }

  const displayShowOrHideButton = () => {
    if (display) {
      return (
        <button
          type="button"
          className="button show_button"
          onClick={hideButtonClicked}
        >
          <img
            alt="minus_img"
            src="https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png"
          />
        </button>
      )
    }
    return (
      <button
        type="button"
        className="button hide_button"
        onClick={showButtonClicked}
      >
        <img
          alt="plus_img"
          src="https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png"
        />
      </button>
    )
  }

  return (
    <li className="faq_item">
      <div className="faq_item_top_section_container">
        <h1 className="question_text_element">{questionText}</h1>
        {displayShowOrHideButton()}
      </div>
      <div
        className={`faq_item_bottom_section_container ${
          display ? 'show_faq_item' : 'hide_faq_item'
        }`}
      >
        <hr className="hr_line" />
        {display && <p className="answer_text_element">{answerText}</p>}
      </div>
    </li>
  )
}
export default FaqItem
