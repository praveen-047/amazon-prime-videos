// Write your code
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import { IoMdClose } from "react-icons/io";
import './index.css'

const MovieItem = props => {
  const {details} = props
  const {thumbnailUrl, videoUrl} = details

  return (
    <div className="thumbnail-div">
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
        }
      >
        {close => (
          <>
            <div className="popup-container">
              <div className="close-container">
                <button
                  type="button"
                  onClick={() => close()}
                  className="close-btn"
                  data-testid="closeButton"
                >
                  <IoMdClose  className="close-icon" />
                </button>
              </div>
              <div className="video-container">
                <ReactPlayer url={videoUrl} className="video-player" />
              </div>
            </div>
          </>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
