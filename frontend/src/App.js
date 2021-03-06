import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import CarComponent from "./components/CarComponent"
import CreateCar from "./components/CreateCar"
import CompleteCarDetails from "./components/CompleteCarDetails";
import EditCarDetails from "./components/EditCarDetails";
import AddReviewForm from "./components/AddReviewForm";
import EditReviewsForm from "./components/EditReviewsForm";
import SearchPage from './components/SearchPage';
import Footer from "./components/Footer";

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
            <Footer/>
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
          <Route exact path="/:id/review">
            <AddReviewForm />
          </Route>
          <Route path="/:id/review/:reviewId/edit">
            <EditReviewsForm />
          </Route>
          <Route path='/search/:tag' exact={true} >
            <SearchPage />
          </Route>
          <Route path="/">
            <h2>Page Not Found</h2>
          </Route>
        </Switch>
      </>
);
}

export default App;
