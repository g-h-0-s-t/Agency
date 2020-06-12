import React from 'react'
/*eslint-disable */
// @ts-ignore
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/*eslint-enable */
import './assets/main.css'
import Hero from './sections/hero'
import Canidates from './sections/canidates'
import Footer from './sections/footer'

const Home = () => (
  <div>
    <Hero />
    <Canidates />
    <Footer />
  </div>
)
const ComingSoon = () => (
  <div className='bg-gray-900 h-screen text-white px-12 py-8'>
    <div className='grid grid-rows-3 h-full'>
      <h1 className='font-bold text-2xl h-12'>recruitocity</h1>
      <div className='mt-12 '>
        <div className='mt-12 text-5xl font-semibold flex flex-cols justify-center'>
          We'll see you soon
        </div>
        <div className='mt-6 text-2xl text-center text-purple-600'>
          This websites under construction.
        </div>
      </div>
    </div>
  </div>
)

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path='/comingsoon' component={ComingSoon}></Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
