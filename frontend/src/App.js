import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CarComponent from "./components/CarComponent"
import CreateCar from "./components/CreateCar"
import CompleteCarDetails from "./components/CompleteCarDetails";
// import Footer from "./components/Footer";
import EditCarDetails from "./components/EditCarDetails";
import AddReviewForm from "./components/AddReviewForm";

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
        <Route path="/car/:id">
          <CompleteCarDetails />
        </Route>
        <Route path="/:id/edit">
          <EditCarDetails />
        </Route>
        <Route path="/:id/review">
          <AddReviewForm />
        </Route>
        <Route path="/">
            <h2>Page Not Found</h2>
        </Route>
      </Switch>
      {/* <Footer /> */}
    </>
);
}

export default App;
