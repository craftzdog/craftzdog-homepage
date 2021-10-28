import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => {
  const t = lang('works')
  return (
    <Layout title="WeatherApp">
      <Container>
        <Title>
          WeatherApp <Badge>2021</Badge>
        </Title>
        <P>{t.textWeatherApp}</P>

        <List ml={4} my={4}>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Javascript, Reactjs, Jest, Redux</span>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link isExternal href="https://weatherapp-theta.vercel.app/">
              Website <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/weather_1.png" alt="WeatherApp" />
        <WorkImage src="/images/works/weather_2.png" alt="WeatherApp" />
      </Container>
    </Layout>
  )
}

export default Work
