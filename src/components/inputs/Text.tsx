import React from 'react'
// size="10" minlength="4" maxlength="8"
function Text() {
  return (
    <>
    <label htmlFor="name">Name (required):</label>

    <input type="text" id="name" name="name" required    />
    
    </>
  )
}

export default Text