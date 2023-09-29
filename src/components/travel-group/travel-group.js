import React from 'react'
import "./travel-group.css"
const TravelGroups = () => {
  const data = [
    { image: "https://www.geoex.com/app/uploads/2019/07/antarctica-crabeater-seal-geoex-393x221.jpg", topic: "ANTARCTICA ADVENTURES", des: "Cruise to the White Continent" },
    { image: "https://www.geoex.com/app/uploads/2019/07/antarctica-crabeater-seal-geoex-393x221.jpg", topic: "ANTARCTICA ADVENTURES", des: "Cruise to the White Continent" },
    { image: "https://www.geoex.com/app/uploads/2019/07/antarctica-crabeater-seal-geoex-393x221.jpg", topic: "ANTARCTICA ADVENTURES", des: "Cruise to the White Continent" }
  ]
  return (
    <div>
      {/* <div className="App"> */}
      <div className='MainUpper'>
        <div className='MainContent'>
          <h1 className='Title' > LUXURY GROUP TRAVEL</h1>
          <div className='Italic'>For intrepid travelers looking for the best in luxury small group tours</div>
          <div className='GoButton'><button className='ButtonFirst'>START PLANNING</button></div>
        </div>
      </div>


      <div className='Mainmid'>
        <div className='AddContent'>
          <h1 className='TitleSet' > LUXURY SMALL GROUP TRAVEL TOURS </h1>
          <div className="ParaSet">
            <p>Personal attention is an essential part of all GeoEx small group trips. Get one-on-one guidance from our destination experts, access our in-house flight-booking service, add a trip extension tailored to your specific interests, and converse with our superb guides while traveling.</p>
            <br></br>
            <p>Our luxury group tours go far beyond the basic to get deeper into the country, its people, wild places, and customs. Intimate group sizes between 10-12 travelers (rarely up to 16) allow us to arrange private access to many sites, accept invitations to share authentic experiences, and stay in top-notch accommodations, which wouldn’t be possible with larger groups. We are committed to delivering a superior small group travel experience from connecting with a destination expert to returning home with new friends and stories.</p>
          </div>
        </div>
      </div>


      <div className='MainDiv'>

        <div className='ItalicData'>Let our experts guide you to your perfect trip</div>
        {/* <div className="MainData"><span>CALL</span> <span>888-570-7108</span> <span>–OR–</span> <span><button>INQUIRE ONLINE</button></span></div> */}

      </div>


      <div className='HomeHead'>
        <div className='HomeHeadingData'>EXPLORE OUR GROUP TRIPS</div>
      </div>

      <div className='GridData'>
        {
          data.map((ele) => {
            // console.log(ele)
            return (
              <div >

                <img className='HomeImageSet' src={ele.image}></img>
                <div className='EntityOne'>
                  <div>{ele.topic}</div>
                </div>
                <div className='EntityTwo'>
                  <p>{ele.des}</p>
                </div>

              </div>
            )
          })
        }
      </div>
    </div>
    // </div>
  )
}

export default TravelGroups
