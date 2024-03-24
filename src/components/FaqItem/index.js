// Write your code here.
import './index.css'

const FaqItem = props => {
  const {eachItem, onShowHide} = props
  const {isShow, questionText, answerText} = eachItem

  const btnUrl = isShow
    ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
  const altName = isShow ? 'minus' : 'plus'
  const showOrHide = () => {
    onShowHide(eachItem)
  }
  return (
    <li>
      <div className="headCont">
        <h1 className="question">{questionText}</h1>
        <button type="button" onClick={showOrHide}>
          <img src={btnUrl} alt={altName} />
        </button>
      </div>
      {isShow && <p>{answerText}</p>}
    </li>
  )
}

export default FaqItem
