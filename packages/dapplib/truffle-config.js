require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture cart forget security trap birth screen quality gesture hero flock top'; 
let testAccounts = [
"0x7227e955bc8e27535251969dc008f04b084eaeda44aeaecca834aaa45aa415d3",
"0x19a355459dc3784da8a86fa07bfaef62eb9c7128833e428bce521df0b7f568f7",
"0xf579de09a5fb98a7df22cd97f81e30016fff93ba29d2aa99be37cbeee03a0537",
"0xe3501ae14ede7db77326bcc6b8ef6532cd44f6b09a26e50f7537a45fbb24718b",
"0x3ca18eaf376533382433fb1f8ead8b7e9fa7cfa42b4cd37759fabd1707223be5",
"0x697af26107f21e1a2f834eaabb129ee205761b10cfeba15613d5cac4da920e24",
"0xea7bbaebf16133c3e33bc522d9eb13a1b8f9dcd8d08720a62888bf2d706fbf83",
"0x9e671748d07cb7e2c3f49ffe6d2735923ab7c4bafbe6f3de7bdebeda1177a76d",
"0xdec32a6b01d23c9be3dfd49ba76fb8cbbb4bd0cfa9a88a97561b9c72ee3d20cd",
"0x70ba20332524bdf74da6309a95054afb3dd6cdf1fbedbdfed5de9a25c6c21503"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

