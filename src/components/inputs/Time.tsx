import React from 'react'

function Time() {
  return (
    <>
    <label htmlFor="appt">Choose a time For your meeting:</label>

    <input type="time" id="appt" name="appt" min="09:00" max="18:00" required />

    <small>Office hours are 9am to 6pm</small>

    </>
  )
}

export default Time