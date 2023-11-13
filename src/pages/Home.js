import React from 'react'
import banner from '../assets/main-header-background.jpg'
import Frame from '../components/Frame/Frame'
import distressed from '../assets/image0.jpeg'
import closeup from '../assets/image3.jpeg'


export default function Home() {
  return (
    <div className='home-page-container'>
      <div className='home-page-body'>
        <div className='main-header'>
          <img className='main-header-banner' src={banner} alt='main-header-banner'></img>
        </div>
        <section className='section-divider'>
          <Frame src={distressed} alt='distressed' header="Hi, I'm Tin." text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
          <Frame src={closeup} alt='closeup' header='Hello' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' />
        </section>
      </div>
      <footer />
    </div>
  )
}