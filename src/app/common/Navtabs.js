import React from 'react'
import "../../styles/navtabs.css"

export default class Navtabs extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      active: 0,
    }
  }

  setActiveTab = (index) => {
    this.setState({
      active: index,
    })
  }

  render() {
    return (
      <div>
      </div>
    )
  }
}