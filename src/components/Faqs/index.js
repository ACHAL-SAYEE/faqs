import {Component} from 'react'
import FaqItem from '../FaqItem'
import './index.css'

// const faqsList = this.props
// console.log(faqsList)
const intialisAnswerVisible = [false, false, false, false]
// const isAnswerVisible = [true, true, true, true]

class Faqs extends Component {
  state = {isAnswerVisible: intialisAnswerVisible}

  updateAnswershownstatus = id => {
    const {isAnswerVisible} = this.state

    isAnswerVisible[id] = !isAnswerVisible[id]
    this.setState({isAnswerVisible})
    console.log(isAnswerVisible[id])
  }

  render() {
    const {isAnswerVisible} = this.state
    const {faqsList} = this.props
    // faqsList = []
    console.log(faqsList)
    return (
      <li>
        <div className="faqs">
          <h1>FAQs</h1>
          <ul>
            {faqsList.map(faq => (
              <FaqItem
                faq={faq}
                key={faq.id}
                isAnswerVisible={isAnswerVisible[faq.id]}
                updateAnswershownstatus={this.updateAnswershownstatus}
              />
            ))}
          </ul>
        </div>
      </li>
    )
  }
}
export default Faqs
