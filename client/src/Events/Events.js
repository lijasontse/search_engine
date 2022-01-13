import React from 'react'

const Events = ({ friends, events }) => {

  const match = friends.reduce((prev, curr) => {

    for (const [key, value] of Object.entries(events)) {
      if (!prev[key]) {
        prev[key] = []
      }
      if (value.includes(curr.id)) {
        prev[key] = [...prev[key], curr]
      }
    }
    return prev;
  }, {})

  return (
    <div>
      {
        Object.entries(match).map(([key, value]) => (
          <div>
            <h2>{key}</h2>
            <div>{value.map(val => (
              <div>
                <span>{val.id}</span>
                <span>{val.firstName}</span>
                <span>{val.lastName}</span>
                <span>{val.tags.join(',')}</span>
              </div>
            ))}</div>
          </div>
        ))
      }
    </div>
  )
}

export default Events
