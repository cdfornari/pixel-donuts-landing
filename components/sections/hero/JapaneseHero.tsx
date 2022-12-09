import { Grid, Text } from '@nextui-org/react'
import Image from 'next/image'

export const JapaneseHero = () => {
  return (
    <>
        <Text h2>
            世界で最高のドーナツ
        </Text>
        <Text h3>
            朝食、コーヒーなども販売しています
        </Text>
        <Image
            src='/donut.png'
            alt='donut'
            width={500}
            height={500}
        />
    </>
  )
}