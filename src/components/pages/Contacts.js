import React, { useState } from 'react'

const Contacts = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    // Getting the value and name of the input which triggered the change
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    //sets the state for corresponding element
    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  return (
    <div>
      <h2>Contact Me</h2>
      <form className="contact">
        <p>Name:</p>
        <input
          value={name}
          name="name"
          onChange={handleInputChange}
          type="text"
        />
        <p>Email:</p>
        <input
          value={email}
          name="email"
          onChange={handleInputChange}
          type="text"
        />
        <p>Message:</p>
        <input
          value={message}
          name="message"
          onChange={handleInputChange}
          type="text"
        />
      </form>
    </div>
  )
}

export default Contacts
