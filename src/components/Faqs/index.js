// Write your code here.
import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  constructor(props) {
    super(props)
    this.state = {
      faqsList: props.faqsList.map(each => ({...each, isShow: false})),
    }
  }

  onShowHide = eachItem => {
    console.log('clicked')
    this.setState(old => ({
      faqsList: old.faqsList.map(each => {
        if (each.id === eachItem.id) {
          return {...each, isShow: !each.isShow}
        }
        return each
      }),
    }))
  }

  render() {
    const {faqsList} = this.state
    return (
      <div className="bg">
        <h1>FAQs</h1>
        <ul>
          {faqsList.map(each => (
            <FaqItem
              eachItem={each}
              key={each.id}
              onShowHide={this.onShowHide}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
