import React from 'react'
import styles from './styles.module.scss'

const Header = () => {
    return (
        <div className={styles.headerContainer}>
            <div><h1 className={styles.heading}>Infofifo</h1></div>
                <ul className={styles.tabsContainer}>
                    <li>
                        Accueil
                    </li>
                    <li>
                        A propos
                    </li>
                    <li>
                        Documentes
                    </li>
                </ul>
        </div>
    )
}

export default Header
