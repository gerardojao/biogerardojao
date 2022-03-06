import React from 'react'
import Linkbio from './Linkbio'
import Network from './Network'
import Title from './Title'

const Base = () => {
  return (
    <section className="home" id="home">
    <div className="home__container">
        <div className="home__content">
            <Title />
            <Linkbio />
           <Network />
        </div>
    </div>
</section>
  )
}

export default Base