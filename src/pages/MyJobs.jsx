import { useUser } from '@clerk/clerk-react'
import React from 'react'

const MyJobs = () => {

  const {user, isLoaded} =  useUser();

  return (
    <div>MyJobs</div>
  )
}

export default MyJobs