import { IconButton, Modal } from '@mui/material'
import React from 'react'
import CloseIcon from '@mui/icons-material/Close';
import AboutVideo from "../assets/AboutVideo.mp4"

const VideoModal = ({openVideo, setOpenVideo}) => {
  return (
    <Modal
         open={openVideo}
         onClose={() => {
          setOpenVideo(false)
        }}
        >
          <div
           style={{
              height: "100%",
              width: '100%',
           }}
          >
           <div
            style={{
              textAlign: "end",
              backgroundColor: 'black'
            }}
           >
            <IconButton 
              sx={{backgroundColor: "whitesmoke", border: "1px solid #5a5a5a", "&:hover": {backgroundColor: "whitesmoke",}}}
              onClick={() => {
                setOpenVideo(false)
              }}
            >
              <CloseIcon fontSize='small' />
            </IconButton>
           </div>
           <div
            style={{
              height: "95%",
              width: '100%',
              textAlign: "center",
              backgroundColor: 'black'
            }}
           >
            <video width="100%" height="100%" autoPlay controls>
              <source src={AboutVideo} type="video/mp4" />
            </video>
           </div>
          </div>
        </Modal>
  )
}

export default VideoModal