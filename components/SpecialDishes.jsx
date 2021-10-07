import Slider from './Slider'
import specialDishes from '@/utils/specialDishes'
import styles from '@/styles/components/SpecialDishes.module.scss'

function SpecialDishes() {
  return (
    <section className={styles.home} id='special-dishes'>
      <Slider items={specialDishes} />
    </section>
  )
}

export default SpecialDishes
