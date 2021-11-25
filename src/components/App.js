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

class App extends Component {

  render() {
    
    return (
      <>
  
                    <Routes>
                       <Route exact path='/' element={<Home/>}></Route>
                       <Route exact path='/tswap' element={<Exchange/>}></Route>
                       <Route handler={Error404}></Route>
                       <Route exact path='/game' element={<Game/>}></Route>
                       <Route exact path='/cric' element={<Cric/>}></Route>
                       <Route exact path='/homeg' element={<HomeG/>}></Route>
                       <Route exact path='/poli' element={<Poli/>}></Route>
                    </Routes>

      </>
    );
  }
}

export default App;
