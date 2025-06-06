import React from 'react'
import PrimaryLanding from '@/component/primaryLanding/PrimaryLanding '
import bigImageSrc from '../../assets/images/eng-ser/img_eng-ser_lan.png'
import hozImageSrc from '../../assets/images/eng-ser/img_lan_hoz.png'
import SecondaryLanding from '@/component/secondaryLanding/SecondaryLanding'
import img from '../../assets/images/eng-ser/img_eng-ser_lay1.png'
import bg from '../../assets/images/img_ourLeader_bg.png'
import bgRD from '../../assets/images/Sustainability/img_bg.png'

import WorkforceSolutions from '@/pages/manpowerServices/workforceSolutions/WorkforceSolutions'
import ForAlternativeEnergy from '@/component/forAlternativeEnergy/ForAlternativeEnergy'
import LngLiquefiedNaturalGas from '@/pages/engineeringservices/lngLiquefiedNaturalGas/LngLiquefiedNaturalGas'
import ElectricVehicle from '@/pages/engineeringservices/electricVehicle/ElectricVehicle'
import SolarEnergy from '@/pages/engineeringservices/solarEnergy/SolarEnergy'
import WindEnergy from '@/pages/engineeringservices/windEnergy/WindEnergy'
import Hydropower from '@/pages/engineeringservices/hydropower/Hydropower'
import EnergyConsulting from '@/pages/engineeringservices/energyConsulting/EnergyConsulting'
import AutomationSolutions from '@/pages/engineeringservices/automationSolutions/AutomationSolutions'
import ProductDesign from '@/pages/engineeringservices/productDesign/ProductDesign'
import ProcessEngineering from '@/pages/engineeringservices/processengineering/ProcessEngineering'
import MaterialsEngineering from '@/pages/engineeringservices/materialsEngineering/materialsEngineering'
import MaintenanceSupport from '@/pages/engineeringservices/maintenanceSupport/MaintenanceSupport'
import rdImage from '../../assets/images/eng-ser/img_r&d_ly.png'
import ProjectConsultancy from '@/pages/engineeringservices/projectConsultancy/ProjectConsultancy'
import imgRcc from '../../assets/images/eng-ser/img_rcc_ly.png'
import DeliverCore from '@/pages/engineeringservices/deliverCore/DeliverCore'
import CallToAction from '@/component/calltoaction/CallToAction'
import Wrapper from '../Wrapper'

import { Metadata } from 'next'
import PrimaryLanding2 from '@/component/primaryLanding2/PrimaryLanding2'
import ServiceLanding from '@/component/ServiceLanding/ServiceLanding'
import FloatingButton from '@/component/floatingButton/FloatingButton'

export const metadata: Metadata = {
     title: 'Engineering Services',
     description: ' Innovative Solutions for Complex Engineering Challenges.',
     alternates: {
          canonical: 'https://prakashrg09.github.io/a2t-technologies/engineering-services',
     },
}
const page = () => {
     return (
          <Wrapper>
               <React.Fragment>
                    <ServiceLanding
                         title='Engineering Services'
                         style={{
                              paddingBlockStart: '2rem',
                              justifyContent: 'center',
                              gap: '1rem',
                              paddingInline: '1.5rem',
                              display: 'flex',
                              flexDirection: 'column',
                         }}
                         flexRow
                         layoutMod
                         isReverse
                         heading={
                              <>
                                   Innovative Solutions for Complex{' '}
                                   <span>Engineering Challenges</span>
                              </>
                         }
                         bigImageSrc={bigImageSrc}
                         smallImageSrc={hozImageSrc}
                         description='From concept to execution, we bring innovative thinking and technical expertise to solve even the most challenging engineering projects.'
                    />
                    <SecondaryLanding
                         heading={'Empowering Industry with Engineering Excellence'}
                         description={
                              'Our Engineering Services are designed to provide comprehensive solutions that meet the demands of modern industry. Our team of experts delivers innovative engineering solutions that drive efficiency, enhance performance, and ensure the success of your projects.'
                         }
                         flexReverse
                         image={img}
                         bgImage={bg}
                         bgColor={{ backgroundColor: '#F3FCF4' }}
                    />
                    <WorkforceSolutions keyProp={false} />
                    <ForAlternativeEnergy
                         title={'For Alternative Energy'}
                         id='alternative-energy'
                    />
                    <LngLiquefiedNaturalGas />
                    <ElectricVehicle />
                    <SolarEnergy />
                    <WindEnergy />
                    <Hydropower />
                    <EnergyConsulting />
                    <ForAlternativeEnergy title={'For Engineering'} id='engineering' />
                    <AutomationSolutions />
                    <ProductDesign />
                    <ProcessEngineering />
                    <MaterialsEngineering />
                    <MaintenanceSupport />
                    <ForAlternativeEnergy
                         title={'For Cross-sector services'}
                         id='cross-sector-services'
                    />
                    <SecondaryLanding
                         heading={'R&D and Innovation Consulting'}
                         description={[
                              'Supporting clients in the development of innovative energy or manufacturing solutions.',
                              'Research into new energy technologies (e.g., hydrogen energy ( Hydrogen Fuel Cell) ) and advanced manufacturing techniques (e.g., nanomanufacturing).',
                         ]}
                         flexReverse
                         image={rdImage}
                         bgImage={bgRD}
                         id={'R&D-and-innovation-consulting'}
                         bgColor={{ backgroundColor: '#fff' }}
                    />
                    <ProjectConsultancy />
                    <SecondaryLanding
                         heading={'Regulatory Compliance and Certification'}
                         description={[
                              'Assistance with local and international certification standards for energy and manufacturing sectors.',
                              'Consultancy on environmental impact assessments and government policy compliance.',
                         ]}
                         flexReverse
                         image={imgRcc}
                         bgImage={bgRD}
                         id={'regulatory-compliance-and-certification'}
                         bgColor={{ backgroundColor: '#fff' }}
                         bsStyle={{ width: '80%', height: 'auto' }}
                    />
                    <DeliverCore />
                    <CallToAction
                         data={
                              <>
                                   Ready to <span>Elevate Your Engineering Projects? </span>our
                                   Engineering Services can help you overcome your most complex
                                   challenges and <span>drive your business</span> forward.
                              </>
                         }
                    />
                   <FloatingButton />
               </React.Fragment>
          </Wrapper>
     )
}

export default page
