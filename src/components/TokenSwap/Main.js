import React, { Component } from 'react'
import '../App.css';
import BuyForm from './BuyForm';
import SellForm from './SellForm';

class Main extends Component {

    constructor(props){
        super(props)
        this.state = {
            currentForm:'buy',
        }
    }

    render(){

        let content
        if(this.state.currentForm == 'buy'){
          content = <BuyForm
                        ethBalance={this.props.ethBalance}
                        tokenBalance={this.props.tokenBalance}
                        buyTokens={this.props.buyTokens}
                    />
        }else{
            content = <SellForm
                        ethBalance={this.props.ethBalance}
                        tokenBalance={this.props.tokenBalance}
                        sellTokens={this.props.sellTokens}
                      />
        }

        return (
                <>
                <div className="content mt-3">

                <div className="d-flex justify-content-between mb-2">
                 <button className="btn switch_btn" 
                         onClick={(event)=>{
                            this.setState({currentForm:'buy'})
                         }}>
                         Buy
                </button>
                 <span className="text-muted" style={{fontSize:'30px'}}>&lt; &nbsp; &gt;</span>
                 <button className="btn switch_btn"
                         onClick={(event)=>{
                            this.setState({currentForm:'sell'})
                         }}>
                         Sell
                </button>
                </div>

                    <div className="card">                    
                    {content}              
                    </div>

                </div>    
        </>
    );
  }
}

export default Main;    