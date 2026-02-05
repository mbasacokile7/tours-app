import { useEffect, useState } from "react";
import Loading from "./Components/Loading";
import Tours from "./Components/Tours";
const url = "https://www.course-api.com/react-tours-project";

const App = () => {
  // Setup State Values
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState([]);

  // Function to remove each tour
  function removeTour(id) {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }
  // Function to fetch Data
  async function getData() {
    // Set the loading to true
    setIsLoading(true);
    try {
      // get the Data
      const response = await fetch(url);
      const data = await response.json();
      setTours(data);
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  // useEffect to fetch data on initial load
  useEffect(() => {
    getData();
  }, []);

  // what to render before data has been fetched
  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
};
export default App;
