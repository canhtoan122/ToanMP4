import React from 'react'
import { Route, Routes } from 'react-router-dom'
import SignUp from './components/SignUp'
import Login from './components/Login'
import Admin from './components/Admin/Dashboard/Dashboard'
import User from './components/Admin/User/User'
import Musician from './components/Admin/Musician/Musician'
import AddMusician from './components/Admin/Musician/AddMusician'
import Album from './components/Admin/Album/Album'
import AddAlbum from './components/Admin/Album/AddAlbum'
import Song from './components/Admin/Song/Song'
import AddSong from './components/Admin/Song/AddSong'
import HistoryOrder from './components/Admin/History Order/HistoryOrder'
import AddHistoryOrder from './components/Admin/History Order/AddHistoryOrder'
import Home from './components/User/Home/Home'
import MusicianAlbum from './components/User/Musician,Album/MusicianAlbum'
import UserSong from './components/User/Song/Song'
import FavoriteSong from './components/User/FavoriteSong/FavoriteSong'


export default function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/SignUp' element={<SignUp></SignUp>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='/Admin' element={<Admin></Admin>}></Route>
        <Route path='/User' element={<User></User>}></Route>
        <Route path='/Musician' element={<Musician></Musician>}></Route>
        <Route path='/AddMusician' element={<AddMusician></AddMusician>}></Route>
        <Route path='/Album' element={<Album></Album>}></Route>
        <Route path='/AddAlbum' element={<AddAlbum></AddAlbum>}></Route>
        <Route path='/Song' element={<Song></Song>}></Route>
        <Route path='/AddSong' element={<AddSong></AddSong>}></Route>
        <Route path='/HistoryOrder' element={<HistoryOrder></HistoryOrder>}></Route>
        <Route path='/AddHistoryOrder' element={<AddHistoryOrder></AddHistoryOrder>}></Route>
        <Route path='/MusicianAlbum' element={<MusicianAlbum></MusicianAlbum>}></Route>
        <Route path='/UserSong' element={<UserSong></UserSong>}></Route>
        <Route path='/FavoriteSong' element={<FavoriteSong></FavoriteSong>}></Route>
      </Routes>
    </div>
  )
}
