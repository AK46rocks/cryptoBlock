pragma solidity ^0.5.0;

import "./Token.sol";

contract EthSwap{
    string public name = "EthSwap Instant Exchange"; //this are called state variables
    Token public token;
    uint public rate = 100; //uint means unsigned(can't have negative value) integer 

    event TokensPurchased(
        address account,  //who purchase the tokens
        address token,   // token that was purchased
        uint amount,    //amount of token purchased
        uint rate     //redumption rate
    );

    event TokensSold(
        address account,  //who purchase the tokens
        address token,   // token that was purchased
        uint amount,    //amount of token purchased
        uint rate     //redumption rate
    );


    constructor(Token _token) public{
      token = _token; 
    }

    function buyTokens() public payable{
        // Redumption rate = No.of tokens they receive for 1 ether
        // Amount of Ethereum * Redumption rate
        uint tokenAmount = msg.value * rate;  //calculating user input ether value
         
        //Require that EthSwap has enough tokens
        require(token.balanceOf(address(this)) >= tokenAmount); 
        
        //Transfer tokens to the user
        token.transfer(msg.sender, tokenAmount);

        //Emit an Event
        emit TokensPurchased(msg.sender, address(token), tokenAmount, rate);
    }

    function sellTokens(uint _amount) public{
        //user/investor can't sell more than they have
        require(token.balanceOf(msg.sender) >= _amount);

        //Calculate the amount to redeem
        uint etherAmount = _amount / rate;

        //Require that EthSwap has enough tokens
        require(address(this).balance >= etherAmount);

        //Perform sale by giving ether in exchange of tokens
        token.transferFrom(msg.sender, address(this), _amount);
        msg.sender.transfer(etherAmount);

        //Emit an Event
        emit TokensSold(msg.sender, address(token), _amount, rate);
    }
    

}
