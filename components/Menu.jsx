import Dish from './Dish'
import menuDishList from '@/utils/menuDishList'
import styles from '@/styles/components/Menu.module.scss'

function Menu() {
  return (
    <section className={styles.menu} id='menu'>
      <h3 className='sub-heading'>our dishes</h3>
      <h1 className='heading'>popular dishes</h1>
      <div className={styles.menu__container}>
        {menuDishList.map((menu, index) => {
          return <Dish key={index} {...menu} />
        })}
      </div>
    </section>
  )
}

export default Menu