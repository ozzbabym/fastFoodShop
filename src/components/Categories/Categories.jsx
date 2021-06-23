import React from 'react'
import {useSelector } from 'react-redux'
import styles from './Categories.module.css'
import ItemCategorie from './ItemCategorie/ItemCategorie'

function Categories() {
    
    let data = useSelector(data=>data)

    if(data.delivery === 0){
        data = data.goods.map((item)=>{
            return {...item, products: item.products.filter(item=>item.delivery === data.delivery)}
        })
    } else {
        data = data.goods
    }

    return (
        <>
        {data.map((item, index)=>
        <div id={item.id} key={index} style={index%2===0?{background: '#F7F6F5'}:{background: 'white'}}>
            <div className={styles.wrappPadding}>
                
                <div>
                    <div><h1>{item.name}</h1></div>
                    <div className={styles.displayFlex}>
                        {item.products.map((item)=><div key={item.id}><ItemCategorie {...item}/></div>)}
                    </div>
                </div>
                
            </div>
        </div>
            )}
        </>
    )
}

export default Categories
