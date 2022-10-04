pragma solidity ^0.8.9;
// SPDX-License-Identifier: MIT



contract Lock {


    // Setting the balance of contract, donator infos and some other variables.
    uint public unlockTime;
    address payable public owner;
    string public campaignName;
    bool public isActive;
    uint public goal;
    uint public balance = address(this).balance;

    constructor(string memory _campaignName, bool _isActive, uint _goal ){
        campaignName = _campaignName;
        isActive = _isActive;
        goal = _goal;
    }
   
    struct Donator {
        address _address;
        string message;
        uint256 amount;
    }

    Donator[] public donators;

    receive() external payable{
        balance += msg.value;
    }

    // Events

    event NewDonate (
        uint indexed date,
        uint256 indexed amount,
        address indexed __address
    );

    event TsxFail(
        uint failAmount,
        address indexed failAddress,
        string errText

    );

    


    function getDonate(string calldata _message, uint _amount) payable external {
        require(isActive == true, "Campaign has reached the goal, thank you for your support !");
        require(_amount > 0, "Donation must be > 0");
        if(msg.sender.balance >= _amount){
        donators.push(Donator({
        _address: msg.sender,
        message: _message,
        amount: _amount
        }));

        emit NewDonate(block.timestamp, _amount, msg.sender);
        }else{
            emit TsxFail(_amount, msg.sender, "Insufficient Balance");
        }
         if(address(this).balance >= goal){
        isActive = false;
    }
    }

    function getBalance() view external returns(uint){
        return address(this).balance;
    }

    function userBalance(address __addr) view external returns(uint256){
        return __addr.balance;
    }

    function getDonators() external view returns(Donator[] memory){
        return donators;
    }


}