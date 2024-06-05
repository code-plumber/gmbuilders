"use client";

import React from 'react'

const ContactForm = () => {

    async function handleSubmit(event: any) {
        event.preventDefault()
      console.log(event)
        const data = {
            name: String(event.target.name.value),
            email: String(event.target.email.value),
            message: String(event.target.message.value)
        }
        console.log(data);
        
    }

  return (
    <form onSubmit={handleSubmit}>
    <div className="w-full flex flex-col">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        required
        className=" p-4 bg-gray-50 border border-grey-100"
        autoComplete="off"
      ></input>
    </div>
    <div className="w-full flex flex-col">
      <label htmlFor="email">E-Mail</label>
      <input
        type="text"
        id="email"
        required
        className=" p-4 bg-gray-50 border border-grey-100"
        autoComplete="off"
      ></input>
    </div>
    <div>
      <label htmlFor="message">Message</label>
        <textarea
          id='message'
        rows={4}
        required
        placeholder="How can we help you?"
        className="w-full p-4 bg-gray-50 border border-grey-100"
      ></textarea>
    </div>
    <div>
    <button type="submit" className="px-4 py-2 w-40 bg-gray-700 text-white mt-4">Send Message</button>
    </div>
  </form>
  )
}

export default ContactForm;