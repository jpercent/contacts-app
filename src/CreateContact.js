import React, { Component } from 'react'

class CreateContact extends Component {
  render () {
    const { onNavigate } = this.props
    return (
      <div>
        <a
          href="#list"
          onClick={() => {onNavigate()}}
        >
        List Contacts
        </a>
        Create Contact
      </div>
    );
  }
}

export default CreateContact
