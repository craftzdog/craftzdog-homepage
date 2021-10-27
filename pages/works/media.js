import { Container, Badge, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="IA-Prvevent">
    <Container>
      <Title>
        IA-Prevent <Badge>2021-Nowaday</Badge>
      </Title>
      <P>
        Platform created to help Chileans in their diagnoses and applying AI in
        the results to help doctors.
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Reactjs,Gatsby,Strapi</span>
        </ListItem>
      </List>

      <SimpleGrid columns={1} gap={2}>
        <WorkImage src="/images/works/iaprevent_1.png" alt="walknote" />
        <WorkImage src="/images/works/iaprevent_2.png" alt="walknote" />
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Work
