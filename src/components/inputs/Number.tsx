import React from 'react'

function Number() {
  return (
    <>
    <label htmlFor="tentacles">Number of tentacles (10-100):</label>

<input type="number" id="tentacles" name="tentacles" min="10" max="100" />

    </>
  )
}

export default Number