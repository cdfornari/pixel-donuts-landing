import { Product } from '../models';

export const products: Product[] = [
    {
        id: 1,
        titleVE: 'Sandwich de chorizo, huevo y queso',
        titleJP: 'チーズとソーセージのサンドイッチ',
        price: 3.99,
        priceYen: 450,
        comparativePrice: 4.99,
        image: 'Sausage_Egg&Cheese.png',
        category: 'breakfast'
    },
    {
        id: 2,
        titleVE: 'Wrap con bacon, huevo y queso',
        titleJP: 'ベーコン、卵、チーズのラップ',
        price: 4.99,
        priceYen: 550,
        comparativePrice: 5.99,
        image: 'Bacon_Egg&Cheese_Wrap.png',
        category: 'breakfast'
    },
    {
        id: 3,
        titleVE: 'Sandwich de huevo y queso',
        titleJP: '卵とチーズのサンドイッチ',
        price: 3.99,
        priceYen: 450,
        comparativePrice: 4.99,
        image: 'Egg&Cheese.png',
        category: 'breakfast'
    },
    {
        id: 4,
        titleVE: 'Cafe latte',
        titleJP: 'カフェラテ',
        price: 1.99,
        priceYen: 230,
        comparativePrice: 2.99,
        image: 'hot-latte.png',
        category: 'coffee'
    },
    {
        id: 5,
        titleVE: 'Cafe latte frio',
        titleJP: 'アイスラテ',
        price: 2.49,
        priceYen: 290,
        comparativePrice: 3.49,
        image: 'iced-latte.png',
        category: 'coffee'
    },
    {
        id: 6,
        titleVE: 'Cafe latte especial frio',
        titleJP: 'アイススペシャルラテ',
        price: 2.99,
        priceYen: 350,
        comparativePrice: 3.49,
        image: 'Iced Signature Latte@2x.png',
        category: 'coffee'
    },
    {
        id: 7,
        titleVE: 'Torta donut',
        titleJP: 'ドーナツ',
        price: 2.99,
        priceYen: 350,
        comparativePrice: 3.49,
        image: 'donut-cake.png',
        category: 'donuts'
    },
    {
        id: 8,
        titleVE: 'Donut de chocolate',
        titleJP: 'チョコレートドーナツ',
        price: 1.49,
        priceYen: 170,
        comparativePrice: 1.99,
        image: 'chocolate-donut.png',
        category: 'donuts'
    },
    {
        id: 9,
        titleVE: 'Donut relleno de chocolate',
        titleJP: 'チョコレートクリームドーナツ',
        price: 1.99,
        priceYen: 230,
        comparativePrice: 2.49,
        image: 'donut-relleno.png',
        category: 'donuts'
    }
]