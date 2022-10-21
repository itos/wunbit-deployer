// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "erc721a/contracts/ERC721A.sol";

contract MyNFT is ERC721A {
    constructor() ERC721A("MyNFT", "MNFT") {}

    function mint(uint256 quantity) external payable {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        _mint(msg.sender, quantity);
    }

    function _baseURI() override internal view virtual returns (string memory) {
        return "ipfs://bafybeigpkdiphsaonv6hi4w4tyzlaufxn6jrowm7zc3o6vakvwlp7kdopi/";
    }
}
