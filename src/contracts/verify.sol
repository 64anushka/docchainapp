// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

contract ImageVerifier {
    
    address public admin;
    
    mapping(address => bool) public exporters;
    mapping(bytes32 => bool) public images;
    
    constructor() {
        admin = msg.sender;
    }
    
    modifier onlyAdmin() {
        require(msg.sender == admin, "Only admin can perform this action");
        _;
    }
    
    modifier onlyExporter() {
        require(exporters[msg.sender] == true, "Only exporters can perform this action");
        _;
    }
    
    function addExporter(address _exporter) public onlyAdmin {
        exporters[_exporter] = true;
    }
    
}