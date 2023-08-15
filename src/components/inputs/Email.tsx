import React from 'react'

function Email() {
  return (
    <>
    <label htmlFor="email">Enter your globex.com email:</label>

    <input type="email" id="email" pattern=".+@globex\.com"  required />
    </>
  )
}

export default Email