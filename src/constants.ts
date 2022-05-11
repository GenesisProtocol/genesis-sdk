import JSBI from 'jsbi'
import { getAddress } from '@genesisprotocol/helpers'

export const FACTORY_ADDRESS = getAddress({ name: 'GenesisFactory' }) || ''

export const INIT_CODE_HASH = '0x185a834c78e41dfb603da7ba94d162c759a17ed351382bfdcd6dd160bee64bd7'

export const MINIMUM_LIQUIDITY = JSBI.BigInt(1000)

// exports for internal consumption
export const ZERO = JSBI.BigInt(0)
export const ONE = JSBI.BigInt(1)
export const FIVE = JSBI.BigInt(5)
export const _997 = JSBI.BigInt(997)
export const _1000 = JSBI.BigInt(1000)
