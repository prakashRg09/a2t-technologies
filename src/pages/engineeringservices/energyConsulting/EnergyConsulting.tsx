import React from 'react'
import styles from '../../../scss/layout/common.module.scss'
import ImageDesc from '@/component/imageDesc/ImageDesc'
import image1 from '../../../assets/images/eng-ser/img_engCon_ly1.png'
import image2 from '../../../assets/images/eng-ser/img_engCon_ly2.png'
import { MainHeading, MainPara } from '@/component/typography/Typography'

const EnergyConsulting = () => {
     const EngConArr = [
          {
               img: image1,
               title: 'Energy Audits & Optimization',
               link: 'energy-audits-&-optimization',
               description: [
                    'Conduct energy audits to optimize power usage.',
                    'Implement energy management systems and automation solutions.',
               ],
          },
          {
               img: image2,
               title: 'Carbon Reduction Strategies',
               link: 'carbon-reduction-strategies',
               description: [
                    'Consulting on carbon capture technologies, sustainable energy solutions, and emission reduction strategies.',
               ],
          },
     ]
     return (
          <section
               id='energy-efficiency-and-sustainability-consulting'
               className={styles.main_container}
               style={{ backgroundColor: '#fff' }}
          >
               <header className={`${styles.flex_con}`}>
                    <MainHeading className={`${styles.heading} ${styles.blackText}`}>
                         Energy Efficiency and Sustainability Consulting
                    </MainHeading>
                    <MainPara className={`${styles.para} ${styles.regularText}`}>
                         We conduct energy audits, provide energy management system implementation,
                         and offer carbon reduction strategies to help industries reduce their
                         environmental impact.
                    </MainPara>
               </header>
               {EngConArr.map((item: any, index: any) => (
                    <ImageDesc
                         key={item.id}
                         imageUrl={item.img}
                         title={item.title}
                         description={item.description}
                         rowReverse={index % 2 !== 0}
                         label={item.label}
                         link={item.link}
                         opacityAnimation={true}
                    />
               ))}
          </section>
     )
}

export default EnergyConsulting
