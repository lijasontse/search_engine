import React from 'react'

const Friend = ({ friend }) => {
  return (
    <div>
      <span>{friend.firstName} {friend.lastName}</span>
      &nbsp;
      <span>{friend.tags.join(', ')}</span>
    </div>
  )
}

export default Friend
