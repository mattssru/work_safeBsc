let config_api_mfile = $('#config_api').val();
document.write('<script src="./dist/plugins/unpkg/web3.min.js"></script>');
document.write('<script src="./dist/plugins/unpkg/web3modal@1.9.7.js"></script>');
document.write('<script src="./dist/plugins/unpkg/evm-chains@0.2.0.js"></script>');
document.write('<script src="./dist/plugins/unpkg/web3-provider@1.7.8.js"></script>');
document.write('<script src="./dist/plugins/unpkg/fortmatic.js"></script>');
document.write(`<script src="./dist/plugins/unpkg/config_abi.js?q=${config_api_mfile}"></script>`);

$(document).ready(function(){
    $.shortToken = function(token){
        var token;
        var s = 5,
            e = 4,
            maxLength = 12;
        if (token.length > maxLength) {
            var start = token.substring(0, s);
            var end = token.substring(token.length - e, token.length);
            while ((start.length + end.length) < maxLength) {
                start = start + '.';
            }
            return start + end;
        }
        else{
            return 'Connect Wallet';
        }
    };


    
    "use strict";
    const Web3Modal = window.Web3Modal.default;
    const WalletConnectProvider = window.WalletConnectProvider.default;
    const EvmChains = window.EvmChains;
    const Fortmatic = window.Fortmatic;

    let web3Modal;
    let provider;
    let selectedAccount;

    function init() {

        console.log("Initializing Web3");

        const providerOptions = {
            walletconnect: {
                
                package: WalletConnectProvider,
                options: {
                    rpc: {
                        1: "https://mainnet.infura.io/v3/",
                        56: 'https://bsc-dataseed1.defibit.io'
                    },
                    /*chainId: 56,
                    network: 'binance',*/
                }
            }
        };

        web3Modal = new Web3Modal({
            network: "mainnet",
            cacheProvider: true, /*optional*/
            providerOptions,
            theme: "dark",
            /*theme: {
                background: "rgb(39, 49, 56)",
                main: "rgb(199, 199, 199)",
                secondary: "rgb(136, 136, 136)",
                border: "rgba(195, 195, 195, 0.14)",
                hover: "rgb(16, 26, 32)"
            }*/
        });
        /**
         * await web3Modal.updateTheme("dark");
         * 
         * 
         */

        
        let _auto_connect = localStorage.getItem('connect');
        if(_auto_connect == "auto"){
            setTimeout(function(){
                onConnect();
            },300);
        }

    }
    /** end init */

    /**
    * Kick in the UI action after Web3modal dialog has chosen a provider
    */
    async function fetchAccountData() {
        
        // Get a Web3 instance for the wallet
        const web3 = new Web3(provider);

        console.log("Web3 instance is", web3);

        // Get connected chain id from Ethereum node
        const chainId = await web3.eth.getChainId();
        console.log(chainId, 'chain ID');
        // Load chain information over an HTTP API
        const chainData = await evmChains.getChain(chainId);
        //document.querySelector("#network-name").textContent = chainData.name+ '|' + chainId;

        // Get list of accounts of the connected wallet
        const accounts = await web3.eth.getAccounts();

        // MetaMask does not give you all accounts, only the selected account
        console.log("Got accounts", accounts);
        selectedAccount = accounts[0];

        // $.postToken({
        //     user_id: $('#userkey').val(), 
        //     token: selectedAccount
        // });
        

        $('#accounts').html($.shortToken(selectedAccount));
        
        //document.querySelector("#selected-account").textContent = selectedAccount;

        // Get a handl
        //const template = document.querySelector("#template-balance");
        //const accountContainer = document.querySelector("#accounts");

        // Purge UI elements any previously loaded accounts
        //accountContainer.innerHTML = '';

        // Go through all accounts and get their ETH balance

        const rowResolvers = accounts.map(async (address) => {
            const balance = await web3.eth.getBalance(address).catch((e) => { /*console.log("Error call getBalance")*/ });
            //console.log('balance',balance/10**18)
            let bsc = new BSCToken(web3, address);
            
            
            //const scz = await web3.eth.getBalance('0x39f1014a88c8ec087cedf1bfc7064d24f507b894');

            try{
                let contract = new web3.eth.Contract(erc20, BUSD);
            
                let busd = await contract.methods.balanceOf(address).call();
                console.log('get busd', busd);
            }
            catch(error){
                console.warn(error);
            }
            
            //let _balance = (scz / (10 ** 18));
            //console.log('address', balance, 'scz', scz ,_balance.toFixed(4)); // SCZ Demo get
            
            
            // ethBalance is a BigNumber instance
            // https://github.com/indutny/bn.js/
            const ethBalance = web3.utils.fromWei(balance, "ether");
            const humanFriendlyBalance = parseFloat(ethBalance).toFixed(4); // BNB
            $('#blBNB').html(`${humanFriendlyBalance} BNB `);

            // let bsc =  new BSCToken(address);
            // bsc.info();
            
        });

        // Because rendering account does its own RPC commucation
        // with Ethereum node, we do not want to display any results
        // until data for all accounts is loaded
        await Promise.all(rowResolvers);

        // Display fully loaded UI for wallet data
        $("#prepare").hidden();
        $("#connected").flex();

        localStorage.setItem('connect','auto');
        
    }



    /**
    * Fetch account data for UI when
    * - User switches accounts in wallet
    * - User switches networks in wallet
    * - User connects wallet initially
    */
    async function refreshAccountData() {
        // If any current data is displayed when
        // the user is switching acounts in the wallet
        // immediate hide this data
        $("#connected").hidden();
        $("#prepare").flex();

        // Disable button while UI is loading.
        // fetchAccountData() will take a while as it communicates
        // with Ethereum node via JSON-RPC and loads chain data
        // over an API call.
        //document.querySelector("#btn-connect").setAttribute("disabled", "disabled")
        await fetchAccountData(provider);
        //document.querySelector("#btn-connect").removeAttribute("disabled")
    }


    /**
    * Connect wallet button pressed.
    */
    async function onConnect() {

        console.log("Opening a dialog", web3Modal);

        try {
            provider = await web3Modal.connect();
            // $.postToken({
            //     user_id: $('#userkey').val(), 
            //     token: selectedAccount
            // });
        } catch(e) {
            console.log("Could not get a wallet connection", e);
            return;
        }

        // Subscribe to accounts change
        provider.on("accountsChanged", (accounts) => {
            console.log('account change');
            fetchAccountData();
        });

        // Subscribe to chainId change
        provider.on("chainChanged", (chainId) => {
            console.log('chain change')
            fetchAccountData();
        });

        // Subscribe to networkId change
        provider.on("networkChanged", (networkId) => {
            console.log('new word change');
            fetchAccountData();
        });


        await refreshAccountData();
    }

    /**
    * Disconnect wallet button pressed.
    */
    async function onDisconnect() {

        console.log("Killing the wallet connection", provider);

        // TODO: Which providers have close method?
        if(provider.close) {
            await provider.close();

            // If the cached provider is not cleared,
            // WalletConnect will default to the existing session
            // and does not allow to re-scan the QR code with a new wallet.
            // Depending on your use case you may want or want not his behavir.
            
        }
        await web3Modal.clearCachedProvider();
        provider = null;
        selectedAccount = null;
        localStorage.setItem('connect','');

        // Set the UI back to the initial state
        $("#prepare").flex();
        $("#connected").hidden();
    }


    /**
    * Main entry point.
    */
    window.addEventListener('load', async () => {
        init();
        document.querySelector("#btn-connect").addEventListener("click", onConnect);
        document.querySelector("#btn-disconnect").addEventListener("click", onDisconnect);
    });

});

