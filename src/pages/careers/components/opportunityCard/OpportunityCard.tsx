import React, { forwardRef } from 'react'
import styles from './OpportunityCard.module.scss'
import Button from '@/component/button/Button'
import Location from '../../../../assets/icons/ic_location_green.svg'
import Image from 'next/image'
import { MainPara } from '@/component/typography/Typography'

interface OpportunityCardProps {
     data: any
     className?: string
}

const OpportunityCard = forwardRef<HTMLDivElement, OpportunityCardProps>(
     ({ data, className = '' }, ref) => {
          return (
               <div className={`${styles.cardContainer} ${className}`} ref={ref}>
                    <div className={styles.detailContainer}>
                         <h2>{data?.title}</h2>
                         <span className={`${styles.location} flex align-center`}>
                              <Image src={Location} alt='Location' /> {data?.location}
                         </span>
                         <p>
                              <MainPara>{data?.description}</MainPara>
                         </p>
                    </div>
                    <Button
                         label='Apply now'
                         disabled={false}
                         icon
                         className={styles.applyBtn}
                         loading={false}
                         labestyle={{
                              fontSize: '0.925rem',
                         }}
                    />
               </div>
          )
     },
)

OpportunityCard.displayName = 'OpportunityCard'
export default OpportunityCard
