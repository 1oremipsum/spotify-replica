import React from 'react';
import ItemList from './itemlist';
import { artistArray } from "../assets/database/artists";
import { songsArray } from "../assets/database/songs";

const Main = () => {
  return (
    <div className="main">
        <ItemList 
            title="Artistas" 
            items={5} 
            itemsArray={artistArray}
            path="/artists"
            idPath="/artist"
        />
        <ItemList 
            title="Músicas" 
            items={14} 
            itemsArray={songsArray}
            path="/songs"
            idPath="/songs"
        />
    </div>
  )
}

export default Main