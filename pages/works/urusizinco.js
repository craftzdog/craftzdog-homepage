import {
  Container,
  Badge,
  Link,
  List,
  ListItem,
  UnorderedList,
  Heading,
  Center,
  Image
} from '@chakra-ui/react'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'

const Work = () => (
  <Layout title="freeDBTagger">
    <Container>
      <Title>
        Urusizin.co <Badge>2023</Badge>
      </Title>
      <P>
      Website Penyelia Halal menyediakan Informasi yang akurat sesuai dengan subject pelayanan yang diberikan
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://urusizin.co">
            https://urusizin.co <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Affiliated with</Meta>
          <span>halalhero.id/karamelgroup.com/Urushalal.co/PTSP Halal/Halal Indonesia/Keluharan Jakarta Timur/Walikota Jakarta Timur</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>CSS, JS, Bootstrap5</span>
        </ListItem>
        <ListItem>
          <Meta>Blogpost</Meta>
          <Link href="#">
            Mengapa Harus memilih Urusizin.co Sebagai platform urus izin usaha di 2024 ini?<ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>


      {/* <Heading as="h4" fontSize={16} my={6}>
        <Center>Media coverage</Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Link href="https://forest.watch.impress.co.jp/article/2005/02/01/freedbtagger.html">
            <Badge mr={2}>窓の杜</Badge>
            再生時間の組み合わせでアルバムを特定して楽曲情報を取得「freeDBTagger」{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </UnorderedList>

      <Heading as="h4" fontSize={16} my={6}>
        <Center>
          User reviews&nbsp;
          <Link
            target="_blank"
            href="http://www.vector.co.jp/soft/cmt/win95/art/se350576.html"
          >
            from Vector
          </Link>
        </Center>
      </Heading>

      <UnorderedList my={4}>
        <ListItem>
          <Badge mr={2}>FLACにも対応 - よーすけさん</Badge>
          <span>
            音質にこだわってFLACを使用している場合、
            なかなかタグを自動で付けられるソフトはありませんが、
            これはCDDBから曲情報をDLまでしてくれるので、 とてもお手軽簡単です。
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>CDDB対応のタグエディタ - noname_24さん</Badge>
          <span>
            純粋なタグ打ちソフトとしての能力はSuperTagEditorの方が優秀ですがこのソフトはCDDBに対応しているのが最大の利点です
            CDからだけではなくmp3など圧縮後の状態からでも取得できるのですでに作成済みの曲整理が楽になりました
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>昔の曲にタグを入れるに最適 - るるさん</Badge>
          <span>
            最近のリッピングソフトであれば自動で曲名を持ってきてくれますが以前リッピングしたままでタグが付いてない曲にタグを付けるのには最適です。
            参照しているCDDBについてもかなりマイナーなものまで曲名を拾ってくれるのでびっくりします。
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>2 in 1 - マルちゃんさん</Badge>
          <span>
            タグ編集はいろいろなソフトが出ていますが、DBから情報を拾ってくれる機能付では、このソフトが最高です。
            操作も簡単で、手放せません。
          </span>
        </ListItem>
        <ListItem>
          <Badge mr={2}>便利 - Masaki4さん</Badge>
          <span>
            普通CDDBというとCDを入れた状態でデータベースから読み込んでいきますが、このソフトはMP3などのファイルになっていても使えます。（もちろん、CDの通りに曲を並べなければいけませんが・・・）
            ただ、ほんのちょっと不安定さを感じたので４つ...
          </span>
        </ListItem>
      </UnorderedList> */}

      <WorkImage src="/images/works/urusizinco.jpg" alt="urusizin.co" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
