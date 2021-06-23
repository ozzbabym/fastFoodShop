import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import styles from './Delivery.module.css'

const button = ['Доставка', 'Самовывоз']

function Delivery() {
    const [action, setAction] = useState(0)
    const [adressHome, setadressHome] = useState('')
    const [adressStreet, setadressStreet] = useState('')

    const dispatch = useDispatch()

    const changeAction = (e) => {
        setAction(e)
        dispatch({type: 'CHANGE_DELIVERY', payload: e})
    }
    useEffect(() => {
        dispatch({type: 'ADRESS_DELIVERY', payload: {adressHome, adressStreet}})
    }, [adressHome, adressStreet])

    return (
        <div>
            <div className={styles.delivery}>
                <div>
                    <div style={{fontSize: 64, fontWeight: 'bold'}}>Доставка г.Москва</div>
                </div>
                <div className={styles.buttons}>
                    {button.map((item, index)=> <div key={index} onClick={()=>changeAction(index)} className={styles.buttonDelivery} style={action === index?{background: '#E4002B', color: 'white'}:{background:'#F7F6F5'}}>{item}</div>)}
                </div>
            </div>
            {action === 0 && 
                <div className={styles.adress}>
                    <div><span>Дом</span><input onChange={(e)=>{setadressHome(e.currentTarget.value)}} value={adressHome} placeholder='Остоженка'/></div>
                    <div><span>Улица</span><input onChange={(e)=>{setadressStreet(e.currentTarget.value)}} value={adressStreet} placeholder='Остоженка' /></div>
                </div>}
        </div>
    )
}

export default Delivery

