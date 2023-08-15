import React from 'react'
//size="30" 
function Urls() {
  return (
    <>
      <label htmlFor="url">Enter an https:// URL:</label>
      <input type="url" name="url" id="url" placeholder="https://example.com" pattern="https://.*" required />
    </>
  )
}

export default Urls