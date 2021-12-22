pragma solidity ^0.8.0;

import "./Crowdsale.sol";

contract MyTokenSale is Crowdsale {

    // KycContract kyc;
    constructor(
        uint256 rate,    // rate in TKNbits
        address payable wallet,
        IERC20 token
    )
        Crowdsale(rate, wallet, token)
    {

    }

}