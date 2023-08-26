import { useState } from "react"

export const Song=({fn,song})=>{
    const [playerFlag,setPlayerFlag]=useState(false)
    const showPlayer=()=>{
        fn(true,song)
    }
    return(
        <div className="row">
            <div className="col-4">
                <img src={song.artworkUrl100}></img>
            </div>
            <div className="col-4">
            {song.artistName}
            {song.trackName}
            </div>
            <div className="col-4">
                <button className="btn btn-dark" onClick={showPlayer}>Play song</button>
            </div>
        </div>
    )
}