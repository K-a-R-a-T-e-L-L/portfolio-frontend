import Section from '@/shared/ui/Section/Section'
import styles from './StackSection.module.css'

interface StackSectionProps {

}

const StackSection: React.FC<StackSectionProps> = (props) => {
    const {} = props

    return(
        <Section ariaLabelledby='' id='stack-section'>
            <>StackSection</>
        </Section>
    )
}

export default StackSection