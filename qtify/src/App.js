import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { fetchTopAlbums,fetchNewAlbums,fetchSongs } from './api/api';
import Hero from './components/Hero/Hero';


function App() {

  const [searchData,useSearchData]=useState();
  const [data,setData]=useState({})

  const generateData=(key,source)=>{
    source().then((data)=>{
      setData((prevData)=>{
        return {...prevData,[key]:data}
      })
    })
  }

  useEffect(()=>{
    generateData("topAlbums",fetchTopAlbums);
    generateData("newAlbums",fetchNewAlbums);
    generateData("songs",fetchSongs);
  },[]);

  const {topAlbums=[],newAlbums=[],songs=[]}=data;
  
  return (
    <div>
      <Navbar/>
      <Outlet context={{data:{topAlbums,newAlbums,songs}}}/>
    </div>
    // <div className="App">
    //   <Navbar/>
    //   <Hero text1=" 100 Thousand  Songs, ad-free" text2="Over thousand podcast episodes"/>
    //   <Card type="album"/>
    // </div>
  );
}

export default App;
