import React from 'react'
import { Icon } from '../Icons/icons'

const size = '30'

const walletTypes = [
  {
    id: 'BC',
    title: 'BinanceChain',
    icon: <Icon size={size} icon="binanceChain" />,
    connector: 'bsc',
  },
  {
    id: 'MM',
    title: 'MetaMask',
    icon: <Icon size={size} icon="metamask" />,
    connector: 'injected',
  },
  {
    id: 'TW',
    title: 'TrustWallet',
    icon: <Icon size={size} icon="trustwallet" />,
    connector: 'injected',
  },
  {
    id: 'OOT',
    title: 'Others',
    icon: <Icon size={size} icon="mathwallet" />,
    connector: 'injected',
  },
  {
    id: 'WC',
    title: 'WalletConnect',
    icon: <Icon size={size} icon="walletconnect" />,
    connector: 'walletconnect',
  },
]

export default walletTypes
