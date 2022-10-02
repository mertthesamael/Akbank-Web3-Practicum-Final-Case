pragma solidity ^0.8.9;
// SPDX-License-Identifier: MIT




contract Lock {


    // Setting the balance of contract and donator infos
     uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

    constructor(uint _unlockTime) payable {
     

        unlockTime = _unlockTime;
    }

    uint public balance = address(this).balance;

    struct Donator {
        address _address;
        string message;
        uint256 amount;
    }

    Donator[] public donators;

    // Event for donation

    event NewDonate (
        uint indexed date,
        uint256 indexed amount,
        address indexed __address
    );
receive() external payable{
    balance += msg.value;
}
    function getDonate(string calldata _message, uint _amount) payable external {
        donators.push(Donator({
        _address: msg.sender,
        message: _message,
        amount: _amount
        }));
        
    }

    function getBalance() view external returns(uint){
        return address(this).balance;
    }

    function getDonators() external view returns(Donator[] memory){
        return donators;
    }


    


}