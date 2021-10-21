import { Container, Badge, List, ListItem, SimpleGrid } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'

import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="walknote">
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

      <SimpleGrid columns={2} gap={2}>
        <WorkImage src="/images/works/walknote_01.png" alt="walknote" />
        <WorkImage src="/images/works/walknote_02.png" alt="walknote" />
      </SimpleGrid>
      <WorkImage src="/images/works/walknote_03.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_04.png" alt="walknote" />
      <WorkImage src="/images/works/walknote_05.png" alt="walknote" />
    </Container>
  </Layout>
)

export default Work
