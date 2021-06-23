import React from 'react'
import { useDispatch } from 'react-redux'
import styles from './ItemCategorie.module.css'

function ItemCategorie(props) {
    const dispatch = useDispatch()

    const addGoods = (e) => {
        dispatch({type: 'UPDATE_GOODS', payload: e})
    }

    const deleteGoods = (e) => {
        dispatch({type: 'DELETE_GOODS', payload: e})
    }
    
    
    return (
        <div className={styles.ItemCart}>
            <div className={styles.wrapperCart}>
                <div style={{background: `url(${props.img}) no-repeat center`, height: 200, display: 'flex', justifyContent: 'space-between'}}>
                    <div>
                    {props.popular &&
                        <div className={styles.circlePopular} style={props.popular === 'Хит' ? {background: 'black'}:{background: 'red'}}>{props.popular}</div>
                    }
                    </div>
                    <div style={{alignSelf: 'flex-end', marginBottom: 20, marginRight: 20}}>
                        {props.count === 0 ?
                        <div onClick={()=>addGoods(props)} className={styles.circlePlus}>+</div>
                        :<div className={styles.circleChange}>
                            <div onClick={()=>deleteGoods(props)}>-</div>
                            <div>{props.count}</div>
                            <div onClick={()=>addGoods(props)} >+</div>
                        </div>
                    }
                    </div>
                </div>
                <div style={{fontSize: 24, color: '#9D9D9D'}}>{props.name}</div>
                <div style={{marginTop: 25, color: 'red', fontSize: 32}}>{props.price} ₽</div>
            </div>
        </div>
    )
}

export default ItemCategorie
