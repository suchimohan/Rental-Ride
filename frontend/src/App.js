import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CarComponent from "./components/CarComponent"
import CreateCar from "./components/CreateCar"

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      <Navigation isLoaded={isLoaded} />
      <Switch>
        <Route exact path='/'>
          <CarComponent />
        </Route>
        <Route path="/create-car">
          <CreateCar />
        </Route>
      </Switch>
    </>
);
}

export default App;
