import { FC } from 'react'
import { Container, Button, Text, Spacer } from '@nextui-org/react';
import {MdAddCircleOutline, MdRemoveCircleOutline } from "react-icons/md";

interface Props {
  count: number;
  maxValue: number;
  onChange: (value: number) => void; 
}

export const Counter: FC<Props> = ({count,maxValue,onChange}) => {
  return (
    <Container display='flex' alignItems='center' >
        <Button
            onPress={() => maxValue > 0 && onChange(Math.max(count - 1, 1))}
            light color="default"
            auto
            icon={<MdRemoveCircleOutline size={25} />}
        />
        <Spacer x={1} />
        <Text>{count}</Text>
        <Spacer x={1} />
        <Button
            onPress={() => maxValue > 0 && onChange(Math.min(count + 1, maxValue))}
            light 
            aria-label = "Increment"
            color="default"
            auto
            icon={<MdAddCircleOutline size={25} />}
        />
    
    </Container>
  )
}