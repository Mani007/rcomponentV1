import React from 'react'

function Password() {
  return (
    <div>
  <label htmlFor="pass">Password (8 characters minimum):</label>
  <input type="password" id="pass" name="password"  required />
  {/* minlength="8" */}
</div>
  )
}

export default Password