import React, { useMemo, useState } from 'react'

export const Assignment3 = () => {
  const [items, setItems] = useState([
    { name: 'chocolates', value: 10 },
    { name: 'chips', value: 20 },
    { name: 'tomato', value: 30 },
    { name: 'onion', value: 30 }
  ])

  let total_value = useMemo(() => {
    let total = 0
    for (let i = 0; i < items.length; ++i) {
      total += items[i].value
    }
    return total
  }, [items])

  return (
    <div>
      <ul>
        {items.map((x, index) => {
          return (
            <li key={index}>
              {x.name} - price $ {x.value}
            </li>
          )
        })}
      </ul>
      <h3>Total Price - $ {total_value}</h3>
    </div>
  )
}
