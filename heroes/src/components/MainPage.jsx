import heroes from "../assets/discord-background.png"

export function MainPage () {

    
    return (
        <>
        <div className="text-container">
            <h1>Imagine a place...</h1>
            <p>...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often</p>
        </div>
        <div className="btn-container">
            <button>Download for Mac</button>
            <button id="btn-browser">Open Discord in your browser</button>
        </div>
        <img id="heroes" src={heroes} alt="discord-heroes" />
        </>
    )
}