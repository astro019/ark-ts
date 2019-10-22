// tslint:disable:object-literal-sort-keys

export default {
  networks: {
    mainnet: {
      bip32: {
        private: 0x2bf4530,
        public: 0x2bf4968,
      },
      name: 'mainnet',
      nethash: 'c88516c2eae73d3672941c661411c439e0150f9f86c12d06fda87bf31e71dcfe',
      token: 'T69',
      symbol: 'T69',
      version: 65,
      explorer: 'https://explorer.tycoonchain.com',
      wif: 0xaa,
      p2pPort: 4001,
      apiPort: 4003,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: '139.180.196.24',
        port: 4003,
      },
      peers: [
        '139.180.196.24:4003',
        '45.32.31.199:4003'
      ],
    },
    devnet: {
      bip32: {
        public: 0x043587cf,
        private: 0x04358394,
      },
      name: 'devnet',
      nethash: '343aa9dffbe7bc0b9113df6db7964223e81a31901648b4ccaaba65944810b3e8',
      token: 'T69',
      symbol: 'T69',
      version: 30,
      explorer: 'http://dexplorer.tycoonchain.com',
      wif: 0xaa,
      p2pPort: 4002,
      apiPort: 4003,
      p2pVersion: '2.0.0',
      isV2: true,
      activePeer: {
        ip: '104.156.239.242',
        port: 4003,
      },
      peers: [
        '104.156.239.242:4003',
        '198.13.36.16:4003',
      ],
    },
  },
  blockchain: {
    interval: 8,
    delegates: 53,
    date: new Date(Date.UTC(2017, 2, 21, 13, 0, 0, 0)),
  },
};
