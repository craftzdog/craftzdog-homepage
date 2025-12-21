import { Text, useColorModeValue } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import Link from 'next/link'
import CameraIcon from './icons/camera'

// レンズ発光アニメーション
const lensGlowAnimation = keyframes`
  0% {
    filter: brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0));
  }
  50% {
    filter: brightness(1.8) drop-shadow(0 0 6px rgba(255,255,255,0.8));
  }
  100% {
    filter: brightness(1) drop-shadow(0 0 0px rgba(255,255,255,0));
  }
`

// キラキラアニメーション（斜め線）
const sparkleAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0);
  }
`

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;
  cursor: pointer;
  position: relative;

  > svg {
    transition: all 200ms ease;
  }

  &:hover > svg {
    animation: ${lensGlowAnimation} 0.5s ease-in-out;
  }

  /* レンズ上のキラキラエフェクト（斜め線） */
  &:hover::before,
  &:hover::after {
    content: '';
    position: absolute;
    left: 10px;
    top: 50%;
    width: 2px;
    height: 12px;
    background: linear-gradient(to bottom, 
      rgba(255,255,255,0) 0%, 
      rgba(255,255,255,1) 50%, 
      rgba(255,255,255,0) 100%
    );
    pointer-events: none;
    animation: ${sparkleAnimation} 0.5s ease-out;
  }

  &:hover::before {
    transform: translate(-50%, -50%) rotate(45deg);
    animation-delay: 0.1s;
  }

  &:hover::after {
    transform: translate(-50%, -50%) rotate(-45deg);
    animation-delay: 0.15s;
  }
`

const Logo = () => {
  return (
    (<Link href="/" scroll={false}>

      <LogoBox>
        <CameraIcon />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='M PLUS Rounded 1c", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          Koki Nakagawa
        </Text>
      </LogoBox>

    </Link>)
  );
}

export default Logo
