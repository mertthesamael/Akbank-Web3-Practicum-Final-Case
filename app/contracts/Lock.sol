pragma solidity ^0.8.9;
// SPDX-License-Identifier: MIT




contract Lock {


    // Setting the balance of contract and donator infos
     uint public unlockTime;
    address payable public owner;

    event Withdrawal(uint amount, uint when);

   

    uint public balance = address(this).balance;

    struct Donator {
        address _address;
        string message;
        uint256 amount;
    }

    Donator[] public donators;

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
receive() external payable{
    balance += msg.value;
}
    function getDonate(string calldata _message, uint _amount) payable external {

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