import {
  PropsWithChildren
} from 'react'
import {
  AppHeader,
  LinkProps
} from '@/components/app-header'

export type MainLayoutProps = {}

const links: LinkProps[] = [
  {
    link: '#over',
    label: 'Over ons'
  },
  {
    link: '#werkzaamheden',
    label: 'Werkzaamheden'
  },
  {
    link: '#projecten',
    label: 'Projecten'
  },
  {
    link: '#offerte',
    label: 'Offerte'
  },
  {
    link: '#contact',
    label: 'Contact'
  }
]

export const MainLayout = ({ children }: MainLayoutProps & PropsWithChildren) => {
  return (
    <div>
      <AppHeader links={links} />
      {children}
    </div>
  )
}