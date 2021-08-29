import React from 'react'

export default function Home() {
  const [homes, setHomes] = React.useState([]);

  React.useEffect(() => {
    fetch('/api/homes')
      .then(res => res.json())
      .then((response) => setHomes(response))
  })

  return (
    <div>
      {homes.length}
    </div>
  )
}
