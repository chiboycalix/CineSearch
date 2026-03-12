

import Logo from '../logo'
import { NavLink, useNavigate } from "react-router";
import { Input } from '../ui/input';
import { Icon } from '@iconify/react';
import Avatar from '@/assets/avatar.png';
import { useEffect, useState } from 'react';

const navLinks = [
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'Movies',
    to: '/movies',
  },
  {
    label: 'TV Shows',
    to: '/tv-shows',
  },
  {
    label: 'My List',
    to: '/my-list',
  },
  {
    label: 'People',
    to: '/people',
  },
]

type NavItemProps = {
  label: string;
  to: string;
}

const NavItem = ({ label, to }: NavItemProps) => {
  return (
    <li className='text-white'>
      <NavLink
        to={to}
        className={({ isActive }: { isActive: boolean }) =>
          isActive ? 'text-red-500 text-sm' : 'text-[#6b7280] text-sm'
        }
      >
        {label}
      </NavLink>
    </li>
  )
}

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    if (searchQuery.length > 0) {
      navigate(`/search-result?query=${searchQuery}`)
    } else {
      navigate('/')
    }
  }, [searchQuery])

  return (
    <div className='bg-[#221010] w-full h-24 border-b border-[#4a1111] flex items-center justify-between gap-2 px-20'>
      <div className='flex items-center gap-8'>
        <Logo />
        <ul className='flex items-center gap-8'>
          {
            navLinks.map((link) => (
              <NavItem key={link.label} label={link.label} to={link.to} />
            ))
          }
        </ul>
      </div>
      <div className='text-white flex items-center gap-6'>
        <div className='flex items-center gap-2 relative'>
          <Icon icon="material-symbols:search" width={20} height={20} className='text-[#6b7280] absolute left-2 top-1/2 -translate-y-1/2' />
          <Input
            placeholder="Search Movies..."
            className='pl-8 text-[#6b7280] bg-[#391011] border-[#4a1111] focus-visible:ring-0 focus-visible:ring-offset-0'
            onChange={(event) => setSearchQuery(event.target.value)}
          // value={searchQuery}
          />
        </div>
        <img src={Avatar} className='w-10 h-10 rounded-full' />
      </div>
    </div>
  )
}

export default Header