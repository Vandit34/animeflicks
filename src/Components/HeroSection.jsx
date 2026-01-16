const HeroSection = () => {
  return (
    <section className='hero-section'>
      <div className='hero-section-wrapper'>
        {/* Eye catching text */}
        <div className='hero-tagline'>
          <p>Anime, Curated by Mood.</p>
        </div>
        {/* Sub text */}
        <div className='hero-subtext'>
          <p>
            We recommend anime that matches how you feel and connect you with
            people who enjoy the same genres and stories around you.
          </p>
        </div>
        <button className='hero-btn'>
          <span>Start Exploring</span>
          {/* <img src='./Icons/play-button_24.png'/> */}
        </button>
 
      </div>
    </section>
  )
}

export default HeroSection
