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
        freeDBTagger <Badge>2004-2009</Badge>
      </Title>
      <Center my={6}>
        <Image src="/images/works/freedbtagger_icon.gif" alt="icon" />
      </Center>
      <P>Automatic audio file tagging tool using FreeDB for Windows</P>
      <P>楽曲長の組み合わせでアルバムを特定して楽曲情報を自動入力</P>
      <P>
        アルバム内楽曲の再生時間の組み合わせで、CDDBサーバー“freeDB.org”を検索してアルバムを特定、楽曲情報を取得できるID3タグ一括編集ソフト。本ソフトを起動し、読み込んだアルバム1枚分の音楽ファイルの曲順を整えて［アルバム検索］を実行すれば、あとは本ソフトが、オープンソースで運営されているCDDBサーバー“freeDB.org”で再生時間の組み合わせからアルバムを特定して、アルバム名や曲名、アーチスト名などの情報を取得してくれる。MP3/WMA/Ogg
        Vorbis/AAC/Monkey&apos;s Audio/MPEGplus/FLAC/Twin
        VQ/WavPackファイルの楽曲情報を取得・編集できるほか、CDAファイルの楽曲情報を表示可能。MP3ファイルのタグに登録する場合のタグ形式は、ID3v1・ID3v2に対応しており、設定画面で選択可能。タグ項目内の文字数が30文字以上の場合のみ、ID3v2に登録する機能も備えている。
      </P>

      <List ml={4} my={4}>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows 2000/XP</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Delphi</span>
        </ListItem>
        <ListItem>
          <Meta>Download</Meta>
          <Link href="http://odoruinu.net.s3.amazonaws.com/software/freedbtagger/fdbt105.zip">
            v1.0.5
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Last update</Meta>
          <span>2009/02/16</span>
        </ListItem>
      </List>

      <Heading as="h4" fontSize={16} my={6}>
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
      </UnorderedList>

      <WorkImage src="/images/works/freedbtagger_01.jpg" alt="freeDBTagger" />
    </Container>
  </Layout>
)

export default Work
export { getServerSideProps } from '../../components/chakra'
