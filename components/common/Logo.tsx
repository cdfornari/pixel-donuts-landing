import { Text } from '@nextui-org/react'

export const Logo = () => {
  return (
    <Text
      h1
      color='secondary'
      style={{
        fontFamily: 'var(--donut)',
        cursor: 'pointer',
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none'
      }}
    >
      PIXEL🍩
    </Text>
  )
}