import React from 'react';
import { useNavigate } from 'react-router-dom';

// Define the types for data and item
type DataItem = {
  id: number;
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

type Props = {
  data: DataItem[] | null; // Specify that data is an array of DataItem or null
};

const Card: React.FC<Props> = ({ data }) => {
  let navigate = useNavigate();

  return (
    <>
      {data ? (
        data.map((item: DataItem) => ( // Add type annotation for the item parameter
          <div
            className="card"
            key={item.id}
            onClick={() => navigate(`/${item.id}`)}
          >
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt="" />
            <div className="title">
              <h3>{item.name}</h3>
            </div>
          </div>
        ))
      ) : (
        ""
      )}
    </>
  );
};

export default Card;
