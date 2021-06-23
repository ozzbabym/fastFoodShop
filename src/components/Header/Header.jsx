import axios from 'axios'
import React from 'react'
import {useDispatch, useSelector } from 'react-redux'
import styles from './Header.module.css'


function Header() {
    const {basket, delivery, adressDelivery }= useSelector(data=>data)
    
    const postDataToSetver = async (e) => {
       await axios.post('http://localhost:4000/api/basket', e)
    }

    const dispatch = useDispatch()
    let keys = (Object.keys(basket))
    let sumGoods = []

    for(let i = 0; i<keys.length; i++) {
        sumGoods.push(basket[keys[i]].price)
    }
    const sum = sumGoods.reduce((acc, item)=>acc+=item,0)

    const deliveryToClient = () => {
        if(Object.keys(basket).length===0){
            alert('Ваша корзина пуста!')
        }
        else{
            if((!delivery && (!adressDelivery.adressHome.length || !adressDelivery.adressStreet.length))) {
                alert('Адрес доставки не заполнен')
            }
            else if(!delivery && adressDelivery.adressHome.length>0 && adressDelivery.adressHome.length>0){
                console.log(basket)
                postDataToSetver(basket)
                dispatch({type: 'CLEAR_BASKET'})
                dispatch({type: 'CLEAR_GOODS'})
            }else if(delivery === 1){
                console.log(basket)
                postDataToSetver(basket)
                dispatch({type: 'CLEAR_BASKET'})
                dispatch({type: 'CLEAR_GOODS'})
            }  
        }
    }

    return (
        <div>
            <div className={styles.header}>
                <div>
                    <img src={"images/BurgerMenu.png"} alt="" />
                </div>
                <div>
                    <img src="/images/logoHeader.png" alt="" />
                </div>
                <div onClick={deliveryToClient} className={styles.basket}>
                    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>{sum} ₽</div> <div><img src={"/images/basket.png"} style={{width: 20}} alt="" /></div>
                </div>
            </div>
        </div>
    )
}

export default Header
