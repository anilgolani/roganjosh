import React from 'react'
import { useAppDispatch, useAppSelector } from '@store/hooks'
import {
    selectCount,
    decrement,
    increment,
    reset,
} from '@redux-slices/counter.slice'
import { ECounterEventType } from '@enums/ECounterEventType'
import { useTranslation } from 'react-i18next'
import Header from '../Header'
// import styles from './styles.module.scss'

const HomePage = () => {
    // const {t} = useTranslation();
    // const dispatch: any = useAppDispatch()
    // const value: number = useAppSelector(selectCount)
    // const handleAction = (action: ECounterEventType) => {
    //     switch (action) {
    //         case ECounterEventType.DECREMENT:
    //             dispatch(decrement())
    //             break
    //         case ECounterEventType.INCREMENT:
    //             dispatch(increment())
    //             break
    //         case ECounterEventType.RESET:
    //             dispatch(reset())
    //             break
    //     }
    // }
    return (
        <div>
            <Header />
        </div>
    )
}

export default HomePage
