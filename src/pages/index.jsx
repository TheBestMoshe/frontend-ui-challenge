import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    console.log('getting data');

    const response = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'
    );

    setData(await response.json());

    console.log('data', await response.json());
  }

  return (
    <div>
      <h1>Drinks</h1>

      {/* Display a list of categories here */}
      <Link to="/category?c=Ordinary Drink">Ordinary drink</Link>

      {/* The `data` variable contains the data */}
      <pre> {JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
