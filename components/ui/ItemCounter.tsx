import { FC } from 'react'
import { Button, Text} from '@nextui-org/react'
interface Props {
  count: number;
  maxValue: number;
  onChange: (value: number) => void;
}

export const ItemCounter: FC<Props> = ({count,maxValue,onChange}) => {
  return (
    <Button.Group bordered color='secondary'>
        <Button
          onClick={() => maxValue > 0 && onChange(Math.max(count - 1, 1))}
        >
            -
        </Button>
        <Button>{count}</Button>
        <Button
          onClick={() => maxValue > 0 && onChange(Math.min(count + 1, maxValue))}
        >
            +
        </Button>
    </Button.Group>
  )
}