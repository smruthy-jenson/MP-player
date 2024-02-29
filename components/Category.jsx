import React,{useEffect, useState} from 'react'
import { Modal,Button,Form,FloatingLabel } from 'react-bootstrap'
import { addCategoryAPI, getCategoryAPI, getVideoAPI, removeCategoryAPI, updateCategoryAPI } from '../services/allAPI';
import VideoCard from './VideoCard';

function Category(removeCategoryVideoResponse) {
  const [allCategories,setAllCategories] = useState([])

  const [categoryName,setCategoryName] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }

  const handleShow = () => setShow(true);

  const handleAddCategory = async ()=>{
    if(categoryName){
      const result = await addCategoryAPI({categoryName,allVideos:[]})
      handleClose()
      getAllCategories()
    }else{
      alert("Please fill the form completely!!!")
    }
  }

  
  
  const getAllCategories = async ()=>{
    const result = await getCategoryAPI()
    setAllCategories(result.data)
  }

  console.log(allCategories);
  
  useEffect(()=>{
    getAllCategories()
  },[removeCategoryVideoResponse])

  const handleRemoveCatogory = async (cId)=>{
    await removeCategoryAPI(cId)
    getAllCategories()
  }

  const dragOverCategory = (e)=>{
    e.preventDefault()
    console.log("Dragging over Category");
  }

  const videoDropped = async (e,categoryId)=>{
    const videoId = e.dataTransfer.getData("videoId")
    console.log(`video Dropped with vId : ${videoId}, inside category Id : ${categoryId}`);
   // get details of videoId
    const {data} = await getVideoAPI(videoId)
    console.log(data);
   //get category details where we have add video
    let selectedCategory = allCategories.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    await updateCategoryAPI(categoryId,selectedCategory)
    getAllCategories()
  }

  const videoDragStarted = (e,videoId,categoryId)=>{
    console.log(`Drag started from category Id : ${categoryId} with video Id : ${videoId}`);
    let dataShare = {videoId,categoryId}
    e.dataTransfer.setData("removeVideoDetails",JSON.stringify(dataShare))
  }
  
  return (
    <> 
    
    <div className="d-flex justify-content-around">
      <h3 style={{ height: '50px' }}>All Categories</h3>
      <button onClick={handleShow} style={{width:'60px', height:'60px'}} className='btn btn-info rounded-circle fs-5'>+</button>
    </div>

    <div className="container-fluid mt-3">
      { allCategories.length>0? allCategories.map
        ((item,index)=>(
          <div droppable="true" onDragOver={(e)=>dragOverCategory(e)} onDrop={(e)=>videoDropped(e,item?.id)} key={index} className="border rounded p-3 mb-2">
            <div className='d-flex justify-content-between'>
              <h5 style={{ height: '50px' }}>{item.categoryName}</h5>
              <button onClick={()=>handleRemoveCatogory(item.id)} className="btn"><i className="fa-solid fa-trash text-danger"></i></button>
            </div>
            
            <div className="row mt-2">
              {
                item.allVideos?.length>0 &&
                item.allVideos?.map((video,index)=>(
                  <div draggable onDragStart={e=>videoDragStarted(e,video.id,item.id)} key={index} className="col-lg-6">
                    <VideoCard insideCategory={true} displayData={video}/>
                  </div>
                ))
              }
            </div>

          </div>
        ))
        : <div className="text-danger fw-bolder">No Catogories are added yet</div>
      }
    </div>
    

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add New Category Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Please fill the form!!!</p>
          <FloatingLabel
        controlId="floatingInputaption"
        label="Category Name"
        className="mb-3"
      >
        <Form.Control value={categoryName} onChange={e=>setCategoryName(e.target.value)} type="text" placeholder="Caption" />
      </FloatingLabel>
      
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleAddCategory} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default Category