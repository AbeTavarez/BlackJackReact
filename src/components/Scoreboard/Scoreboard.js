import './Scoreboard.css'



const Scoreboard = () => {
    return(
        <div className='sb-container'>
            <h3>Scoreboard</h3>

            <div className='player'>
                <h4>Player</h4>
                <p>11</p>
            </div>

            <div className='computer'>
                <h4>Computer</h4>
                <p>14</p>
            </div>
        </div>
    )
};

export default Scoreboard;