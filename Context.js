import { createContext, useState } from "react";

const MoviesCards = createContext();

const MovieContext = ({ children }) => {
  const [seats, setSeats] = useState([]);
  //creating a global variable to set the occupied seats after payment.
  const [occupied, setOccupied] = useState([]);
  //creating a global variable to get access to the ticket in order to initialize it in the initial screen.
  const [ticket, setTicket] = useState([]);
  return (
    <MoviesCards.Provider
      value={{ seats, setSeats, occupied, setOccupied, ticket, setTicket }}
    >
      {children}
    </MoviesCards.Provider>
  );
};

export { MoviesCards, MovieContext };
