import { PortableText } from '@portabletext/react'
import style from '../Home.module.css'
import components from './components'

const Content = ({ blocks, full, children }) => {
  if (!children && (!blocks || blocks.length === 0)) return null

  return (
    <div className={`${style.Content} Content`} data-full={full}>
      <PortableText value={blocks} components={{ ...components }} />
      {children}
    </div>
  )
}

export default Content
