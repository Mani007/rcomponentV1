import React from 'react'

function Files() {
  return (
   <>
    <label htmlFor="avatar">Choose a profile picture:</label>

<input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" />

   </>
  )
}

export default Files