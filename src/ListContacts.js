import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

class ListContacts extends Component {
 static propTypes = {
     contacts: PropTypes.array.isRequired,
     onDeleteContact: PropTypes.func.isRequired,
   }

   state = {
     query: ''
   }

  updateQuery = (query) => {
    console.log("query = ", query)
    this.setState(()=>({
        query: query.trim()
    }))
  }

  render () {
    console.log(`Props = ${this.props}`, this.props);
    const { query } = this.state
    const { contacts, onDeleteContact } = this.props
    const showingContacts = query === ''
      ? contacts
      : contacts.filter((c) => (
          c.name.toLowerCase().includes(query.toLowerCase())
        ))

    return (
      <div className='list-contacts'>
        {JSON.stringify(query)}
        <div className='list-contacts-top'>
          <input
            className='search-contacts'
            type='text'
            placeholder='Search Contacts'
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        <Link
          to='/create'
          className='add-contact'
        >Add contact</Link>

        }
        </div>

        {showingContacts.length !== contacts.length && (
          <div className='showing-contacts'>
            <span>Now showing {showingContacts.length} of {contacts.length}</span>
            <button className='show-all' onClick={() => this.updateQuery('')}>Show all</button>
          </div>
        )}

        <ol className="contacts-list" >
        {
          showingContacts.map((contact) => (
            <li key={contact.name}>
              <div
                className='contact-avatar'
                style={{
                  backgroundImage: `url(${contact.avatarURL})`
                }}
              ></div>
              <div className='contact-details'>
                <p>{contact.name}</p>
                <p>{contact.handle}</p>
              </div>
              <button
                className='contact-remove'
                onClick={() => onDeleteContact(contact)}
              >
                Remove
              </button>
            </li>
          ))
        }
        </ol>
      </div>
    )
  }
}
/*
ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
}
*/
/*
class ListContacts extends Component {

  render() {
    console.log(`Props = ${this.props}`, this.props);
    return (
      <ol className="contacts-list" >
      {
        this.props.contacts.map((contact) => (
          <li key={contact.name}>
            <div
              className='contact-avatar'
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}
            ></div>
            <div className='contact-details'>
              <p>{contact.name}</p>
              <p>{contact.handle}</p>
            </div>
            <button className='contact-remove'>
              Remove
            </button>
          </li>
        ))
      }
      </ol>
    )
  }
}
*/
export default ListContacts
