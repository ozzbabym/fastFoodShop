import React from 'react'
import styles from './Footer.module.css'

function Footer() {
    return (
        <div className={styles.footerWrapper}>
            <div className='centerContent'><img src="/images/logoFooter.png" alt="" /></div>
            <div className={styles.footerContent}>
                <div>
                    <h1>Раздел 1</h1>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                </div>
                <div>
                    <h1>Раздел 1</h1>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                </div>
                <div><img style={{paddingTop: 50}} src="/images/Ellipse.png" alt="" /></div>
                <div>
                    <h1>Раздел 1</h1>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                </div>
                <div>
                    <h1>Раздел 1</h1>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                    <div>Подраздел</div>
                </div>
            </div>
            <div style={{float: 'right'}}><img src="/images/lineContact.png" alt="" /></div>
        </div>
    )
}

export default Footer
