import React from 'react'
import './Home.scss';
import soon from './homebackground.jpg';



function Home() {
  return (
    <>
       <div className='main-home'>
            <div className="img-class">
                    <img src={soon} id="imgsoon" alt="" srcSet=""/>
            </div>
        </div>
    </>

  )
}

export default Home;