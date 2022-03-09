import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function Category() {
  const [searchParams] = useSearchParams();

  const [data, setData] = useState(undefined);

  useEffect(() => {
    loadCategory();
  }, []);

  async function loadCategory() {
    const response = await fetch(
      `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchParams.get(
        'c'
      )}`
    );

    setData(await response.json());
  }

  return (
    <div>
      <h1>{searchParams.get('c')}</h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
