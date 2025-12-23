import React from 'react'
import SocialLogin from './SocialLogin'
import Findus from './Findus'
import Q_Zone from './Q_Zone'
import SlideBG from './SlideBG'

export default function RigthAside() {
  return (
    <div className='text-start'>
      <h2 className='font-bold text-start'>Login With</h2>
      <div>
        <SocialLogin></SocialLogin>
        <Findus></Findus>
        <Q_Zone></Q_Zone>
        <SlideBG></SlideBG>
      </div>
    </div>
  )
}
