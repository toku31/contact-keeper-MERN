import React, { useContext, useRef, useEffect} from 'react'
import ContactContext from '../../context/contact/contactContext'

const ContactFilter = () => {
  const contactContext = useContext(ContactContext)
  const text = useRef('');
  const { filterContacts, filtered, clearFilter } = contactContext;

  useEffect(()=> {
    if (filtered === null ) {
      text.current.value = '';
    }
  })


  const onChange = e => {
    if(text.current.value !== ''){
      filterContacts(e.target.value);
    }else {
      clearFilter();
    }
  }

  return (
    <div>
      <input type="text" ref={text} placeholder="Filter Contacts..." onChange={onChange}/>
    </div>
  )
}

export default ContactFilter
