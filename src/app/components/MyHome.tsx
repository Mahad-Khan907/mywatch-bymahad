import React from 'react'

const MyHome = () => {
  return (
    <div>
      <section className='hero' style={{backgroundImage:"url(my-bg-pic.png)"}}>
        <div>
          <h1 className='myheading'>Welcome to MY Watches</h1>
          <p>The Best and Branded Watches are Available</p>
          <a href="/watches"><button>Shop Now</button></a>
        </div>
      </section>
    </div>
  )
}

export default MyHome;
