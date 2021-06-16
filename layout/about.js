

function About() {
  return (
    <section className='about'>
      <h2>EXCITING TOURS FOR ADVENTUROUS PEOPLE</h2>
      <div className='content'>
        <div className='description'>
          <div>
            <h3>YOU'RE GOING TO FALL IN LOVE WITH NATURE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum
            sapiente aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui.</p>
          </div>
          <div>
            <h3>LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores nulla
            deserunt voluptatum nam.</p>
          </div>
          <a>Learn more &rarr;</a>
        </div>
        <div className='gallery'>
          <img src='/img/nat-1.jpg' />
          <img src='/img/nat-2.jpg' />
          <img src='/img/nat-3.jpg' />
        </div>
      </div>
    </section>
  )

}

export default About;