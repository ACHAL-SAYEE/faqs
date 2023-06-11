import './index.css'

const FaqItem = props => {
  const {faq, isAnswerVisible, updateAnswershownstatus} = props

  const updateAnswerstatus = () => {
    updateAnswershownstatus(faq.id)
  }

  return (
    <li className="faq-item">
      {console.log(isAnswerVisible)}
      <div className="question-container">
        <h1>{faq.questionText}</h1>
        <button type="button" onClick={updateAnswerstatus} className="btn">
          <img
            src={
              isAnswerVisible
                ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png '
                : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png '
            }
            alt={isAnswerVisible ? 'minus' : 'plus'}
          />
        </button>
      </div>
      <div>
        <p className={isAnswerVisible ? '' : 'hidden'}>{faq.answerText}</p>
      </div>
    </li>
  )
}
export default FaqItem
