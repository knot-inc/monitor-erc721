# Assignment

- Create API that returns the completion of NFT(ERC721) transfer
- The provided NFT has multiple transfer transactions (See https://mumbai.polygonscan.com/address/0x51a1B628d9a2CFb76306FDccb39E56382A64482B)
- Return the transaction result by checking [Transfer Event](https://docs.openzeppelin.com/contracts/4.x/api/token/erc721#IERC721-Transfer-address-address-uint256-) using a transaction hash (e.g. [0x4a58bb65402fe0f24147f83e005de65ae02c92f9902d2767f58aec2121e6784c](https://mumbai.polygonscan.com/tx/0x4a58bb65402fe0f24147f83e005de65ae02c92f9902d2767f58aec2121e6784c))
- This NFT is on the polygon mumbai network. Use any provider to access the blockchain

### Expected request and response

```
// Transaction is completed
$ curl "http://localhost:8080/nft_result?tx=0x4a58bb65402fe0f24147f83e005de65ae02c92f9902d2767f58aec2121e6784c"
{"message":"tokenId: 24, to: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8"}

// Transaction hash is invalid

$ curl "http://localhost:8080/nft_result?tx=0x4a58bb65402fe0f24147f83e005de65ae02c92f9902d2767f58aecbad0000000"
Bad Request%                           

// Transaction hash is not from this Smart Contract
$ curl "http://localhost:8080/nft_result?tx=0x2e901329ae6e554937d2eef332f233329448dac91a4b0d283979de29fda841a7"
{"message":"not ERC721 transaction"}% 
```

### Hint
- Ethers.js provides a way to get a transaction receipt which holds the event data.
- Since events are in hex format on the blockchain, the result should be parsed using abi file under `src/abi/nftabi.json`
- Ethers.js is one recommended way to implement this but you can use any tools or library to achieve this API

# How to share the result

1. Clone this project locally
2. Remove .git by `rm -rf .git`
3. Run `git init`
4. Create your private repository on github
5. Push this project to your private reposity
6. Make a branch and add your update, then push your code
7. Invite https://github.com/tomo-noxx to your private project