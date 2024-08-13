// Step 1: Import necessary React and external libraries/modules
import React from "react";
import Card from 'react-bootstrap/Card';

// Step 2: Import custom components and modules i.e. defined by developer
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// Step 3: Define a functional component named 'Home'
export default function Home(props) {

  // Step 4: Render the component
    return (

      //Fragment to group multiple children without adding extra nodes to the DOM
      
        <>
          {/* Step 4.1: Include the 'NavBar' component */}
            <NavBar />
            
            {/* Step 4.2: Main content container */}
            <div className="container mt-5 background">
                <div className="row justify-content-center pt-5">

                  {/* Step 4.2.1: First card for the 'User' section */}
                  <div className="col-12 col-md-4 col-lg-3 mt-5">

                    {/* Step 4.2.1.1: Link to the '/user' route */}
                    <Link to={'/user'} className="justify-content-center d-flex">

                      {/* Step 4.2.1.2: Bootstrap Card component for styling */}
                      <Card className="text-center bg-light border shadow" style={{borderRadius: '12px'}}>

                        {/* Step 4.2.1.3: Header inside the card */}
                        <h1 className="pt-4">
                          User
                        </h1>

                        {/* Step 4.2.1.4: Body of the card */}
                        <Card.Body className="pb-4">

                          {/* Step 4.2.1.5: Image for the 'User' card */}
                          <img src={"https://clipart-library.com/images/pi7rn845T.png"} style={{width: '250px', height: '220px'}} />
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>

                  {/* Step 4.2.2: Second card for the 'Delivery Partner' section */}
                  <div className="col-12 col-md-4 col-lg-3 mt-5">

                    {/* Step 4.2.2.1: Link to the '/delivery-partner' route */}
                    <Link to={'/delivery-partner'} className="justify-content-center d-flex">

                      {/* Step 4.2.2.2: Bootstrap Card component for styling */}
                      <Card className="text-center bg-light border shadow" style={{borderRadius: '12px'}}>

                        {/* Step 4.2.2.3: Header inside the card */}
                        <h1 className="pt-4">
                          Delivery Partner
                        </h1>

                        {/* Step 4.2.2.4: Body of the card */}
                        <Card.Body className="pb-4">

                          {/* Step 4.2.2.5: Image for the 'Delivery Partner' card */}
                          <img src={"https://cdni.iconscout.com/illustration/premium/thumb/food-parcel-delivery-4650524-3856179.png"} style={{width: '250px', height: '220px'}} />
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>

                </div>
            </div>

            {/* Step 4.4: Include the 'Footer' component */}
            <Footer />
        </>
    )
}
                       