require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half arena october traffic walnut raw remind proud grace globe olympic subject'; 
let testAccounts = [
"0x6e43b254243c4fe1beae0e548e8320f86c50c699a3216cb2903c8bd7b3e882e8",
"0xc53afc36287f68f4b5e7f5616a332a4ae35d5e71444b19163464abfaebd4efae",
"0x625e6f5cf5c07422c81b54e1afaf95d05165156ce3dc59fbedf18c0dad514755",
"0xe882bd68f8245ec412cce4dc988df6df6c10f6d3f4f3210183a1e16289f0c39d",
"0xcd2044ea09f168d17a1529b773be5cfae7205728e84904933a7453771cbd0601",
"0x51270728c2ec460a4380112d6e86f27ca6061f8795aa6c992fbddcd9c5d1e31a",
"0x18e76ce941f83e50fe6ad2b73ecdf7d59d9d7cb700161c9156d2b9b7e42d9993",
"0x82acd63160e1caca6a7cc56d6da9d519bed011210f8cc7651ee39ed766754af5",
"0xf61423ddbaea4acc1ddf7ec23eb476306375262cf88988c258cd6331c55dfbaa",
"0x6fd60e4fc31abee1d96eb21dd2f2160a6870ca8776039907652846afa8a560f7"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


