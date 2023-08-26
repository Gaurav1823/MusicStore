export const Player=({song,fn})=>{
    return(
        <div>
            <button onClick={()=>{
                fn(false,null)
            }} className="btn btn-success">Back to Songs</button>
            <p>
                Singer Name:{song?.artistName}
                <br/>
                Track Name:{song?.trackName}
            </p>
            <br/>
            <br/>
        <audio controls>
            <source src={song?.previewUrl} type="audio/mp4"/>
        </audio>
        </div>
    )
}