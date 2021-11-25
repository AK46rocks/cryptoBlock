import React, { Component } from 'react'
import '../App.css'

class SellForm extends Component {

    constructor(props){
        super(props)
        this.state = {
            output:'0',
        }
    }

    render(){
    return (
        <form onSubmit={(event)=>{
            event.preventDefault()
            console.log('purchaseing ,...')
            let tokenAmount = this.input.value.toString()
            tokenAmount = window.web3.utils.toWei(tokenAmount,'ether')
            this.props.sellTokens(tokenAmount)
        }}>
          
                <div className="info gradient__text">
                    <label>Input </label>
                    <span>Balance: {window.web3.utils.fromWei(this.props.tokenBalance,'ether')}</span>
                </div>

            <div className="input-group">                            
                <input
                    onChange={(event)=>{
                        // console.log('changing...');
                        const tokenAmount = this.input.value.toString()
                        this.setState({ output: tokenAmount / 100 })
                    }}
                    ref={(input)=>{this.input=input}}
                    type="text"
                    className="form-control form-control-lg"
                    placeholder="0"
                  />
                <div className="input-group-append">
                    <div className="input-group-text">
                     <img src='' height='32' alt=""/> 
                    &nbsp; KUN
                    </div>
                </div> 
            </div>

            <div className="info gradient__text">
                <label>Output</label>
                <span>Balance: {window.web3.utils.fromWei(this.props.ethBalance,'ether')}</span>
            </div>
            <div className="input-group">                        
                <input type="text" placeholder="0"
                 className="form-control form-control-lg"
                 value={this.state.output} 
                 disabled
                 />
                <div className="input-group-append">
                    <div className="input-group-text">
                     <img src='' height='32' alt=""/> 
                    &nbsp; ETH
                    </div>
                </div>
            </div>
            <div className="ex-info gradient__text">
                <label>Exchange Rate</label>
                <b>100 KUN = 1ETH</b>
            </div>
            
            
            <div className="input-group text-center">
                <button className='btn btn-lg form-control'>&nbsp;SWAP!</button>
            </div>
            
        </form>  
    );
  }
}

export default SellForm;    