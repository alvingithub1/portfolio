import React, { Component } from 'react'

export class LandingPage extends Component {
  render() {
    return (
      <>
      <div className='landingPage'>
        
        LandingPage

        <div className='landingPageHeader'>
        <h1 className='landingPageName'>Alvin Accad</h1>
        <h2 className='landingPageTitle'>Full-Stack Software Developer</h2>
        </div>

        <div className='landingPageSection'>
          <div className='landingPageImage'></div>
            <div className='landingPageParagraph'>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
      </div>
      </>
    )
  }
}

export default LandingPage