import type { FC, PropsWithChildren } from 'react'

type FCC<TP extends object = any> = FC<PropsWithChildren<TP>>

export default FCC
