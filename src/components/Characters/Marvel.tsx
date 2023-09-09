import { useParams } from "react-router";
import axios from "axios";
import { useState, useEffect } from "react"; // Import useEffect to use it for fetching data

type MarvelCharacter = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  // Add other properties as needed from the API response
};

const Marvel = () => {
  const { id } = useParams();
  const [item, setItem] = useState<MarvelCharacter | null>(null); // Set the initial type as MarvelCharacter or null

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `https://gateway.marvel.com:443/v1/public/characters/${id}?ts=13469789&apikey=4459ff8a28f75db75d9c7eac0eb97c93&hash=384b7e90a155d9ab982a33714342c09f`
      );
      setItem(res.data.data.results[0] as MarvelCharacter); // Assert the type as MarvelCharacter
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Use useEffect to fetch data only once when the component mounts

  return (
    <>
      {!item ? (
        ""
      ) : (
        <div className="box-content">
          <div className="right-box">
            <img
              src={`${item.thumbnail.path}.${item.thumbnail.extension}`}
              alt=""
            />
          </div>
          <div className="left-box">
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
        </div>
      )}
    </>
  );
};

export default Marvel;
