import { motion } from 'framer-motion';
import { styles } from '../../styles/stylesTilewind';
import { staggerContainer } from '@components/utils/motions';
import type { ComponentType, FC } from 'react';

type SectionWrapperProps = {
    Component: ComponentType;
    idName: string;
}

export const SectionWrapper = ({ Component, idName }: SectionWrapperProps) => {
    return function Hoc() {

        return (
            <motion.section
                variants={staggerContainer(0, 0)}
                initial='hidden'
                whileInView={'show'}
                viewport={{ once: true, amount: 0.25 }}
                className={`${styles.padding} px-6 py-10 md:px-16 md:pt-[7rem] max-w-7xl mx-auto relative z-0`}
            >
                <span className='hash-span absolute top-0' id={idName}>
                    &nbsp;
                </span>
                <Component />
            </motion.section>
        )
    }
}
