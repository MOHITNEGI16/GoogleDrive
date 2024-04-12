import React, { useState } from 'react'
import '../Css/Sidebar.css'
import { FaPlus } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { FaGoogleDrive } from "react-icons/fa6";
import { MdDevices } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md"
import { IoIosStarOutline } from "react-icons/io";
import { RiSpam2Line } from "react-icons/ri";
import { FaTrashAlt } from "react-icons/fa";
import { MdCloudQueue } from "react-icons/md";
import Modal from '@mui/material/Modal';
import { db, storage } from './firebase';
import firebase from 'firebase'

function Sidebar() {
  const[submit, setSubmit] = useState(false);
  const [upload, setUpload] = useState(false);
  const [fileInfo, setFileInfo] = useState(null);
  function handleSubmitClose(){
    setSubmit(false); 
  }
  function handleSubmitOpen(){
    setSubmit(true);
  }

  function onFileSelect(e){
    console.log(e.target.files[0]);
    if(e.target.files[0]){
      setFileInfo(e.target.files[0]);
    }
  }

  const onSubmittingFile=(e)=>{
    e.preventDefault()
    setUpload(true)
    storage.ref(`files/${fileInfo.name}`).put(fileInfo).then(snapshot => {
        storage.ref("files").child(fileInfo.name).getDownloadURL().then(url => {
            db.collection("drivefiles").add({
                url: url,
                name: fileInfo.name,
                size: snapshot._delegate.bytesTransferred,
                time: firebase.firestore.FieldValue.serverTimestamp()
            })

            setSubmit(false);
            setUpload(false);
            setFileInfo(null);
        })
    })
  }

  return (
    <>

    <Modal open={submit} onClose={handleSubmitClose}>
      <div className='modal_div'>
        <form>
          <div className='heading_form'>
            <h2>Select a file to upload</h2>
          </div>

          {
            upload?
            (<h3 className='uploading_file'>Uploading....</h3>):
            <div className='file_choose'>
            <div className='file'>
            <input type='file' onChange={onFileSelect}/>
            </div>
            <br/>
            <br/>
            <input type='submit' className='submit_file' onClick={onSubmittingFile}/>
          </div>
          }

        </form>
      </div>

    </Modal>
    <aside className='sidebar'>

      <div className="sidebar_button" onClick={handleSubmitOpen}>
        <FaPlus style={{fontSize:"18px",marginRight:"20px",color:"grey"}}/>
        <span>New</span>
      </div>

      <div className = "sidebar_differentOption">
        <div className='option home'>
          <IoMdHome style={{fontSize:'25px'}}/>
          <span>Home</span>
        </div>

        <div className='option'>
          <FaGoogleDrive style={{fontSize:'25px'}}/>
          <span>My Drive</span>
        </div>

        <div className='option'>
          <MdDevices style={{fontSize:'25px'}}/>
          <span>Computers</span>
        </div>

        <div className='option'>
          <MdOutlinePeopleAlt style={{fontSize:'25px'}}/>
          <span>Shared with me</span>
        </div>

        <div className='option'>
          <IoIosStarOutline  style={{fontSize:'25px'}}/>
          <span>Starred</span>
        </div>

        <div className='option'>
          <RiSpam2Line style={{fontSize:'25px'}}/>
          <span>Spam</span>
        </div>

        <div className='option '>
          <FaTrashAlt style={{fontSize:'25px'}}/>
          <span>Bin</span>
        </div>

        <hr/>

        <div className='option storage'>
          <MdCloudQueue style={{fontSize:'25px'}}/>
          <span>Storage</span>
        </div>
        <div>
          <progress size="tiny" value="50" max="100"/>
          <p>6.45 GB of 15 GB used</p>
        </div>
        
      </div>



    </aside>
    </>
  )
}





export default Sidebar;