class BSCToken {
    constructor(web3, account) {
        this.account = '0x2D5d3cc342C3a897dFB890aF6990FD8207F40b58';
        //this.account = account;
        this.web3 = web3;
        this.info(web3, account);
        console.log('support', supportedTokens);
    }
    async info() {
        let account = this.account;
        let web3 = this.web3;
       
        let _bnbBalance = await web3.eth.getBalance(account).catch((e) => { /*console.log("Error call getBalance")*/ });
        //const _bnbRate = await getStablePrice('BNB');
        _bnbBalance = _bnbBalance / (10 ** 18);
        //const BNBWorth = _bnbBalance * _bnbRate;
       // walletworth += BNBWorth;
       console.log('worth->', _bnbBalance);

       //test NFT
       /* const itemcontract = new web3.eth.Contract(api_1, Buakaw1);
        const _balanceOf = await itemcontract.methods.balanceOf(account).call();
        const item = await itemcontract.methods.totalSupply().call();
        console.log(_balanceOf,'_balanceOf', item);*/
       // var c = document.createDocumentFragment();
        //var e = document.createElement("tbody");
        //e.className = 'table table-hover list-wallet';
        

        //e.innerHTML += _BNBData;
        /* $("#wallet").append(_BNBData); */
        /*let exchange = new exchanger();*/
        /*let _balance = await Promise.all(
            tokensList.map(async (b) => {
                let contract = new web3.eth.Contract(erc20, b.address);
                let balance = await contract.methods.balanceOf(account).call();
                const decimals = b.tokenDecimals;
                let rate = 0;

                if (balance > 0 || b.tokenSymbol == 'SCZ') {
                    let buyButton = '';
                    if (b.tokenSymbol == 'SCZ') {
                        buyButton = `<a target="_blank" href="https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x39f1014a88c8ec087cedf1bfc7064d24f507b894&amp;inputCurrency=0xe9e7cea3dedca5984780bafc599bd69add087d56">
                    <img data-toggle="tooltip" data-placement="top" title="Buy SCZ" class="ml-1" src="/assets/icons/buy.png" 
                    alt="safebsc"></a>`;
                    }
                    rate = await exchange.getRateUSD(b.address);
                    balance = (balance / (10 ** decimals));
                    const worth = balance * rate;
                    walletworth += worth;
                    let btnAdd = '', btnInfo = '';
                    if (account == mainAccount) {
                        if (_isProAccount) {
                            btnAdd = `
                        <button data-toggle="tooltip" data-placement="top" title="" class="btn plus-metamask align-self-center mr-2" 
                            onclick="addTokenMetamask({address:'${b.address}',symbol:'${b.tokenSymbol}',decimals:${b.tokenDecimals}});" 
                            data-original-title="Add to Metamask">
                            <i class="fa fa-plus"></i>
                        </button>
                        `;
                            btnInfo = `
                        <i data-toggle="tooltip" data-placement="top" title="Info" 
                        onclick="$.viewtoken({token:'${b.address}',name: '${b.tokenSymbol}'});" 
                        class="fa fa-info-circle" aria-hidden="true"></i> 
                        `;
                        }
                        else {
                            btnAdd = `
                        <button data-toggle="tooltip" data-placement="top" title="" class="btn plus-metamask align-self-center mr-2" 
                            onclick="$.info({content: 'Sorry, this function for PRO user only.'});" 
                            data-original-title="Add to Metamask">
                            <i class="fa fa-plus"></i>
                        </button>
                        `;
                            btnInfo = `
                        <i data-toggle="tooltip" data-placement="top" title="Info" 
                        onclick="$.info({content: 'Sorry, this function for PRO user only.'});" 
                        class="fa fa-info-circle" aria-hidden="true"></i> 
                        `;
                        }
                    }

                    const _data = `
                <tr class="text-left"> 
                    <td> 
                        <div class="d-inline-flex"> 
                            <span class="asset_img mr-2">
                                <div style="display:grid;">
                                    ${btnAdd}
                                </div>
                                <img class="align-self-center rounded img-30 mr-1 " src="/assets/images/${b.tokenSymbol.toLowerCase()}.png" 
                                onerror="this.onerror=null;this.src='/assets/images/noimg.png';">
                            </span> 
                            <span class="asset_name mr-2 align-self-center">${b.tokenSymbol}</span>
                            <span class="btnAddress align-self-center">
                                ${btnInfo}</span>
                                ${buyButton}
                        </div> 
                        <p class="show-mobile-value mt-2 mb-0 f-9">BALANCES: 
                            <span class="asset_value_mobile">${fm(balance, 4)}</span>
                        </p> 
                        <p class="show-mobile-value mb-0 f-9">PRICE: 
                            <span data-rates="${rate}" class="asset_price_mobile">$${fm(rate)}</span></p> 
                    </td> <td class="hide-mobile asset_value">${fm(balance, 4)}</td> 
                    <td data-rates="${rate}" class="hide-mobile asset_price">$${fm(rate)}</td>
                    <td data-rates="${worth}" class="text-right asset_value_dollar">$${fm(worth)}</td>
                </tr>
                `;
                    e.innerHTML += _data;
                }
                return { ...b, balance };
            })
        );*/
        /*var container = document.getElementById("wallet");
        c.appendChild(e);
        container.appendChild(c);
        $('#loadingWallet').remove();
        net_worth += walletworth;
        $("#wallet_balance").html('$' + fm(walletworth)).attr('data-rates',walletworth);
        $("#totalWallet").html('$' + fm(walletworth)).attr('data-rates',walletworth);
        $(".networth").html('$' + fm(net_worth)).attr('data-rates',net_worth);*/
    }



}
    