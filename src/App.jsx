import "./styles/styles.scss";
import iconStar from "../images/icon-star.svg";
import thankYouImg from "../images/illustration-thank-you.svg"
import { useState } from "react";

function App() {
  const [thankYou, setThankYou] = useState(false)
  const [rating, setRating] = useState("")

// error handling!
  return (
    <>
    <div id="card-container">
      {!thankYou ? (<div id="rating-container">
        <div id="icon-star">
            <img src={iconStar} alt="star icon"/>    
        </div>

      <h1>How did we do?</h1>
      <p>Please let us know how we did with your support request. 
        All feedback is appreciated to help us improve our offering!
      </p>

    <div id="btn-section">
      {[1,2,3,4,5].map((ratingValue)=>(
        <button key={ratingValue} className={`rating-btn ${rating === ratingValue ? "active" : ""}`} 
        onClick={()=>setRating(ratingValue)}>{ratingValue}</button>
      ))}
    </div>
      <button id="submit-btn" onClick={()=>{setThankYou((prevState) => !prevState)}}>Submit</button>
      </div>) : (
        <div id="thankyou-container">
            <img src={thankYouImg} alt="star icon"/>
            <span><p>You selected ${rating} out of 5</p></span>
            <h2>Thank you!</h2>
            <p>We appreciate you taking time to give a rating.
              If you ever need more support, don't hesitate to get in touch!
            </p>

        </div>
      )}
      
      </div>  

    </>
  )
}

export default App
