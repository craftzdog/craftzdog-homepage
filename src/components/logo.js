import Link from 'next/link'
import CameraIcon from './icons/camera'

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <span className="logo-box font-bold text-lg inline-flex items-center h-[30px] leading-5 p-2.5 cursor-pointer relative group">
        <CameraIcon />
        <span className="text-gray-800 dark:text-white/90 font-heading font-bold ml-3">
          Koki Nakagawa
        </span>
      </span>

      <style jsx>{`
        .logo-box > :global(svg) {
          transition: all 200ms ease;
        }

        .logo-box:hover > :global(svg) {
          animation: lensGlow 0.5s ease-in-out;
        }

        @keyframes lensGlow {
          0% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(255, 255, 255, 0));
          }
          50% {
            filter: brightness(1.8)
              drop-shadow(0 0 6px rgba(255, 255, 255, 0.8));
          }
          100% {
            filter: brightness(1) drop-shadow(0 0 0px rgba(255, 255, 255, 0));
          }
        }

        .logo-box:hover::before,
        .logo-box:hover::after {
          content: '';
          position: absolute;
          left: 10px;
          top: 50%;
          width: 2px;
          height: 12px;
          background: linear-gradient(
            to bottom,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 1) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          pointer-events: none;
          animation: sparkle 0.5s ease-out;
        }

        .logo-box:hover::before {
          transform: translate(-50%, -50%) rotate(45deg);
          animation-delay: 0.1s;
        }

        .logo-box:hover::after {
          transform: translate(-50%, -50%) rotate(-45deg);
          animation-delay: 0.15s;
        }

        @keyframes sparkle {
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
        }
      `}</style>
    </Link>
  )
}

export default Logo
