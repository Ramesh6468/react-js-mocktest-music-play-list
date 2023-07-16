import {AiOutlineDelete} from 'react-icons/ai'
import './index.css'

const MusicItem = props => {
  const {musicDetails, onClickDeleteButton} = props
  const {id, imageUrl, name, genre, duration} = musicDetails

  const onClickDelete = () => {
    onClickDeleteButton(id)
  }

  return (
    <li className="item">
      <div className="musicCard">
        <div className="card1">
          <img src={imageUrl} alt="track" className="image" />
          <div className="nameCard">
            <p className="name">{name}</p>
            <p className="genre">{genre}</p>
          </div>
        </div>
        <div className="card1">
          <p className="duration">{duration}</p>
          <button
            className="button"
            type="button"
            onClick={onClickDelete}
            data-testid="delete"
          >
            <AiOutlineDelete className="icon2" />
          </button>
        </div>
      </div>
    </li>
  )
}

export default MusicItem
