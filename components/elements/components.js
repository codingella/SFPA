import Link from 'next/link'
import BlockText from './BlockText'

const components = {
  undefined: (props) => {
    return null
  },

  block: {
    normal: ({ children }) => <BlockText type="normal">{children}</BlockText>,
    h5: ({ children }) => <h5>{children}</h5>,
  },

  marks: {
    uppercase: (props) => (
      <span
        style={{
          textTransform: 'uppercase',
        }}
      >
        {props?.children}
      </span>
    ),

    link: ({ value, children }) => {
      const { linkType, href, internalReference, customPath } = value

      if (linkType === 'external') {
        return (
          <a href={href} target="_blank" rel="noopener noreferrer">
            {children}
          </a>
        )
      } else if (linkType === 'internal' && internalReference?.slug?.current) {
        return (
          <Link href={`/${internalReference.slug.current}`}>{children}</Link>
        )
      } else if (linkType === 'custom' && customPath) {
        return <Link href={customPath}>{children}</Link>
      }

      return null
    },
  },

  types: {
    undefined: (props) => {
      return null
    },
  },
}

export default components
