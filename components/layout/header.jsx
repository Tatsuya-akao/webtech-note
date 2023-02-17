import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/container";
import ThemeToggle from "@/components/layout/theme-toggle";
import s from "../../styles/components/layout/header.module.scss";
import { FaGithub, FaTwitter, FaInstagramSquare } from "react-icons/fa";
import { useState } from "react";

export default function Header({ home }) {
  const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

  const toggleHamburgerMenu = () => {
    setIsHamburgerOpen(!isHamburgerOpen);
  };

  const hideHamburgerMenu = () => {
    setIsHamburgerOpen(false);
  };

  return (
    <>
      <header className={s.header}>
        <Container additionalClass={s.container}>
          <div className={s.inner}>
            {home ? (
              <h1>
                <Link href="/" className={s.logo}>
                  <div className={s.note}>
                    <div className={s.note_front}>
                      <Image
                        src="/images/logo-main.svg"
                        width={40}
                        height={40}
                        alt="WebTech Note"
                      />
                    </div>
                    <div className={s.note_back}>
                      <Image
                        src="/images/logo-sub.svg"
                        width={40}
                        height={40}
                        alt="WebTech Note"
                      />
                    </div>
                  </div>
                  <span>WebTech Note</span>
                </Link>
              </h1>
            ) : (
              <Link href="/" className={s.logo}>
                <div className={s.note}>
                  <div className={s.note_front}>
                    <Image
                      src="/images/logo-main.svg"
                      width={40}
                      height={40}
                      alt="WebTech Note"
                    />
                  </div>
                  <div className={s.note_back}>
                    <Image
                      src="/images/logo-sub.svg"
                      width={40}
                      height={40}
                      alt="WebTech Note"
                    />
                  </div>
                </div>
                <span>WebTech Note</span>
              </Link>
            )}

            <nav className={s.nav}>
              <ul className={s.nav_list}>
                <li className={s.nav_item}>
                  <Link className={s.nav_link} href="/">
                    HOME
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link className={s.nav_link} href="/about">
                    ABOUT
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link className={s.nav_link} href="/posts">
                    POSTS
                  </Link>
                </li>
                <li className={s.nav_item}>
                  <Link className={s.nav_link} href="/contact">
                    CONTACT
                  </Link>
                </li>
              </ul>
            </nav>

            <ThemeToggle />

            <button
              onClick={toggleHamburgerMenu}
              className={
                isHamburgerOpen
                  ? `${s.hamburger_btn} ${s.hamburger_btn_open}`
                  : `${s.hamburger_btn}`
              }
              aria-label="Hamburger Menu"
            >
              <span></span>
            </button>
          </div>
        </Container>
      </header>

      <nav
        onClick={hideHamburgerMenu}
        className={isHamburgerOpen ? `${s.menu} ${s.menu_open}` : `${s.menu}`}
      >
        <div className={s.menu_content}>
          <ul className={s.menu_list}>
            <li className={s.menu_item}>
              <Link className={s.menu_link} href="/">
                HOME
              </Link>
            </li>
            <li className={s.menu_item}>
              <Link className={s.menu_link} href="/about">
                ABOUT
              </Link>
            </li>
            <li className={s.menu_item}>
              <Link className={s.menu_link} href="/posts">
                POSTS
              </Link>
            </li>
            <li className={s.menu_item}>
              <Link className={s.menu_link} href="/contact">
                CONTACT
              </Link>
            </li>
          </ul>

          <ul className={s.menu_sns_list}>
            <li className={s.menu_sns_item}>
              <a
                href="https://github.com/Tatsuya-akao"
                target="_blank"
                rel="noreferrer"
                className={`${s.menu_sns_link} ${s.icon_github}`}
                title="Github"
              >
                <FaGithub />
              </a>
            </li>
            <li className={s.menu_sns_item}>
              <a
                href="https://twitter.com/a_tatsu1512"
                target="_blank"
                rel="noreferrer"
                className={`${s.menu_sns_link} ${s.icon_twitter}`}
                title="Twitter"
              >
                <FaTwitter />
              </a>
            </li>
            <li className={s.menu_sns_item}>
              <a
                href="https://www.instagram.com/tatsuya.ako/"
                target="_blank"
                rel="noreferrer"
                className={`${s.menu_sns_link} ${s.icon_ig}`}
                title="Instagram"
              >
                <FaInstagramSquare />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
