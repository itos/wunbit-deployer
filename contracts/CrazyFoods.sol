// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "erc721a/contracts/ERC721A.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract CrazyFoods is ERC721A, Ownable {

    uint256 MAX_MINTS = 7500;
    uint256 MAX_SUPPLY = 7500;
    uint256 public mintRate = 0 ether;

    string public baseURI = "ipfs://bafybeigpkdiphsaonv6hi4w4tyzlaufxn6jrowm7zc3o6vakvwlp7kdopi/";

    constructor() ERC721A("Crazy Foods", "WUN") {}

    function mint(uint256 quantity) external payable {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        require(quantity + _numberMinted(msg.sender) <= MAX_MINTS, "Exceeded the limit");
        require(totalSupply() + quantity <= MAX_SUPPLY, "Not enough tokens left");
        require(msg.value >= (mintRate * quantity), "Not enough ether sent");
        _safeMint(msg.sender, quantity);
    }

    function withdraw() external payable onlyOwner {
        payable(owner()).transfer(address(this).balance);
    }

    function _baseURI() internal view override returns (string memory) {
        return baseURI;
    }

    function setMintRate(uint256 _mintRate) public onlyOwner {
        mintRate = _mintRate;
    }
}
