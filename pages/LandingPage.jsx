import React from 'react'
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


function LandingPage() {

  const navigate = useNavigate()

  const handleNavigate = () => {
    //navigate to home page
    navigate('/home')
  }

  return (
    <>
      <div className='container'>
        <div className="header row align-items-center m-5">
          <div className="col-lg-5">
            <h3 style={{ height: '100px' }}>Welcome to <span className='text-warning'> Media Player </span></h3>
            <p style={{ textAlign: 'justify' }}> Media Player App will allow you to add and remove their uploaded videos , also helps to arrange them in different categories by providing drag and drop functionalities</p>
            <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
          </div>
          <div className="col"></div>
          <div className="col-lg-6">
            <img src="https://i.pinimg.com/originals/33/a4/6f/33a46f727dbe790d436616a1f56fce9c.gif" alt="Landing Image" />
          </div>
        </div>
        <div className="features">
          <h3 style={{ height: '50px' }} className="text-center">Features</h3>
          <div className="row mt-5">
            <div className="col-lg-4">
              <Card style={{height:'430px',width:'22rem'}}>
                <Card.Img variant="top" src="https://cdn.dribbble.com/users/1237300/screenshots/6478927/__-1_1_____.gif" />
                <Card.Body>
                  <Card.Title style={{height:'30px'}}>Managing Videos</Card.Title>
                  <Card.Text>
                    User can upload , view and remove the videos
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{height:'430px',width:'22rem'}}>
                <Card.Img variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" />
                <Card.Body>
                  <Card.Title style={{height:'30px'}}>Categorize Videos</Card.Title>
                  <Card.Text>
                    User acn categorize the video according to their prefernece using drag and drop features
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-lg-4">
              <Card style={{height:'430px',width:'22rem'}}>
                <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod/images/romantic-love-songs-1545064762.gif?crop=0.6666666666666667xw:1xh;center,top&resize=1200:*"/>
                <Card.Body>
                  <Card.Title style={{height:'30px'}}>Watch History</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="video row border p-5 mt-5 rounded mb-5 ">
            <div className="col-lg-6">
              <h3 style={{height:'50px'}} className="text-warning">Simple, Fast and Powerful</h3>
              <p style={{textAlign:'justify'}}> <span className='fs-4'> Play Everything:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, voluptatem mollitia consequatur dicta quos dignissimos ex sint est blanditiis provident, asperiores et, explicabo vitae. Recusandae tenetur atque corporis modi nisi.</p>

              <p style={{textAlign:'justify'}}> <span className='fs-4'> Categorize Videos:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, voluptatem mollitia consequatur dicta quos dignissimos ex sint est blanditiis provident, asperiores et, explicabo vitae. Recusandae tenetur atque corporis modi nisi.</p>
              
              <p style={{textAlign:'justify'}}> <span className='fs-4'> Watch History:</span> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa, voluptatem mollitia consequatur dicta quos dignissimos ex sint est blanditiis provident, asperiores et, explicabo vitae. Recusandae tenetur atque corporis modi nisi.</p>
            </div>
            <div className="col-lg-6">
            <iframe width="100%" height="480" src="https://www.youtube.com/embed/BzE1mX4Px0I" title="Selena Gomez &amp; The Scene - Who Says" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
      </div>
      <hr />
    </>


  )
}

export default LandingPage