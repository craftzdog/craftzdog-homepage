import Logo from './logo'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
  Select
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import { IoLogoGithub } from 'react-icons/io5'
import * as en from '../locales/en'
import * as es from '../locales/es'
const LinkItem = ({ href, path, _target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href} passHref>
      <Link
        p={2}
        bg={active ? 'grassTeal' : undefined}
        color={active ? '#202023' : inactiveColor}
        _target={_target}
        {...props}
      >
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props
  const router = useRouter()
  const { locale } = router
  const tAux = locale === 'en' ? en : es
  const t = tAux.navbar
  console.log('--')
  console.log(locale)
  const changeLanguage = e => {
    const locale = e.target.value
    router.push(router.pathname, router.asPath, { locale })
  }

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#20202380')}
      style={{ backdropFilter: 'blur(10px)' }}
      zIndex={1}
      {...props}
    >
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          alignItems="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            {t.works}
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            {t.posts}
          </LinkItem>
          <LinkItem
            _target="_blank"
            href="https://github.com/elbatlles/craftzdog-homepage"
            path={path}
            display="inline-flex"
            alignItems="center"
            style={{ gap: 4 }}
            pl={2}
          >
            <IoLogoGithub />
            {t.source}
          </LinkItem>
          <Select
            placeholder="Select option"
            onChange={changeLanguage}
            defaultValue={locale}
            className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
          >
            <option className="text-black" value="en">
              EN
            </option>
            <option className="text-black" value="es">
              ES
            </option>
          </Select>
        </Stack>

        <Box flex={1} align="right">
          <ThemeToggleButton />

          <Box ml={2} display={{ base: 'inline-block', md: 'none' }}>
            <Menu isLazy id="navbar-menu">
              <MenuButton
                as={IconButton}
                icon={<HamburgerIcon />}
                variant="outline"
                aria-label="Options"
              />
              <MenuList>
                <NextLink href="/" passHref>
                  <MenuItem as={Link}>About</MenuItem>
                </NextLink>
                <NextLink href="/works" passHref>
                  <MenuItem as={Link}>Works</MenuItem>
                </NextLink>
                <NextLink href="/posts" passHref>
                  <MenuItem as={Link}>Posts</MenuItem>
                </NextLink>
                <MenuItem
                  as={Link}
                  href="https://github.com/elbatlles/craftzdog-homepage"
                >
                  View Source
                </MenuItem>
                <MenuItem>
                  <Select
                    placeholder="Select option"
                    onChange={changeLanguage}
                    defaultValue={locale}
                    className="text-white text-shadow-sm text-lg bg-transparent tracking-wide"
                  >
                    <option className="text-black" value="en">
                      EN
                    </option>
                    <option className="text-black" value="es-ES">
                      ES
                    </option>
                  </Select>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar
