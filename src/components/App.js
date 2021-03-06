import React, { Component } from 'react'
import './App.css'
import { Routes , Route, Link} from 'react-router-dom'
// import { Layout, Typography, Space } from 'antd'
import { Home } from '../components/containers'
import Error404 from './Error404'
import Exchange from './TokenSwap/Exchange';
import Cric from './NFTGame/Cric'
import Game from './NFTGame/Game'
import HomeG from './NFTGame/HomeG'
import Poli from './NFTGame/Poli'
import Multiplayer from './NFTGame/Multiplayer'

class App extends Component {

  render() {
    
    return (
      <>
  
                    <Routes>
                       <Route exact path='/' element={<Home/>}></Route>
                       <Route exact path='/tswap' element={<Exchange/>}></Route>
                       <Route handler={Error404}></Route>
                       <Route exact path='/food' element={<Game/>}></Route>
                       <Route exact path='/cricket' element={<Cric/>}></Route>
                       <Route exact path='/homeg' element={<HomeG/>}></Route>
                       <Route exact path='/politicians' element={<Poli/>}></Route>
                       <Route exact path='/multi' element={<Multiplayer/>}></Route>
                    </Routes>

      </>
    );
  }
}

export default App;
