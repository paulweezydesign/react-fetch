import React, { useEffect, useState } from 'react';

const App = () => {
  const [data, setData] = useState([]);
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/ejson',
      'Access-Control-Request-Headers': '*',
      'api-key':
        'MqlR9iNlfB7Kt17txIGUk9xf1EVzlBOuyGNOcT79GqXNGwhM2QLKaG9DatFvNwn0',
      Accept: 'application/json',
    },
    body: '{"collection":"kittens","database":"kittens","dataSource":"Cluster0","projection":{"_id":0,"id":1,"name":1,"image":1, "image2":0, "description":0}}',
  };
  const getMovies = async () => {
    try {
      const response = awaitfetch(
        'https://us-west-2.aws.data.mongodb-api.com/app/data-sealj/endpoint/data/v1/action/find',
        options
      );
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div style={{ flex: 1, padding: 24 }}>
      {data.documents.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default App;
