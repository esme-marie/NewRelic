import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as GiIcons from 'react-icons/gi';
import * as BiIcons from 'react-icons/bi';
import * as TiIcons from 'react-icons/ti';
import * as FiIcons from 'react-icons/fi';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Forest Watch',
    path: '/Globalforestwatch',
    // icon: <IoIcons.IoIosPaper />,
    icon: <GiIcons.GiForest />,
    cName: 'nav-text'
  },
  {
    title: 'Donate',
    path: '/donate',
    icon: <BiIcons.BiDonateHeart />,
    cName: 'nav-text'
  },
  {
    title: 'Shop Sustainably',
    path: '/instaLinks',
    icon: <TiIcons.TiShoppingCart />,
    cName: 'nav-text'
  },
  {
    title: 'Quiz',
    path: '/quiz',
    icon: <TiIcons.TiPencil />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/message',
    icon: <FiIcons.FiMail />,
    cName: 'nav-text'
  }
  
];

