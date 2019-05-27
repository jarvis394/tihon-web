import React from 'react'

import HomeIcon from '@material-ui/icons/HomeRounded'
import ListIcon from '@material-ui/icons/ListRounded'
import ProfileIcon from '@material-ui/icons/PersonRounded'
import SettingsIcon from '@material-ui/icons/SettingsRounded'

export const API_URL = 'https://tihon.glitch.me/api'
export const DRAWER_WIDTH = 240
export const routes = [
  {
    name: 'home',
    path: '',
    icon: <HomeIcon />
  },
  {
    name: 'commands',
    path: 'commands',
    icon: <ListIcon />
  },
  { 
    name: 'profile',
    path: 'profile',
    icon: <ProfileIcon />
  },
  {
    name: 'settings',
    path: 'settings',
    icon: <SettingsIcon />
  }
]
export const languages = [
  {
    code: 'en',
    title: '🇺🇸 English'
  },
  {
    code: 'ru',
    title: '🇷🇺 Русский',
  },
]