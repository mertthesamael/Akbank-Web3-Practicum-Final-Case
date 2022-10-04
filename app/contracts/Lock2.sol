pragma solidity ^0.8.9;
// SPDX-License-Identifier: MIT


import "./Lock.sol";

contract Lock2 is Lock{
constructor(string memory _campaignName, bool _isActive, uint _goal ) Lock(_campaignName, _isActive, _goal){
        campaignName = _campaignName;
        isActive = _isActive;
        goal = _goal;
    }
}