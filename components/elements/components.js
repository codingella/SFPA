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

      const handleLinkClick = (e) => {
        e.stopPropagation() // Prevent the parent onClick from being triggered
      }

      if (linkType === 'external') {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            {children}
          </a>
        )
      } else if (linkType === 'internal' && internalReference?.slug?.current) {
        return (
          <Link
            href={`/${internalReference.slug.current}`}
            onClick={handleLinkClick}
          >
            {children}
          </Link>
        )
      } else if (linkType === 'custom' && customPath) {
        return (
          <Link href={customPath} onClick={handleLinkClick}>
            {children}
          </Link>
        )
      } else if (linkType == null) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
          >
            {children}
          </a>
        )
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
