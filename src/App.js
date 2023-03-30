import React from 'react'
import Header from './meme_generator/Header.mjs'
import Meme from './meme_generator/Meme.mjs'
import './meme_generator/styles.css'
// import Data from './TravelJournal_comps/Data.mjs'


export default function App() {
  return (
    <div className='container'>


      <Header />
      <Meme />

    </div>
  )
}

