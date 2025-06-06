'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './GlobalTrustSection.module.scss'
import Image from 'next/image'
import img1 from '../../../assets/images/trust_company/img_1.png'
import img2 from '../../../assets/images/trust_company/img_2.png'
import img3 from '../../../assets/images/trust_company/img_3.png'
import img4 from '../../../assets/images/trust_company/img_4.png'
import img5 from '../../../assets/images/trust_company/img_5.png'
import img6 from '../../../assets/images/trust_company/img_6.png'
import { gsap } from 'gsap'
import { Inter } from 'next/font/google'

const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '800'],
})
const GlobalTrustSection = () => {
     let arr = [img1, img2, img3, img4, img5, img6]

     return (
          <>
               <section className={`${styles.main_container} ${inter.className}`}>
                    <p className={`${styles.para} ${styles.regularText}`}>
                         Trusted By Global Companies
                    </p>
                    <div className={styles.mainSec}>
                         <div className={styles.flex_con}>
                              <div className={styles.imgSec}>
                                   {arr.map((item: any, index: any) => (
                                        <div key={index} className={styles.img_wrapper}>
                                             <Image src={item} alt='' />
                                        </div>
                                   ))}
                              </div>
                              <div className={styles.imgSec}>
                                   {arr.map((item: any, index: any) => (
                                        <div key={index} className={styles.img_wrapper}>
                                             <Image src={item} alt='' />
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
                    <div className={`${styles.mainSec} ${styles.reverse}`}>
                         <div className={styles.flex_con}>
                              <div className={styles.imgSec}>
                                   {arr.map((item: any, index: any) => (
                                        <div key={index} className={styles.img_wrapper}>
                                             <Image src={item} alt='' />
                                        </div>
                                   ))}
                              </div>
                              <div className={styles.imgSec}>
                                   {arr.map((item: any, index: any) => (
                                        <div key={index} className={styles.img_wrapper}>
                                             <Image src={item} alt='' />
                                        </div>
                                   ))}
                              </div>
                         </div>
                    </div>
               </section>
          </>
     )
}

export default GlobalTrustSection
