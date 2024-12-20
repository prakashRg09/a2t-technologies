import React from 'react'
import styles from './LogisticsOptimization.module.scss'
import Image from 'next/image'
import bgImage from '../../../assets/images/img_emp_7.png'
import img from '../../../assets/images/fleet/img_lan_1.png'
import img1 from '../../../assets/images/fleet/img_lan_2.png'

const LogisticsOptimization = () => {
     return (
          <section className={styles.main_con}>
               <div className={styles.container_wrp}>
                    <div className={styles.img_wrapper}>
                         <div className={styles.img}>
                              <Image src={img} alt='' className={styles.image} />
                         </div>
                    </div>
                    <div className={styles.details_con}>
                         <label className={styles.label}>Fleet management Services</label>
                         <h4 className={styles.heading}>
                              Optimized <span>Fleet Management</span> for Seamless Logistics
                              Operations
                         </h4>
                         <p className={styles.desc}>
                              From vehicle tracking to maintenance, we provide comprehensive fleet
                              solutions tailored to your business needs.
                         </p>
                    </div>
               </div>
               <div className={styles.img_Stretch_Full}>
                    <div className={styles.img_wrapper}>
                         <Image src={img1} alt='' className={styles.fullimage} />
                    </div>
               </div>
          </section>
     )
}

export default LogisticsOptimization
