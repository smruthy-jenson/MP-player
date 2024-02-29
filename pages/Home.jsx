import React, { useState } from 'react'
import Add from '../components/Add'
import Category from '../components/Category'
import View from '../components/View'
import { Link } from 'react-router-dom'


function Home() {
  const [removeCategoryVideoResponse,setRemoveCategoryVideoResponse] = useState("")
  const [uploadVideoResponse,setUploadVideoResponse] = useState("")
  return (
    <>
      <div className="container mt-5 d-flex justify-content-between">
        <Add setUploadVideoResponse={setUploadVideoResponse} />
        <Link to={'/Watch'} >View History</Link>
      </div>
      <div className="container-fluid mt-5 mb-5 row">
        <div className="col-lg-6">
          <h3 style={{ height: '50px' }}>All Videos</h3>
          <View uploadVideoResponse={uploadVideoResponse} setRemoveCategoryVideoResponse = {setRemoveCategoryVideoResponse} />
        </div>
        <div className="col-lg-6">
            <Category />
          </div>
        </div>
      

    </>
  )
}

export default Home