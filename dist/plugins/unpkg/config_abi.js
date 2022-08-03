let tokenSCZ = '0x39f1014a88c8ec087cedf1bfc7064d24f507b894';
let BUSD = '0xe9e7cea3dedca5984780bafc599bd69add087d56';

const erc721 = [{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"mint","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];
const erc20 = [{ "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "fromDelegate", "type": "address" }, { "indexed": true, "internalType": "address", "name": "toDelegate", "type": "address" }], "name": "DelegateChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegate", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "previousBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "DelegateVotesChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "inputs": [], "name": "DELEGATION_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "DOMAIN_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint32", "name": "", "type": "uint32" }], "name": "checkpoints", "outputs": [{ "internalType": "uint32", "name": "fromBlock", "type": "uint32" }, { "internalType": "uint256", "name": "votes", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }], "name": "delegate", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "delegateBySig", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "delegator", "type": "address" }], "name": "delegates", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getCurrentVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "getOwner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPriorVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "mint", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "numCheckpoints", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "renounceOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "stateMutability": "view", "type": "function" }, { "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "stateMutability": "view", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "sender", "type": "address" }, { "internalType": "address", "name": "recipient", "type": "address" }, { "internalType": "uint256", "name": "amount", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "stateMutability": "nonpayable", "type": "function" }, { "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "stateMutability": "nonpayable", "type": "function" }];
// The minimum ABI to get ERC20 Token balance
let minABI = [
    // balanceOf
    {
    "constant":true,
    "inputs":[{"name":"_owner","type":"address"}],
    "name":"balanceOf",
    "outputs":[{"name":"balance","type":"uint256"}],
    "type":"function"
    },
    // decimals
    {
    "constant":true,
    "inputs":[],
    "name":"decimals",
    "outputs":[{"name":"","type":"uint8"}],
    "type":"function"
    }
];

