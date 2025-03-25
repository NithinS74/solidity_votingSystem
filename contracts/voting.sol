//// SPDX-License-Identifier: GPLv3

pragma solidity ^0.8;
import "hardhat/console.sol";

contract voting {
    struct candidate {
        string name;
        uint votes;
    }
    mapping(address => bool) hasVoted;
    candidate[] public candidates;

    constructor(string[] memory candidateNames) {
        for (uint i = 0; i < candidateNames.length; i++) {
            candidates.push(candidate(candidateNames[i], 0));
        }
    }

    event voteCasted(address indexed voter, string candidate);

    function vote(uint256 candidate_index) public {
        require(!hasVoted[msg.sender], "you have already voted");
        require(
            candidates.length > candidate_index,
            "there is no candidate at index"
        );
        candidates[candidate_index].votes += 1;
        string memory name = candidates[candidate_index].name;
        emit voteCasted(msg.sender, name);
    }

    function getWinner() external view returns (string memory) {
        uint max = 0;
        string memory name = "";
        for (uint i = 0; i < candidates.length; i++) {
            console.log("candidate:", candidates[i].name);
            console.log("vote:", candidates[i].votes, "\n----\n");
            if (max < candidates[i].votes) {
                name = candidates[i].name;
                max = candidates[i].votes;
            }
        }
        return name;
    }
}
