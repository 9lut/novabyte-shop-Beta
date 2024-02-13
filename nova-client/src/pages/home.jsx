import React from 'react'
import Navbar from '../components/navbar'
import { userData } from '../helpers'

export const home = () => {
  const { username } = userData();
  return (
    <div>
      <Navbar/>
      <div>
        <h2>Welcome {username}</h2>
      </div>
    </div>
  )
}
export default home