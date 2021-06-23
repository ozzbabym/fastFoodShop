import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styles from './NavBar.module.css'

const navBar = ['Бургеры', 'Твистеры', 'Курица', 'Баскеты', 'Снэки', 'Соусы', 'Напитки', 'Кофе и чай', 'Десерты', 'Хиты по 50' ]

function NavBar() {
    const [active, setActive] = useState(null)
    const dispatch = useDispatch()

    const changeActive = (e) => {
        setActive(e)
        dispatch({type: 'CATEGORIE', payload: e})
        if(document.getElementById(e)){
            window.scrollTo({
                top: document.getElementById(e).offsetTop,
                behavior: 'smooth',
            })
        }
    }
    
    //Попытка отслеживать скролл и делать отметку в навбар, но тормозит
    // document.addEventListener('scroll', ()=>{
    //     if((window.pageYOffset>document.getElementById(0).offsetTop) || (window.pageYOffset < window.pageYOffset>document.getElementById(1).offsetTop)){
    //         setActive(0)
    //     }
    //     if((window.pageYOffset>document.getElementById(1).offsetTop) || (window.pageYOffset < window.pageYOffset>document.getElementById(2).offsetTop)){
    //         setActive(1)
    //     }
    //     if(window.pageYOffset>document.getElementById(2).offsetTop ){
    //         setActive(2)
    //     }
    // })
    

    return (
        <div className={styles.stick}>
            <div className={styles.navbarWrapper}>
                {navBar.map((item, index)=><div onClick={()=>changeActive(index)} key={index} className={styles.navbar} style={active === index? {color:'#E4002B', paddingBottom: 10, borderBottom: '1px solid #E4002B', fontWeight: 'bold'}:{ color: '#9D9D9D'}}>{item}</div>)}
            </div>
        </div>
    )
}

export default NavBar
