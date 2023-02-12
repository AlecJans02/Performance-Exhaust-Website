import Raect from 'react';
import ReactBackgroundVideo from './ReactBackgroundVideo.mov';
import Cardcover from './Cardcover';
import './VideoBackground.css';

const Videobackground = () =>  {
    return (
        <div className="Container" >
        <div className="VidBackground">
            <video src={ReactBackgroundVideo} autoPlay loop muted className="Vidvid" />
        </div>
        <div className="CardBackground" >
            <Cardcover className="" />
        </div>
        </div>
    )
}

export default Videobackground;