/* import { useState } from 'react' */
/* import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg' */
import './App.css'
import SayHello from './components/SayHello'
import NavBar from './components/NavBar'
import Card from './components/cards'

function App() {
  return (
    <>
      <div className="app">
        <section className='nav-hello-container'>
          <NavBar />
          <SayHello />
        </section>
        <div className='cards-container'>
          <ul>
            <li className='card'><Card
              url="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon1.png"
              title="Declarative"
              text="React makes it painless to create" /></li>
            <li className='card'><Card
              url="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon2.png"
              title="Components"
              text="Build encapsulated componenets" /></li>
            <li className='card'><Card
              url="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon3.png"
              title="Single-Way"
              text="A set of immutable" /></li>
            <li className='card'><Card
              url="https://education-team-2020.s3.eu-west-1.amazonaws.com/web-dev/labs/landing-page/icon4.png"
              title="JSX"
              text="Statically-typed, designed to run on modern browsers." /></li>

          </ul>
        </div>
      </div>

    </>
  )
}

export default App
