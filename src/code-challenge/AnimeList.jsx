import React, { useEffect, useState } from 'react';
import { Card } from './Card';
import { filterAndSortAnimeList } from './helpers';

const AnimeList = () => {
  const [search, setSearch]=useState('');
  const [cards, setCards]= useState();
  const [animeList, setAnimeList]=useState();

  useEffect(() => {
    fetch('http://localhost:3000/list')
    .then(response => response.json())
    .then(data => data?.success && setAnimeList(data.data));
  }, [])

  useEffect(()=>{
    if(animeList?.length > 0)
      setCards(filterAndSortAnimeList(search, animeList));
  }, [animeList, search])

  return (
    <div className="animeList">
      <h1>Anime List</h1>

      <label htmlFor="Search">Search</label>:&nbsp;
      <input type="text" id="Search" name="Search" value={search} onChange={e=>setSearch(e.target.value)} />

      <div className="cards">
        {
          cards?.map(c => <Card key={c.anime_id} className="card" name={c.anime_name} image={<img className="image" alt={c.anime_name} src={`/images/${c.anime_img}`} />} />)
        }
      </div>
    </div>
  );
};

export default AnimeList;
