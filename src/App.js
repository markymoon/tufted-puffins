import React, { Component } from 'react'
import Player from './components/player/player'
import Gallery from './components/image-gallery/image-gallery'
import Navbar from './components/navbar/navbar'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isGalleryOpened: true
    }
  }

  toggleTabs() {
    this.setState((prevState, props) => {
      return {
        isGalleryOpened: !prevState.isGalleryOpened,
      }
    })
  }

  render() {
    const { isGalleryOpened } = this.state
    const toggleTabs = this.toggleTabs.bind(this)

    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <button type="button" onClick={toggleTabs}>{ isGalleryOpened ? 'Hide' : 'Show' } Photo Gallery</button>

          {isGalleryOpened && (
            <Gallery />
          )}

          <Player />
        </header>
      </div>
    )
  }
}

export default App
