import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.pancakeswap.finance/#/swap',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.pancakeswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Nests',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: '#',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: '#',
  //     },
  //   ],
  // },
  {
    label: 'Buy BLT',
    icon: 'InfoIcon',
    href:
      'https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=0xAabc4cC9784B798584E63106b99d4aDc468B8D26',
  },
  {
    label: 'Buy P69',
    icon: 'InfoIcon',
    href:
      'https://exchange.pancakeswap.finance/#/swap?inputCurrency=ETH&outputCurrency=0x3b87AeE91571850c446cd49B7f9b13Fadc5aB691',
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/xproject69/',
      },
      {
        label: 'Docs',
        href: 'https://docs.project69.network/',
      },
      {
        label: 'VFat.Tools',
        href: 'https://vfat.tools/bsc/project69/',
      },
      {
        label: 'Audit (Coming Soon)',
        href: '#',
      },
    ],
  },
  // {
  //   label: 'Audit (Coming Soon)',
  //   icon: 'AuditIcon',
  //   href: '#',
  // },
]

export default config
