import { Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import dynamic from 'next/dynamic'

// Dynamically load the widget component with no SSR
const PlanerkaWidget = dynamic(() => import('../components/PlanerkaWidget'), { ssr: false })

const Schedule = () => (
  <Layout title="Schedule a Meeting">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Schedule a Meeting
      </Heading>
      <PlanerkaWidget />
    </Container>
  </Layout>
)

export default Schedule
export { getServerSideProps } from '../components/chakra'