/** NFT 1 */
const Buakaw1 = '0x9F1CC70b11f4129d042d0037c2066d12E16d9a52';
const api_1 = [{"inputs":[{"internalType":"uint256","name":"collectionSize_","type":"uint256"},{"internalType":"uint256","name":"amountForMarketing_","type":"uint256"},{"internalType":"address","name":"vaultAddress_","type":"address"},{"internalType":"address","name":"preMinteeAddress_","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"ApprovalCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"ApprovalQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"ApprovalToCurrentOwner","type":"error"},{"inputs":[],"name":"ApproveToCaller","type":"error"},{"inputs":[],"name":"BalanceQueryForZeroAddress","type":"error"},{"inputs":[],"name":"MintToZeroAddress","type":"error"},{"inputs":[],"name":"MintZeroQuantity","type":"error"},{"inputs":[],"name":"OwnerQueryForNonexistentToken","type":"error"},{"inputs":[],"name":"TransferCallerNotOwnerNorApproved","type":"error"},{"inputs":[],"name":"TransferFromIncorrectOwner","type":"error"},{"inputs":[],"name":"TransferToNonERC721ReceiverImplementer","type":"error"},{"inputs":[],"name":"TransferToZeroAddress","type":"error"},{"inputs":[],"name":"URIQueryForNonexistentToken","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"roundIndex","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"quantity","type":"uint256"},{"indexed":true,"internalType":"address","name":"minter","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalMinted","type":"uint256"}],"name":"WhitelistMint","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"blocktime","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"sender","type":"address"}],"name":"WithdrawMoney","type":"event"},{"inputs":[],"name":"amountForMarketing","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"collectionSize","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"favourMinterAllocate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"foundingMinterAllocate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getOwnershipData","outputs":[{"components":[{"internalType":"address","name":"addr","type":"address"},{"internalType":"uint64","name":"startTimestamp","type":"uint64"},{"internalType":"bool","name":"burned","type":"bool"}],"internalType":"struct ERC721A.TokenOwnership","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundIndex","type":"uint256"}],"name":"getRoundSaleconfig","outputs":[{"components":[{"internalType":"uint32","name":"roundSaleStartTime","type":"uint32"},{"internalType":"uint32","name":"roundSaleEndTime","type":"uint32"},{"internalType":"uint64","name":"roundPrice","type":"uint64"},{"internalType":"string","name":"roundSaleKey","type":"string"},{"internalType":"uint256","name":"summaryRoundSale","type":"uint256"},{"internalType":"uint32","name":"maxPerAddressDuringMint","type":"uint32"},{"internalType":"uint32","name":"maxPerRound","type":"uint32"},{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"internalType":"struct Buakaw1.SaleConfig","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundPriceWei","type":"uint256"},{"internalType":"uint256","name":"roundSaleStartTime","type":"uint256"},{"internalType":"uint256","name":"roundSaleEndTime","type":"uint256"},{"internalType":"string","name":"roundSaleKey","type":"string"}],"name":"isRoundSaleOn","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"numberMinted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"quantity","type":"uint256"}],"name":"preMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"preMinteeAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundIndex","type":"uint256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"string","name":"callerRoundSaleKey","type":"string"}],"name":"publicMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"publicMinterAllocate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"saleConfigs","outputs":[{"internalType":"uint32","name":"roundSaleStartTime","type":"uint32"},{"internalType":"uint32","name":"roundSaleEndTime","type":"uint32"},{"internalType":"uint64","name":"roundPrice","type":"uint64"},{"internalType":"string","name":"roundSaleKey","type":"string"},{"internalType":"uint256","name":"summaryRoundSale","type":"uint256"},{"internalType":"uint32","name":"maxPerAddressDuringMint","type":"uint32"},{"internalType":"uint32","name":"maxPerRound","type":"uint32"},{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"},{"internalType":"string","name":"key","type":"string"}],"name":"setRoundSaleKey","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint32","name":"_index","type":"uint32"},{"internalType":"uint32","name":"_roundSaleStartTime","type":"uint32"},{"internalType":"uint32","name":"_roundSaleEndTime","type":"uint32"},{"internalType":"uint64","name":"_roundPrice","type":"uint64"},{"internalType":"uint32","name":"_maxPerAddressDuringMint","type":"uint32"},{"internalType":"uint32","name":"_maxPerRound","type":"uint32"},{"internalType":"bytes32","name":"_merkleRoot","type":"bytes32"}],"name":"setSaleConfig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"vaultAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"roundIndex","type":"uint256"},{"internalType":"uint256","name":"quantity","type":"uint256"},{"internalType":"bytes32[]","name":"_merkleProof","type":"bytes32[]"},{"internalType":"string","name":"whitelistSaleKey","type":"string"}],"name":"whitelistMint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whitelistMinterAllocate","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdrawMoney","outputs":[],"stateMutability":"nonpayable","type":"function"}];



/** END NFT config */
/** token config */
const supportedTokens = [
    {
        "id": "0001",
        "address": "0x8f0528ce5ef7b51152a59745befdd91d97091d2f",
        "name": "ALPACA",
        "tokenDecimals": "18",
        "tokenSymbol": "ALPACA"
    },
    {
        "id": "0002",
        "address": "0x2170ed0880ac9a755fd29b2688956bd959f933f8",
        "name": "ETH",
        "tokenDecimals": "18",
        "tokenSymbol": "ETH"
    },
    {
        "id": "0003",
        "address": "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c",
        "name": "WBNB",
        "tokenDecimals": "18",
        "tokenSymbol": "WBNB"
    },
    {
        "id": "0004",
        "address": "0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82",
        "name": "CAKE",
        "tokenDecimals": "18",
        "tokenSymbol": "Cake"
    },
    {
        "id": "0005",
        "address": "0x4fcfa6cc8914ab455b5b33df916d90bfe70b6ab1",
        "name": "SLME",
        "tokenDecimals": "18",
        "tokenSymbol": "SLME"
    },
    {
        "id": "0006",
        "address": "0xf952fc3ca7325cc27d15885d37117676d25bfda6",
        "name": "EGG",
        "tokenDecimals": "18",
        "tokenSymbol": "EGG"
    },
    {
        "id": "0007",
        "address": "0x8148b58393f00b4b379cbeb8018d3445e0b636a0",
        "name": "SAIL",
        "tokenDecimals": "18",
        "tokenSymbol": "SAIL"
    },
    {
        "id": "0008",
        "address": "0xa1faa113cbe53436df28ff0aee54275c13b40975",
        "name": "ALPHA",
        "tokenDecimals": "18",
        "tokenSymbol": "ALPHA"
    },
    {
        "id": "0009",
        "address": "0x692cdf8e8f33a8e4b07d1c8ce1763fa70db3a4e4",
        "name": "BTESTA",
        "tokenDecimals": "18",
        "tokenSymbol": "BTESTA"
    },
    {
        "id": "0010",
        "address": "0xe0e514c71282b6f4e823703a39374cf58dc3ea4f",
        "name": "BELT",
        "tokenDecimals": "18",
        "tokenSymbol": "BELT"
    },
    {
        "id": "0011",
        "address": "0xa184088a740c695e156f91f5cc086a06bb78b827",
        "name": "AUTO",
        "tokenDecimals": "18",
        "tokenSymbol": "AUTO"
    },
    {
        "id": "0012",
        "address": "0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51",
        "name": "BUNNY",
        "tokenDecimals": "18",
        "tokenSymbol": "BUNNY"
    },
    {
        "id": "0013",
        "address": "0xCa3F508B8e4Dd382eE878A314789373D80A5190A",
        "name": "BIFI",
        "tokenDecimals": "18",
        "tokenSymbol": "BIFI"
    },
    {
        "id": "0014",
        "address": "0x0feadcc3824e7f3c12f40e324a60c23ca51627fc",
        "name": "WAD",
        "tokenDecimals": "18",
        "tokenSymbol": "Warden"
    },
    {
        "id": "0015",
        "address": "0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c",
        "name": "BTCB",
        "tokenDecimals": "18",
        "tokenSymbol": "BTCB"
    },
    {
        "id": "0016",
        "address": "0x55d398326f99059ff775485246999027b3197955",
        "name": "USDT",
        "tokenDecimals": "18",
        "tokenSymbol": "USDT"
    },
    {
        "id": "0017",
        "address": "0x6f695bd5ffd25149176629f8491a5099426ce7a7",
        "name": "sALPACA",
        "tokenDecimals": "18",
        "tokenSymbol": "sALPACA"
    },
    {
        "id": "0018",
        "address": "0x4bd17003473389a42daf6a0a729f6fdb328bbbd7",
        "name": "VAI",
        "tokenDecimals": "18",
        "tokenSymbol": "VAI"
    },
    {
        "id": "0019",
        "address": "0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d",
        "name": "USDC",
        "tokenDecimals": "18",
        "tokenSymbol": "USDC"
    },
    {
        "id": "0020",
        "address": "0xcf6bb5389c92bdda8a3747ddb454cb7a64626c63",
        "name": "XVS",
        "tokenDecimals": "18",
        "tokenSymbol": "XVS"
    },
    {
        "id": "0021",
        "address": "0x2e452073152f7c50379e59214c9d96215a127d85",
        "name": "NB",
        "tokenDecimals": "18",
        "tokenSymbol": "NB"
    },
    {
        "id": "0022",
        "address": "0x67ee3cb086f8a16f34bee3ca72fad36f7db929e2",
        "name": "DODO",
        "tokenDecimals": "18",
        "tokenSymbol": "DODO"
    },
    {
        "id": "0023",
        "address": "0xd7d069493685a581d27824fc46eda46b7efc0063",
        "name": "ibBNB",
        "tokenDecimals": "18",
        "tokenSymbol": "ibBNB"
    },
    {
        "id": "0024",
        "address": "0x844FA82f1E54824655470970F7004Dd90546bB28",
        "name": "DOP",
        "tokenDecimals": "18",
        "tokenSymbol": "DOP"
    },
    {
        "id": "0025",
        "address": "0x603c7f932ed1fc6575303d8fb018fdcbb0f39a95",
        "name": "BANANA",
        "tokenDecimals": "18",
        "tokenSymbol": "BANANA"
    },
    {
        "id": "0026",
        "address": "0x070a9867Ea49CE7AFc4505817204860e823489fE",
        "name": "SIX",
        "tokenDecimals": "18",
        "tokenSymbol": "SIX"
    },
    {
        "id": "0027",
        "address": "0x0f02b1f5af54e04fb6dd6550f009ac2429c4e30d",
        "name": "FINIX",
        "tokenDecimals": "18",
        "tokenSymbol": "FINIX"
    },
    {
        "id": "0028",
        "address": "0x57067a6bd75c0e95a6a5f158455926e43e79beb0",
        "name": "BLZD",
        "tokenDecimals": "18",
        "tokenSymbol": "BLZD"
    },
    {
        "id": "0029",
        "address": "0x0491648c910ad2c1afaab733faf71d30313df7fc",
        "name": "JDI",
        "tokenDecimals": "18",
        "tokenSymbol": "JDI"
    },
    {
        "id": "0030",
        "address": "0x790be81c3ca0e53974be2688cdb954732c9862e1",
        "name": "BREW",
        "tokenDecimals": "18",
        "tokenSymbol": "BREW"
    },
    {
        "id": "0031",
        "address": "0xa7f552078dcc247c2684336020c03648500c6d9f",
        "name": "EPS",
        "tokenDecimals": "18",
        "tokenSymbol": "EPS"
    },
    {
        "id": "0032",
        "address": "0xe561479bebee0e606c19bb1973fc4761613e3c42",
        "name": "MEOWTH",
        "tokenDecimals": "18",
        "tokenSymbol": "MEOWTH"
    },
    {
        "id": "0033",
        "address": "0x4f47a0d15c1e53f3d94c069c7d16977c29f9cb6b",
        "name": "RAMEN",
        "tokenDecimals": "18",
        "tokenSymbol": "Ramen"
    },
    {
        "id": "0034",
        "address": "0x42F6f551ae042cBe50C739158b4f0CAC0Edb9096",
        "name": "NRV",
        "tokenDecimals": "18",
        "tokenSymbol": "NRV"
    },
    {
        "id": "0035",
        "address": "0xcc2e12a9b5b75360c6fbf23b584c275d52cddb0e",
        "name": "CROW",
        "tokenDecimals": "18",
        "tokenSymbol": "CROW"
    },
    {
        "id": "0036",
        "address": "0x0abd3e3502c15ec252f90f64341cba74a24fba06",
        "name": "SPACE",
        "tokenDecimals": "18",
        "tokenSymbol": "SPACE"
    },
    {
        "id": "0037",
        "address": "0xf8e026dc4c0860771f691ecffbbdfe2fa51c77cf",
        "name": "BGOV",
        "tokenDecimals": "18",
        "tokenSymbol": "BGOV"
    },
    {
        "id": "0038",
        "address": "0xe3ba88c38d2789fe58465020cc0fb60b70c10d32",
        "name": "KIND",
        "tokenDecimals": "8",
        "tokenSymbol": "KIND"
    },
    {
        "id": "0039",
        "address": "0xc5a49b4cbe004b6fd55b30ba1de6ac360ff9765d",
        "name": "SWAMP",
        "tokenDecimals": "18",
        "tokenSymbol": "SWAMP"
    },
    {
        "id": "0040",
        "address": "0xceb2f5e9c7f2d3bcd12a7560d73c56f3396af3f9",
        "name": "DBALL",
        "tokenDecimals": "18",
        "tokenSymbol": "DBALL"
    },
    {
        "id": "0041",
        "address": "0x9c65ab58d8d978db963e63f2bfb7121627e3a739",
        "name": "MDX",
        "tokenDecimals": "18",
        "tokenSymbol": "MDX"
    },
    {
        "id": "0042",
        "address": "0x52ce071bd9b1c4b00a0b92d298c512478cad67e8",
        "name": "COMP",
        "tokenDecimals": "18",
        "tokenSymbol": "COMP"
    },
    {
        "id": "0043",
        "address": "0x7083609fce4d1d8dc0c979aab8c869ea2c873402",
        "name": "DOT",
        "tokenDecimals": "18",
        "tokenSymbol": "DOT"
    },
    {
        "id": "0044",
        "address": "0x762539b45a1dcce3d36d080f74d1aed37844b878",
        "name": "LINA",
        "tokenDecimals": "18",
        "tokenSymbol": "LINA"
    },
    {
        "id": "0045",
        "address": "0xf8a0bf9cf54bb92f17374d9e9a321e6a111a51bd",
        "name": "LINK",
        "tokenDecimals": "18",
        "tokenSymbol": "LINK"
    },
    {
        "id": "0046",
        "address": "0x4338665cbb7b2485a8855a139b75d5e34ab0db94",
        "name": "LTC",
        "tokenDecimals": "18",
        "tokenSymbol": "LTC"
    },
    {
        "id": "0047",
        "address": "0x8519ea49c997f50ceffa444d240fb655e89248aa",
        "name": "RAMP",
        "tokenDecimals": "18",
        "tokenSymbol": "RAMP"
    },
    {
        "id": "0048",
        "address": "0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e",
        "name": "REEF",
        "tokenDecimals": "18",
        "tokenSymbol": "REEF"
    },
    {
        "id": "0049",
        "address": "0x111111111117dc0aa78b770fa6a738034120c302",
        "name": "1INCH",
        "tokenDecimals": "18",
        "tokenSymbol": "1INCH"
    },
    {
        "id": "0050",
        "address": "0x250632378e573c6be1ac2f97fcdf00515d0aa91b",
        "name": "BETH",
        "tokenDecimals": "18",
        "tokenSymbol": "BETH"
    },
    {
        "id": "0051",
        "address": "0x005efe93a04e95034baaa2cfc2e53bcb49cd40d2",
        "name": "CHORD",
        "tokenDecimals": "18",
        "tokenSymbol": "CHORDS"
    },
    {
        "id": "0052",
        "address": "0xa2d53c89891bc5cfdee1e38d3983f64491163b43",
        "name": "EXPER",
        "tokenDecimals": "18",
        "tokenSymbol": "EXPER"
    },
    {
        "id": "0053",
        "address": "0xb27adaffb9fea1801459a1a81b17218288c097cc",
        "name": "POOCOIN",
        "tokenDecimals": "8",
        "tokenSymbol": "POOCOIN"
    },
    {
        "id": "0054",
        "address": "0x2b3aa086d2804a302fbc58d0e62de9c73146f6b1",
        "name": "POOLT",
        "tokenDecimals": "18",
        "tokenSymbol": "POOLT"
    },
    {
        "id": "0055",
        "address": "0x947950bcc74888a40ffa2593c5798f11fc9124c4",
        "name": "SUSHI",
        "tokenDecimals": "18",
        "tokenSymbol": "SUSHI"
    },
    {
        "id": "0056",
        "address": "0x2ff3d0f6990a40261c66e1ff2017acbc282eb6d0",
        "name": "SXP",
        "tokenDecimals": "8",
        "tokenSymbol": "vSXP"
    },
    {
        "id": "0057",
        "address": "0x7a9f28eb62c791422aa23ceae1da9c847cbec9b0",
        "name": "WATCH",
        "tokenDecimals": "18",
        "tokenSymbol": "WATCH"
    },
    {
        "id": "0058",
        "address": "0x547cbe0f0c25085e7015aa6939b28402eb0ccdac",
        "name": "XBN",
        "tokenDecimals": "18",
        "tokenSymbol": "XBN"
    },
    {
        "id": "0059",
        "address": "0x32dffc3fe8e3ef3571bf8a72c0d0015c5373f41d",
        "name": "JULB",
        "tokenDecimals": "18",
        "tokenSymbol": "JULb"
    },
    {
        "id": "0060",
        "address": "0x1c545e9943cfd1b41e60a7917465911fa00fc28c",
        "name": "POLAR",
        "tokenDecimals": "18",
        "tokenSymbol": "POLAR"
    },
    {
        "id": "0061",
        "address": "0x2090c8295769791ab7a3cf1cc6e0aa19f35e441a",
        "name": "FUEL",
        "tokenDecimals": "18",
        "tokenSymbol": "Fuel"
    },
    {
        "id": "0062",
        "address": "0x787732f27d18495494cea3792ed7946bbcff8db2",
        "name": "MASH",
        "tokenDecimals": "18",
        "tokenSymbol": "MASH"
    },
    {
        "id": "0063",
        "address": "0xe9e7cea3dedca5984780bafc599bd69add087d56",
        "name": "BUSD",
        "tokenDecimals": "18",
        "tokenSymbol": "BUSD"
    },
    {
        "id": "0064",
        "address": "0xba26397cdff25f0d26e815d218ef3c77609ae7f1",
        "name": "LYPTUS",
        "tokenDecimals": "18",
        "tokenSymbol": "LYPTUS"
    },
    {
        "id": "0065",
        "address": "0x2849b1aE7E04A3D9Bc288673A92477CF63F28aF4",
        "name": "SALT",
        "tokenDecimals": "18",
        "tokenSymbol": "SALT"
    },
    {
        "id": "0066",
        "address": "0x7Cc46141AB1057b1928de5Ad5Ee78Bb37eFC4868",
        "name": "TNDR",
        "tokenDecimals": "18",
        "tokenSymbol": "TNDR"
    },
    {
        "id": "0067",
        "address": "0xdff88a0a43271344b760b58a35076bf05524195c",
        "name": "PHB",
        "tokenDecimals": "18",
        "tokenSymbol": "PHB"
    },
    {
        "id": "0068",
        "address": "0xc0eff7749b125444953ef89682201fb8c6a917cd",
        "name": "HZN",
        "tokenDecimals": "18",
        "tokenSymbol": "HZN"
    },
    {
        "id": "0069",
        "address": "0x6f8fe12cc34398d15b7d5a5ba933e550da1d099f",
        "name": "MIST",
        "tokenDecimals": "18",
        "tokenSymbol": "MIST"
    },
    {
        "id": "0070",
        "address": "0x49207baa3a7332f0716788aa57b088d499bcc104",
        "name": "AURUM",
        "tokenDecimals": "18",
        "tokenSymbol": "AURUM"
    },
    {
        "id": "0071",
        "address": "0xacb2d47827c9813ae26de80965845d80935afd0b",
        "name": "MCRN",
        "tokenDecimals": "18",
        "tokenSymbol": "MCRN"
    },
    {
        "id": "0072",
        "address": "0x7b0409a3a3f79baa284035d48e1dfd581d7d7654",
        "name": "RUPEE",
        "tokenDecimals": "18",
        "tokenSymbol": "RUPEE"
    },
    {
        "id": "0073",
        "address": "0xa8c2b8eec3d368c0253ad3dae65a5f2bbb89c929",
        "name": "CTK",
        "tokenDecimals": "6",
        "tokenSymbol": "CTK"
    },
    {
        "id": "0074",
        "address": "0xb86abcb37c3a4b64f74f59301aff131a1becc787",
        "name": "ZIL",
        "tokenDecimals": "12",
        "tokenSymbol": "ZIL"
    },
    {
        "id": "0075",
        "address": "0x39f1014a88c8ec087cedf1bfc7064d24f507b894",
        "name": "SCZ",
        "tokenDecimals": "18",
        "tokenSymbol": "SCZ"
    },
    {
        "id": "0076",
        "address": "0x7ab6eedd9443e0e98e5ea93667ca5b250b8dda51",
        "name": "wGOLD",
        "tokenDecimals": "18",
        "tokenSymbol": "wGOLD"
    },
    {
        "id": "0077",
        "address": "0x39cab1ddafda34b9202f5a41f71b15d2f3eba2ac",
        "name": "OctaX",
        "tokenDecimals": "18",
        "tokenSymbol": "OCTAX"
    },
    {
        "id": "0078",
        "address": "0xa9c41a46a6b3531d28d5c32f6633dd2ff05dfb90",
        "name": "WEX",
        "tokenDecimals": "18",
        "tokenSymbol": "WEX"
    },
    {
        "id": "0079",
        "address": "0xb1b17dff66d75b29d34f0bf8622c406d8219b507",
        "name": "Crudeoil",
        "tokenDecimals": "18",
        "tokenSymbol": "OIL"
    },
    {
        "id": "0080",
        "address": "0x002A5298061833C233B19Fdd01FD2405F6249C7A",
        "name": "CHECK",
        "tokenDecimals": "18",
        "tokenSymbol": "CHECK"
    },
    {
        "id": "0081",
        "address": "0x1f546ad641b56b86fd9dceac473d1c7a357276b7",
        "name": "PANTHER",
        "tokenDecimals": "18",
        "tokenSymbol": "PANTHER"
    },
    {
        "id": "0082",
        "address": "0x4a3524936Db5C310d852266033589D3f6F30BA5d",
        "name": "JAGUAR",
        "tokenDecimals": "18",
        "tokenSymbol": "JAGUAR"
    },
    {
        "id": "0083",
        "address": "0x69b8eC5DF0d8E6026Ac6B48E7A6976B8f176b94b",
        "name": "Sukiyaki",
        "tokenDecimals": "18",
        "tokenSymbol": "Suki"
    },
    {
        "id": "0084",
        "address": "0x437dbc6ade5c2aed52bf5ccb54bf1b87a53cc436",
        "name": "PLUOTOZ",
        "tokenDecimals": "18",
        "tokenSymbol": "PTZ"
    },
    {
        "id": "0085",
        "address": "0xc350caa89eb963d5d6b964324a0a7736d8d65533",
        "name": "INFINITEE",
        "tokenDecimals": "18",
        "tokenSymbol": "INFTEE"
    },
    {
        "id": "0086",
        "address": "0x7762a14082ab475c06d3868b385e46ae27017231",
        "name": "PRIVACY Token",
        "tokenDecimals": "18",
        "tokenSymbol": "PRV"
    },
    {
        "id": "0087",
        "address": "0x42d1B21EaBE04D308148eA9Ab90Be674b64b4eef",
        "name": "ZFARM Token",
        "tokenDecimals": "18",
        "tokenSymbol": "ZFARM"
    },
    {
        "id": "0088",
        "address": "0xFCb8a4B1a0B645e08064e05B98E9cc6f48D2aa57",
        "name": "ZMINE Token",
        "tokenDecimals": "18",
        "tokenSymbol": "ZMN"
    },
    {
        "id": "0089",
        "address": "0x3806aae953a3a873d02595f76c7698a57d4c7a57",
        "name": "TWIN Token",
        "tokenDecimals": "18",
        "tokenSymbol": "TWIN"
    },
    {
        "id": "0090",
        "address": "0xff54da7caf3bc3d34664891fc8f3c9b6dea6c7a5",
        "name": "DOLLY",
        "tokenDecimals": "18",
        "tokenSymbol": "DOLLY"
    },
    {
        "id": "0091",
        "address": "0x0314e5a39806C30D67B869EE1bCDABee7e08dE74",
        "name": "DBM",
        "tokenDecimals": "9",
        "tokenSymbol": "DBM"
    },
    {
        "id": "0092",
        "address": "0xA7bD090bC58e663388Be63d5E8a7b683f5A3d4FC",
        "name": "DMC",
        "tokenDecimals": "18",
        "tokenSymbol": "DMC"
    },
    {
        "id": "0093",
        "address": "0x1CbDdf83De068464Eba3a4E319bd3197a7EEa12c",
        "name": "SEEDER",
        "tokenDecimals": "18",
        "tokenSymbol": "LEAF"
    },
    {
        "id": "0094",
        "address": "0x99ca242f20424a6565cc17a409e557fa95e25bd7",
        "name": "ALESWAP",
        "tokenDecimals": "18",
        "tokenSymbol": "ALE"
    },
    {
        "id": "0095",
        "address": "0x965f527d9159dce6288a2219db51fc6eef120dd1",
        "name": "BISWAP",
        "tokenDecimals": "18",
        "tokenSymbol": "BSW"
    },
    {
        "id": "0096",
        "address": "0x084bb94e93891d74579b54ab63ed24c4ef9cd5ef",
        "name": "COUPON",
        "tokenDecimals": "18",
        "tokenSymbol": "COUPON"
    },
    {
        "id": "0097",
        "address": "0x73280e2951785f17acc6cb2a1d0c4d65031d54b3",
        "name": "FAT ANIMAL",
        "tokenDecimals": "18",
        "tokenSymbol": "FAT"
    },
    {
        "id": "0098",
        "address": "0x3bc5798416c1122BcFd7cb0e055d50061F23850d",
        "name": "COINSWAP",
        "tokenDecimals": "18",
        "tokenSymbol": "CSS"
    },
    {
        "id": "0099",
        "address": "0x2afAB709fEAC97e2263BEd78d94aC2951705dB50",
        "name": "GOONG",
        "tokenDecimals": "18",
        "tokenSymbol": "GOONG"
    },
    {
        "id": "0100",
        "address": "0x30dfdefe4b5c2ef1bcb82fd1d6e62f9a8580a05a",
        "name": "Afi",
        "tokenDecimals": "18",
        "tokenSymbol": "AFI"
    },
    {
        "id": "0101",
        "address": "0xf7f00edb13e056df908c03ab8282071c1879d235",
        "name": "PuppySwap",
        "tokenDecimals": "18",
        "tokenSymbol": "PUPPY"
    },
    {
        "id": "0102",
        "address": "0xd5779f2f9d7d239228e4e78bc78f50768661a081",
        "name": "Robinhood",
        "tokenDecimals": "18",
        "tokenSymbol": "RBH"
    },
    {
        "id": "0103",
        "address": "0xb2dd25873fdf07cf9bc45924e581511abfbba502",
        "name": "StakeEarth",
        "tokenDecimals": "18",
        "tokenSymbol": "STAKEEARTH"
    },
    {
        "id": "0104",
        "address": "0x1137d5836ef0e0ed9acc74aef8ffe2eaf81120b5",
        "name": "NeverSwap",
        "tokenDecimals": "18",
        "tokenSymbol": "NEVER"
    },
    {
        "id": "0105",
        "address": "0xe363096e780fb8675966b3ffca88bedd62b838fa",
        "name": "TUKTUK",
        "tokenDecimals": "18",
        "tokenSymbol": "TUK"
    },
    {
        "id": "0106",
        "address": "0x10638a494b05d43af25235a34ed8fd256b529d05",
        "name": "SHOT",
        "tokenDecimals": "18",
        "tokenSymbol": "SHOT"
    },
    {
        "id": "0107",
        "address": "0xf370d005961e183ea248a4bb6827e4225a5036d4",
        "name": "Succubi",
        "tokenDecimals": "18",
        "tokenSymbol": "CUBI"
    },
    {
        "id": "0108",
        "address": "0x074f3bc46C0C22f2317b020Dc5141D31a2d648b5",
        "name": "Nukdontree",
        "tokenDecimals": "18",
        "tokenSymbol": "NDT"
    },
    {
        "id": "0109",
        "address": "0x3379a0bdf5a5cb566127c421782686ba0f80490a",
        "name": "MVP Token",
        "tokenDecimals": "18",
        "tokenSymbol": "MVP"
    },
    {
        "id": "0110",
        "address": "0x715D400F88C167884bbCc41C5FeA407ed4D2f8A0",
        "name": "Axie Infinity",
        "tokenDecimals": "18",
        "tokenSymbol": "AXS"
    },
    {
        "id": "0111",
        "address": "0x802a183ac9f6b082716dfee55432ed0c04acb49a",
        "name": "DOPX",
        "tokenDecimals": "18",
        "tokenSymbol": "DOPX"
    },
    {
        "id": "0112",
        "address": "0x940ff63e82d15fb47371bfe5a4ed7d7d183de1a5",
        "name": "KUSD",
        "tokenDecimals": "18",
        "tokenSymbol": "KUSD"
    },
    {
        "id": "0113",
        "address": "0x7039Eb99215B345588B94BC8830E186C457a8fB3",
        "name": "Wrapped AFI",
        "tokenDecimals": "18",
        "tokenSymbol": "wAFI"
    },
    {
        "id": "0114",
        "address": "0x402bf56d4500f7bc86771390925ff8d059d29842",
        "name": "Ocean",
        "tokenDecimals": "18",
        "tokenSymbol": "CEA"
    },
    {
        "id": "0115",
        "address": "0xc2d59082aca32ff289da772756a01120fa9f6346",
        "name": "Mr.FOX TOKEN",
        "tokenDecimals": "18",
        "tokenSymbol": "FOX"
    },
    {
        "id": "0116",
        "address": "0x95d07a6b1dd22cfc6f775e9574e4374995e7ef89",
        "name": "ATHENAS",
        "tokenDecimals": "18",
        "tokenSymbol": "ATHENASV2"
    },
    {
        "id": "0117",
        "address": "0xc3d912863152e1afc935ad0d42d469e7c6b05b77",
        "name": "LUCKY LION",
        "tokenDecimals": "18",
        "tokenSymbol": "LUCKY"
    },
    {
        "id": "0118",
        "address": "0xa269A9942086f5F87930499dC8317ccC9dF2b6CB",
        "name": "LATTE SWAP",
        "tokenDecimals": "18",
        "tokenSymbol": "LATTE"
    },
    {
        "id": "0119",
        "address": "0xbba64dc871be2fe2114338442dd3e45893310dce",
        "name": "METAVERSE GOV",
        "tokenDecimals": "18",
        "tokenSymbol": "META"
    },
    {
        "id": "0120",
        "address": "0x270178366a592bA598C2e9d2971DA65f7bAa7C86",
        "name": "KillSwicth V2",
        "tokenDecimals": "18",
        "tokenSymbol": "KSW"
    }
    
];