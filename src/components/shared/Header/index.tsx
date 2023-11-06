/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import { Disclosure } from '@headlessui/react';
import { useRouter } from 'next/router';
import { createRef, RefObject, useState } from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { HiOutlineSearch } from 'react-icons/hi';
import styles from './styles.module.css';
import { Image } from '..';
import { Avatar, Button, Dropdown, TextInput } from 'flowbite-react';
import Link from 'next/link';

const Header = () => {
  const [showMobileList, setshowMobileList] = useState(false);
  const [showSubMenu, setshowSubMenu] = useState('');
  const [showMenu, setshowMenu] = useState('');

  const { push } = useRouter();
  const teamsButtonRef: RefObject<HTMLButtonElement> = createRef();
  const leaguesButtonRef: RefObject<HTMLButtonElement> = createRef();
  // const ButtonRef: RefObject<HTMLButtonElement> = createRef();

  // constants
  const navItems: { [key: string]: any } = {
    Scores: {
      href: '/scores',
      sub: [],
    },
    'Teams & Players': {
      href: '',
      sub: [
        {
          title: 'UEFA Champions League',
          href: '/',
          showSubs: true,
          sub: [
            {
              title: 'Manchester United',
              href: '/',
              icon: '',
            },
          ],
        },
        {
          title: 'Spanish LALIGA',
          href: '#',
          showSubs: false,
        },
        {
          title: 'English Premier League',
          href: '#',
          showSubs: false,
          active: false,
        },
        {
          title: 'CAF Champions League',
          href: '#',
          showSubs: false,
        },
        {
          title: 'Africa Cup of Nations',
          href: '#',
          showSubs: false,
        },
      ],
    },
    'Leagues & Tournaments': {
      href: '',
      sub: [
        {
          title: 'UEFA Champions League',
          href: '/#',
          showSubs: false,
        },
        {
          title: 'Spanish LALIGA',
          href: '/#',
          showSubs: false,
        },
        {
          title: 'English Premier League',
          href: '/#',
          active: false,
          showSubs: false,
        },
        {
          title: 'CAF Champions League',
          href: '/#',
          active: false,
          showSubs: false,
        },
        {
          title: 'Africa Cup of Nations',
          href: '/#',
          active: false,
          showSubs: false,
        },
      ],
    },
    Tables: {
      href: '/tables',
      sub: [],
    },
    Transfers: {
      href: '/transfers',
      sub: [],
    },
  };

  // handlers
  const handleShowMenu = (target: string) => {
    if (typeof target !== 'string' || showMenu === target.toLowerCase()) {
      return handleHideMenu();
    }
    target = showMenu.toLowerCase();

    setshowMenu(target);

    switch (target) {
      case 'teams':
        teamsButtonRef?.current?.click();
        break;
      case 'leagues':
        leaguesButtonRef?.current?.click();
        break;
      default:
        break;
    }
  };

  const handleHideMenu = () => {
    setshowMenu('');
    handleHideSubMenu();
  };

  const handleShowSubMenu = (target: string, key: number) => {
    if (typeof target !== 'string') return;
    // target = target.toLowerCase();

    // setshowSubMenu(target + '-' + key);
    setshowSubMenu(target.toLowerCase() + '-' + key);
  };

  const handleHideSubMenu = () => {
    setshowSubMenu('');
  };

  const getSubMenu = (activeMenu: (typeof navItems)['Teams & Players']) => {
    const activeMenuIndex = !isNaN(Number(showSubMenu.split('-')[1]))
      ? Number(showSubMenu.split('-')[1])
      : 0;
    return activeMenu[activeMenuIndex]?.sub;
  };

  // useEffect(()=>{}, [showMenu, showSubMenu, showMobileList]);

  return (
    <div className={`bg-white sticky top-0 z-10`}>
      <header className="bg-white border-b 2xl:px-8 px-4">
        <div
          className={`xl:px-8 px-4 mx-auto ${styles.container} ${styles.bigNav} py-4 hidden xl:block`}>
          <div className="">
            <div className="flex justify-between">
              <div className="flex items-center flex-grow">
                <div className="cursor-pointer">
                  <Link passHref={true} scroll={true} href="/">
                    <Image
                      alt="Game360 Logo"
                      className="cursor-pointer"
                      src={'/svgs/logo.svg'}
                      width={130}
                      height={35}
                    />
                  </Link>
                </div>
                <nav className={`${styles.bigNavLinks} 2xl:ml-8 ml-4`}>
                  <ul>
                    {Object.keys(navItems).map((navItem, i) => {
                      const { href, sub } = navItems[navItem];
                      return (
                        <li key={i} className="relative">
                          <Link
                            href={`${href}`}
                            className="peer py-2 flex items-center">
                            <span className="mr-1">{navItem}</span>
                            {sub.length > 0 && <FiChevronDown size={16} />}
                          </Link>

                          {sub.length > 0 && (
                            <div
                              onMouseOver={() => handleShowMenu(navItem)}
                              onMouseLeave={handleHideMenu}
                              className={`hidden absolute peer-hover:flex hover:flex flex-col bg-white ${
                                styles['menu-content']
                              } ${
                                showSubMenu.includes('teams-')
                                  ? styles['sub-menu-open']
                                  : ''
                              } overflow-hidden`}>
                              <div className="relative flex bg-white">
                                <div
                                  className={`w-1/2 flex-grow flex flex-col gap- ${
                                    showSubMenu.includes('teams-') && 'pr-7'
                                  }`}>
                                  {sub.map((item: any, i: number) => (
                                    <Link
                                      href={`${item?.href}`}
                                      className={`z-10 ${styles['nav-item']} ${
                                        showSubMenu.includes('teams-' + i) &&
                                        styles['active']
                                      } flex flex-col cursor-pointer`}
                                      key={i}
                                      onMouseOver={() =>
                                        handleShowSubMenu(navItem, i)
                                      }
                                      // onMouseLeave={handleHideSubMenu}
                                      passHref>
                                      <strong className="flex items-center justify-between">
                                        {item.title}
                                        {item?.sub && (
                                          <FiChevronRight size={18} />
                                        )}
                                      </strong>
                                    </Link>
                                  ))}
                                </div>
                                {navItem === 'Teams & Players' && (
                                  <div
                                    className={`${styles['sub-menu']} pl-7 ${
                                      showSubMenu.includes('teams-')
                                        ? 'block'
                                        : 'hidden'
                                    } w-1/2`}>
                                    {getSubMenu(sub)?.length > 0 &&
                                      getSubMenu(sub)?.map(
                                        (item: any, i: number) =>
                                          item.sub && (
                                            <Link
                                              href={item.href}
                                              passHref
                                              className={`${styles['nav-item']} flex flex-col mb-6`}
                                              key={i}>
                                              <strong className="mb-2">
                                                {item.title}
                                              </strong>
                                            </Link>
                                          )
                                      )}
                                  </div>
                                )}
                              </div>
                            </div>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </nav>
              </div>
              <div className="flex items-center space-x-4 ml-auto">
                <div className="flex items-center">
                  <TextInput
                    icon={HiOutlineSearch}
                    id="search"
                    placeholder="Search Teams, matches, teams..."
                    required
                    type="text"
                    color="light"
                    style={{
                      height: 48,
                      borderRadius: 0,
                      background: 'white',
                      width: 278,
                      borderColor: '#E5E7EB',
                    }}
                  />
                  <Button
                    color="failure"
                    style={{
                      height: 48,
                      borderRadius: 0,
                    }}>
                    Search
                  </Button>
                </div>
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={
                    <Avatar
                      alt="Avatar"
                      size={45}
                      img={'/svgs/avatar.svg'}
                      rounded
                    />
                  }>
                  <Dropdown.Item onClick={() => push('/signup')}>
                    Sign up
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => push('/login')}>
                    Log in
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </header>
      <header
        className={`${styles.container} ${styles.smallNav}  py-5 xl:hidden sticky top-0 z-10 bg-white`}>
        <div className={`border-`}>
          <div className="flex justify-between items-center px-4">
            <div>
              <Link passHref={true} href="/">
                <Image
                  alt="Game360 Logo"
                  className="cursor-pointer"
                  src={'/svgs/logo.svg'}
                  width={130}
                  height={35}
                />
              </Link>
            </div>
            <div className="flex items-center space-x-3">
              <Image
                alt="Search"
                className="mr-3"
                src={'/svgs/search.svg'}
                width={32}
                height={32}
              />
              <div
                className="cursor-pointer"
                onClick={() => setshowMobileList(true)}>
                <Image
                  alt="Game360 Logo"
                  src={'/svgs/menu.svg'}
                  width={32}
                  height={32}
                />
              </div>
            </div>
          </div>
          <div
            className={`fixed inset-0 bg-white ${styles.mobileList} ${
              showMobileList ? `block` : `hidden`
            }`}>
            <div className={`${styles['nav-content']} relative flex flex-col`}>
              <div
                className="cursor-pointer"
                onClick={() => setshowMobileList(false)}>
                <Image
                  alt="Game360 Logo"
                  className={`${styles.close}`}
                  src={'/svgs/close.svg'}
                  width={32}
                  height={32}
                />
              </div>
              <div className="cursor-pointer py-5 bg-white px-4">
                <Link passHref={true} href="/">
                  <Image
                    alt="Game360 Logo"
                    className="cursor-pointer"
                    src={'/svgs/logo.svg'}
                    width={130}
                    height={35}
                  />
                </Link>
              </div>
              <nav className={`${styles.mobileNavLinks} px-4`}>
                <ul>
                  {Object.keys(navItems).map((navItem, i) => {
                    const { href, sub } = navItems[navItem];
                    return (
                      <li key={i}>
                        <div className="">
                          <Disclosure>
                            {({ open }) => (
                              <>
                                {sub.length > 0 ? (
                                  <Disclosure.Button
                                    className={`${
                                      !(
                                        showSubMenu &&
                                        showSubMenu.includes('teams-')
                                      )
                                        ? `block`
                                        : `hidden`
                                    } ${
                                      styles['menu-content']
                                    } flex items-center w-full !text-md font-medium`}>
                                    {navItem}
                                    <FiChevronDown
                                      size={18}
                                      className={`${
                                        open && 'rotate-180'
                                      } inline ml-auto`}
                                    />
                                  </Disclosure.Button>
                                ) : (
                                  <Disclosure.Button
                                    onClick={() => push(`${href}`)}
                                    className={`w-full ${styles['menu-content']} !text-md font-medium flex items-center`}>
                                    {navItem}
                                  </Disclosure.Button>
                                )}

                                {open && (
                                  <Disclosure.Panel
                                    className={`${styles['menu-children-content']} text-xs `}>
                                    <div
                                      className={`${styles['nav-items']} pt-3 ${
                                        !(
                                          showSubMenu &&
                                          showSubMenu.includes('teams-')
                                        )
                                          ? `block`
                                          : `hidden`
                                      }`}>
                                      {sub.map((item: any, i: number) => (
                                        <div
                                          className={`${styles['nav-item']} ${
                                            showSubMenu.includes(
                                              'teams-' + i
                                            ) && styles['active']
                                          } flex flex-col cursor-pointer`}
                                          key={i}
                                          onClick={
                                            item?.sub
                                              ? () =>
                                                  handleShowSubMenu(navItem, i)
                                              : () => {
                                                  push(item?.href);
                                                  setshowMobileList(false);
                                                }
                                          }
                                          // onMouseLeave={handleHideSubMenu}
                                        >
                                          <strong className="flex items-center justify-between font-medium">
                                            {item.title}
                                            {item?.sub && (
                                              <FiChevronRight size={18} />
                                            )}
                                          </strong>
                                        </div>
                                      ))}
                                    </div>
                                    {navItem === 'Teams & Players' && (
                                      <div
                                        className={`${styles['sub-menu']} ${
                                          showSubMenu.includes('teams-')
                                            ? `block`
                                            : `hidden`
                                        }`}>
                                        <div
                                          onClick={handleHideSubMenu}
                                          className="flex items-center cursor-pointer mb-7">
                                          <FiChevronDown
                                            size={16}
                                            className="rotate-90"
                                          />
                                          <span className="ml-3 text-sm">
                                            Back
                                          </span>
                                        </div>
                                        {getSubMenu(sub)?.map(
                                          (item: any, i: number) => (
                                            <Link
                                              href={`${item.href}`}
                                              className={`${styles['nav-item']} flex flex-col mb-6`}
                                              key={i}>
                                              <strong className="mb-2 flex items-center font-medium text-xs text-black-200">
                                                {item.title}
                                              </strong>
                                            </Link>
                                          )
                                        )}
                                      </div>
                                    )}
                                  </Disclosure.Panel>
                                )}
                              </>
                            )}
                          </Disclosure>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </nav>

              <div
                className={`${
                  !(showSubMenu && showSubMenu.includes('teams-'))
                    ? `block`
                    : `hidden`
                } px-4 pb-10 flex flex-col space-y-4`}>
                <Button
                  className="px-10"
                  color="failure"
                  onClick={() => push('/signup')}>
                  <Link href="/signup">Sign up</Link>
                </Button>
                <Button color="failure" outline onClick={() => push('/login')}>
                  <Link href="/login" className="text-primary">
                    Log in
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export { Header };
