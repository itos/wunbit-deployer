// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "erc721a/contracts/ERC721A.sol";

contract CrazyFoods is ERC721A {
    constructor() ERC721A("Crazy Foods", "CZF") {}

    function mint(uint256 quantity) external payable {
        // `_mint`'s second argument now takes in a `quantity`, not a `tokenId`.
        _mint(msg.sender, quantity);
    }

    function _baseURI() override internal view virtual returns (string memory) {
        return "ipfs://bafybeigyp5lnot5anf5va4n6labhlsls6wotptc7qzl3ky6l3ui5p4q3ce/0.json";
    }
}
