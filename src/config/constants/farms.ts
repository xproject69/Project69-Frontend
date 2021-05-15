import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BLT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7a9d31316ae2bdcc9bb640dc524b84510d757ee5',
    },
    tokenSymbol: 'BLT',
    tokenAddresses: {
      97: '',
      56: '0xAabc4cC9784B798584E63106b99d4aDc468B8D26',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 3,
    lpSymbol: 'BLT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa8212e759cc5753ca6b0554c11569ca42c945adf',
    },
    tokenSymbol: 'BLT',
    tokenAddresses: {
      97: '',
      56: '0xAabc4cC9784B798584E63106b99d4aDc468B8D26',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 3,
    lpSymbol: 'BLT-P69 LP',
    lpAddresses: {
      97: '',
      56: '0x0516cdbf1c1b9af9d4aef9d9288b6fd0ef584e12',
    },
    tokenSymbol: 'BLT',
    tokenAddresses: {
      97: '',
      56: '0xAabc4cC9784B798584E63106b99d4aDc468B8D26',
    },
    quoteTokenSymbol: QuoteToken.CAKE,
    quoteTokenAdresses: contracts.cake,
  },
  {
    pid: 4,
    risk: 1,
    lpSymbol: 'P69-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7e4f3575f8eb3d5b054df6112ce55bef2384f3e3',
    },
    tokenSymbol: 'P69',
    tokenAddresses: {
      97: '',
      56: '0x3b87AeE91571850c446cd49B7f9b13Fadc5aB691',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 2,
    lpSymbol: 'P69-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xc1810ad70f6f510aaa14c1f06daeab5d09f4e2b7',
    },
    tokenSymbol: 'P69',
    tokenAddresses: {
      97: '',
      56: '0x3b87AeE91571850c446cd49B7f9b13Fadc5aB691',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 8,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 0,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BLT',
    lpAddresses: {
      97: '',
      56: '0x7a9d31316ae2bdcc9bb640dc524b84510d757ee5', // BLT-BUSD LP
    },
    tokenSymbol: 'BLT',
    tokenAddresses: {
      97: '',
      56: '0xAabc4cC9784B798584E63106b99d4aDc468B8D26',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 6,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'P69',
    lpAddresses: {
      97: '',
      56: '0xc1810ad70f6f510aaa14c1f06daeab5d09f4e2b7', // BLT-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'P69',
    tokenAddresses: {
      97: '',
      56: '0x3b87AeE91571850c446cd49B7f9b13Fadc5aB691',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
