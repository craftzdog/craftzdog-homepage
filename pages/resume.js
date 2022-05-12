import { Container, Heading, SimpleGrid, Link, Button, Box, Stack, Divider, UnorderedList, ListItem, P } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { ExpItem } from '../components/grid-item'
import thumbFaikerz from '../public/images/resume/faikerz.png'

const Posts = () => (
  <Layout title="Posts">
    <Container maxW="container.xl">
      <Stack direction={['column', 'row']} my={4} spacing='24px' justify="space-between">
        <Heading as="h3" fontSize={30}>
          Resume
        </Heading>
        <Link href="/files/resume.pdf" target="_blank">
          <Button colorScheme="teal" size='md' variant='solid'>
            See as pdf
          </Button>
        </Link>
      </Stack>
      
      <Divider />

      <Heading as="h3" fontSize={20} my={4}>
        Education
      </Heading>

      <Section delay={0.1}>
        <Stack>
        <ExpItem 
            company="Columbia University" 
            position="B.S. in Computer Science" 
            time="Sept 2022 - June 2026" 
            location="New York, NY" 
            thumbnail='/images/resume/columbia.png'
        >
            <UnorderedList>
              <ListItem>Leave of Absence [Sept 2020 - Sept 2022]</ListItem>
            </UnorderedList>
        </ExpItem>
        {/* <ExpItem 
            company="Kent School" 
            position="High School Diploma" 
            time="Sept 2018 - June 2020" 
            location="Kent, CT" 
            thumbnail='/images/resume/kent.png'
        >
            <UnorderedList>
              <ListItem>Activities: Coding club, Peer Tutor, Kent Guild</ListItem>
              <ListItem>GPA: 4.06</ListItem>
            </UnorderedList>
        </ExpItem> */}
        </Stack>
      </Section>

      <Heading as="h3" fontSize={20} mb={4}>
        Work Experience
      </Heading>

      <Section delay={0.3}>
        <Stack>
        <ExpItem 
            company="Faikerz" 
            position="Freelance Software Engineer" 
            time="July 2021 - Present" 
            location="Seoul, Korea" 
            thumbnail='/images/resume/faikerz.png'
        >
            <UnorderedList>
              <ListItem>Built three counterfeit detection model/APIs; live-tested against Korean E-commerce sites and global fashion brand clients</ListItem>
              <ListItem>Consectetur adipiscing elit</ListItem>
            </UnorderedList>
        </ExpItem>
        <ExpItem 
            company="DIYA ML2 - Machine Learning Club" 
            position="Member" 
            time="March 2021 - Aug 2021" 
            location="Remote" 
            thumbnail='/images/resume/diya.png'
        >
            <UnorderedList>
              <ListItem>Presented and code-reviewed two relevant papers in the Multi-Agent Reinforcement Learning (MARL) team every week.</ListItem>
              <ListItem> Co-implemented PPO/DQN algorithms with PyTorch in Pommerman MARL environment as baseline models</ListItem>
            </UnorderedList>
        </ExpItem>
        <ExpItem 
            company="UF SSTP (Student Science Training Program" 
            position="Participant" 
            time="June 2019 - Aug 2019" 
            location="Gainesville, FL" 
            thumbnail='/images/resume/sstp.png'
        >
            <UnorderedList>
              <ListItem>
                Assisted ML texture analysis research in Dr. Alina Zare’s lab by implementing deep network models in PyTorch and conducting various experiments with different parameters
              </ListItem>
              <ListItem> 
                Wrote and presented a research report titled ‘Histogram Layer for Texture Classification’ and received the best research paper award among participants
              </ListItem>
            </UnorderedList>
        </ExpItem>
        </Stack>
      </Section>

      {/* <Heading as="h3" fontSize={20} mb={4}>
        Selected Awards
      </Heading>

      <Section delay={0.5}>
        <UnorderedList>
          <ListItem>Lorem ipsum dolor sit amet</ListItem>
          <ListItem>Consectetur adipiscing elit</ListItem>
          <ListItem>Integer molestie lorem at massa</ListItem>
          <ListItem>Facilisis in pretium nisl aliquet</ListItem>
        </UnorderedList>
      </Section> */}

    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
