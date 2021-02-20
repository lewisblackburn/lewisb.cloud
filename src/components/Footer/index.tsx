import scrollToTop from 'hooks/scrollToTop'
import React from 'react'
import {FiArrowUp} from 'react-icons/fi'
import {SiGithub, SiInstagram, SiPinterest, SiTwitter} from 'react-icons/si'
import ExternalLink from '../ExternalLink'
import Logo from '../Logo'
import {NowPlaying} from './components/NowPlaying'

interface FooterProps {}

export const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <footer className="body-font">
      <div className="container flex flex-col items-center px-8 py-8 mx-auto max-w-7xl sm:flex-row">
        <Logo />
        <div className="mt-4 text-sm sm:ml-4 sm:pl-4 sm:border-l sm:border-black sm:dark:border-white sm:mt-0">
          <NowPlaying />
        </div>
        <div className="inline-flex justify-center mt-4 space-x-5 sm:ml-auto sm:mt-0 sm:justify-start">
          <ExternalLink
            href="https://www.pinterest.co.uk/yarnpkg/"
            sr="Pinterest"
            className="hover:text-pinterest dark:hover:text-pinterest"
          >
            <SiPinterest className="w-4 h-4" />
          </ExternalLink>

          <ExternalLink
            href="https://www.instagram.com/tsconfig/"
            sr="Instagram"
            className="hover:text-instagram dark:hover:text-instagram"
          >
            <SiInstagram className="w-4 h-4" />
          </ExternalLink>

          <ExternalLink
            href="https://twitter.com/zxffo"
            sr="Twitter"
            className="hover:text-twitter dark:hover:text-twitter"
          >
            <SiTwitter className="w-4 h-4" />
          </ExternalLink>

          <ExternalLink
            href="https://github.com/lewisblackburn"
            sr="GitHub"
            className="hover:text-github dark:hover:text-github"
          >
            <SiGithub className="w-4 h-4" />
          </ExternalLink>
          <a
            onClick={scrollToTop}
            className="text-gray-400 dark:text-white cursor-pointer"
          >
            <span className="sr-only">Arrow-Up</span>
            <FiArrowUp className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
