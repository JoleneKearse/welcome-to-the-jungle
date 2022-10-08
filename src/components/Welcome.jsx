import Cover from "../img/album-cover.jpg"
import "../css/main.css"

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome to the Jungle</h1>
        <p>We've got fun and games</p>
        <p>We got everything you want honey, we know the names</p>
        <p>We are the people that can find whatever you need</p>
        <p>If you go the money, honey, we got your disease</p>
        <img src={Cover} alt="Guns N' Roses album cover for Welcome to the Jungle" width={300} height={300}></img>
      </div>
    </>
  )
}