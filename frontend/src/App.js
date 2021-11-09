import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CarComponent from "./components/CarComponent"
import CreateCar from "./components/CreateCar"
import CompleteCarDetails from "./components/CompleteCarDetails";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      {/* <div className="Main image">
        <img src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/living-the-dream-aldona-pivoriene.jpg" alt="car"/>
      </div> */}
      <Switch>
        <Route exact path='/'>
          <CarComponent />
        </Route>
        <Route path="/create-car">
          <CreateCar />
        </Route>
        <Route path="/car/:id">
          <CompleteCarDetails />
        </Route>
        <Route path="/">
            <h2>Page Not Found</h2>
        </Route>
      </Switch>
    </>
);
}

export default App;
