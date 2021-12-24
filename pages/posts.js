import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";

import thumbFishWorkflow from "../public/images/contents/three.png";
import thumbMyDeskSetup from "../public/images/contents/three.png";

const Posts = () => (
  <Layout title="Posts">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Hyviä videoita
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2, 2]} gap={6}>
          <GridItem
            title="three.js"
            thumbnail={thumbFishWorkflow}
            href="https://www.youtube.com/watch?v=pUgWfqWZWmM"
          />
          <GridItem
            title="Miten oppia three.js"
            thumbnail={thumbMyDeskSetup}
            href="https://www.youtube.com/watch?v=fXPKiaI2IBw"
          />
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
);

export default Posts;
