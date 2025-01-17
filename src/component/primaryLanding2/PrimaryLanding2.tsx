'use client'
import React, { ReactElement, useEffect, useState } from 'react'
import styles from './PrimaryLanding2.module.scss'
import Image, { StaticImageData } from 'next/image'
import img_contact from '../../assets/images/img_contact.png'
import { Inter } from 'next/font/google'
import thumb_nail from '../../assets/images/img_contact_thumb.png'
import Spinner from '../spinner/Spinner'
import { MainHeading, MainPara } from '../typography/Typography'
import playBtn from '../../assets/icons/ic_play_btn.png'
const inter = Inter({
     subsets: ['latin'],
     weight: ['400', '600', '800'],
     style: ['normal'],
})

interface heading {
     title: string
     heading: ReactElement<any, any>
     description: string
     isReverse?: boolean
     bigImageSrc?: StaticImageData
     smallImageSrc?: StaticImageData
     isThumbnailHidden?: boolean
     style?: any
     layoutMod?: boolean
     flexRow?: any
     enableModal?: boolean
}
const PrimaryLanding = ({
     title,
     heading,
     description,
     isReverse = false,
     bigImageSrc,
     smallImageSrc,
     isThumbnailHidden,
     style,
     layoutMod,
     flexRow,
     enableModal,
}: heading) => {
     const [isSmallScreen, setIsSmallScreen] = useState(false)
     const [isModalOpen, setIsModalOpen] = useState(false)

     const openModal = () => setIsModalOpen(true)
     const closeModal = () => setIsModalOpen(false)

     useEffect(() => {
          if (typeof window !== 'undefined') {
               const handleResize = () => {
                    setIsSmallScreen(window.innerWidth <= 768)
               }

               handleResize()
               window.addEventListener('resize', handleResize)

               return () => {
                    window.removeEventListener('resize', handleResize)
               }
          }
     }, [])
     return (
          <section
               className={`${styles.main_con} ${inter.className} ${isReverse ? styles.rowReverse : ''} ${title == 'Careers' ? styles.careerSwap : title == 'Business & IT consulting services' ? styles.consultSwap : ''}`}
          >
               <div
                    className={`${styles.image_section} ${title == 'About us' ? styles.aboutImageSec : ''}`}
                    style={{
                         flex: layoutMod ? '0.25' : undefined,
                    }}
               >
                    <div className={styles.image_wrapper}>
                         <Image
                              src={bigImageSrc ? bigImageSrc : img_contact}
                              alt='image'
                              priority
                              placeholder='blur'
                              className={`${styles.image} ${title == 'About us' ? styles.aboutImage : ''} `}
                         />
                    </div>
               </div>
               <div
                    className={styles.details_section}
                    style={{
                         flex: layoutMod ? '0.85' : undefined,
                    }}
               >
                    <div
                         className={styles.con_wrapper}
                         style={isSmallScreen ? undefined : { ...style }}
                    >
                         <div className={styles.wrapper}>
                              <div className={`${styles.btn_container} ${styles.semiBoldText}`}>
                                   {title}
                              </div>
                              <MainHeading className={`${styles.heading}  ${styles.blackText}`}>
                                   {heading}
                              </MainHeading>
                              <MainPara className={`${styles.description} ${styles.regularText}`}>
                                   {description}
                              </MainPara>
                         </div>

                         {enableModal ? (
                              <>
                                   {!isModalOpen && (
                                        <div className={styles.thumb_nailWrapper_con}>
                                             <div
                                                  className={styles.thumb_nailWrapper}
                                                  onClick={openModal}
                                             >
                                                  <Image
                                                       src={smallImageSrc || thumb_nail}
                                                       alt='Thumbnail'
                                                       priority
                                                       className={styles.image}
                                                       width={300}
                                                       height={200}
                                                  />
                                                  <div className={styles.playbtn}>
                                                       <Image src={playBtn} alt='Play btn' />
                                                  </div>
                                             </div>
                                        </div>
                                   )}

                                   {isModalOpen && (
                                        <div className={styles.modalOverlay} onClick={closeModal}>
                                             <div
                                                  className={styles.modalContent}
                                                  onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
                                             >
                                                  <button
                                                       className={styles.closeButton}
                                                       onClick={closeModal}
                                                  >
                                                       &times;
                                                  </button>
                                                  <video
                                                       className={styles.videoPlayer}
                                                       controls
                                                       autoPlay
                                                       src={
                                                            'https://cdn.pixabay.com/video/2021/03/09/67460-522170651_large.mp4'
                                                       }
                                                  />
                                             </div>
                                        </div>
                                   )}
                              </>
                         ) : (
                              <>
                                   {!isThumbnailHidden && (
                                        <Image
                                             src={smallImageSrc || thumb_nail}
                                             alt='Thumbnail'
                                             placeholder='blur'
                                             priority
                                             className={styles.bottomImage}
                                             //   width={300}
                                             //   height={200}
                                        />
                                   )}
                              </>
                         )}
                    </div>
               </div>
          </section>
     )
}

export default PrimaryLanding
