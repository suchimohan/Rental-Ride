# Name of the project

Rental - Ride

Rental-Ride, an Airbnb clone, is an application that allows users to rent a car from hosts. Hosts are users who own a car and have listed it in the site for renting.


# Link to live site

https://rental-ride.herokuapp.com/


# Link to your repo (wiki Docs)

https://github.com/suchimohan/Rental-Ride/wiki


# Instructions on how to build/run the project (installation instructions)

- Open the repo in VSCode
- In the terminal, cd into backend folder and npm start, to run the backend in localhost 5000.
- In another terminal, cd into frontend folder and npm start to launch the app
- go to localhost:3000


# List of techs/languages/plugins/APIs used

- Frontend : Javascript / JSX, React, Redux, CSS
- Backend : Express, Postgresql, Sequelize
- Heroku


# Challenges

- It was a challenge working on different components & redux store states that would not negatively interact with others. It was difficult to think modularly and ensure that everyting worked correctly and rendered the way I want it.


# Anything you had to stop and think about before building

Redux, especially where to call the thunk and how to set the response JSON in the routes so that my state would render the way I can query for cars and host details and also reviews and user deatils.

links to see code for routes:-

https://github.com/suchimohan/Rental-Ride/blob/main/backend/routes/api/cars.js

https://github.com/suchimohan/Rental-Ride/blob/main/backend/routes/api/reviews.js


# To-dos/future features

- Bookings
- Payments
- Search based on geoLocation
- User/host profiles
- Messaging
