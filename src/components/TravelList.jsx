import travelPlansData from "../assets/travel-plans.json";
import { useState} from "react"
import "../styles/travelList.css"

/* const TravelList(id,
    destination,
    image,
    days,
    allInclusive,
    totalCost,
    description,
    parts, /* name,
    description,
    cost ) => {
        return 
    } */

    function TravelList () {
    const [plans,setPlans] = useState(travelPlansData)
    return ( 
        <div>
           <div className="plansCtn">
            {plans.map((onePlan) =>
            {
                return (
                    <div className="parent">
                    <div key={onePlan.id} className="child">
                        <img src={onePlan.image} className="destinationImg" alt="destination picture"/>
                        <div className="child">
                        <h3>{onePlan.destination} ({onePlan.days} days)</h3>
                        <p className="tripDescription">{onePlan.description}</p>
                        <p><span className="tripPrice">Price:</span> {onePlan.totalCost}€</p>
                        </div>
                        </div>
                        </div>
                )
            })}
            </div> 
        </div>
        )

    }
    
  

    export default TravelList