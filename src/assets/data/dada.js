import heart_pendant1 from '../images/goods-photos/heart-pendant/1.webp'
import heart_pendant2 from '../images/goods-photos/heart-pendant/2.webp'
import heart_pendant3 from '../images/goods-photos/heart-pendant/3.webp'

import twin_rings2 from '../images/goods-photos/twin-rings/2.webp'
import twin_rings1 from '../images/goods-photos/twin-rings/1.webp'
import twin_rings3 from '../images/goods-photos/twin-rings/3.webp'
import twin_rings4 from '../images/goods-photos/twin-rings/4.webp'

import heart_ring1 from '../images/goods-photos/heart-ring/1.webp'

import faceted_ring1 from '../images/goods-photos/faceted-ring/1.webp'

import classic_ring1 from '../images/goods-photos/classic-ring/1.webp'
import sacura_rings1 from '../images/goods-photos/sakura-twin-rings/1.webp'
import sacura_rings2 from '../images/goods-photos/sakura-twin-rings/2.webp'
import crow_pendant from '../images/goods-photos/crow-pendant/1.webp'
// import  from '../images/goods-photos/ring-heart-box.png'
// import ring_heart_box from '../images/goods-photos/ring-heart-box.png'

const shop_data = [
    {
        id: 1,
        title: 'Подвеска',
        name: "Сердце Айсберга",
        cost: 599,
        category: 'pendant',
        material: ['Амарант', 'Эпоксидная смола'],
        catalog: 'heart-pendant',
        galary: [heart_pendant1, heart_pendant2, heart_pendant3],
        img: heart_pendant1,
        another: [
            ['Комплектация', 'Мешочек для хранения, тряпочка для чистки, цепочка']
        ]
    },
    {
        id: 2,
        title: 'Кольца парные',
        name: 'Инь-Янь',
        category: 'ring',
        cost: 1199,
        material: ['Дуб'],
        img: twin_rings2,
        catalog: 'twin-rings',
        galary: [twin_rings1, twin_rings2, twin_rings3, twin_rings4],
        another: [
            ['Комплектация', 'Мешочек для хранения']
        ]
    },
    {
        id: 3,
        title: 'Кольцо',
        name: 'Сердце',
        category: 'ring',
        cost: 599,
        material: ['Амарант', 'Клен', 'Эпоксидная смола'],
        img: heart_ring1,
        catalog: 'heart-ring',
        galary: [heart_ring1],
        another: [
            ['Комплектация', 'Мешочек для хранения, тряпочка для чистки']
        ]
    },
    {
        id: 4,
        title: 'Кольцо',
        name: 'Айсберг',
        category: 'ring',
        cost: 599,
        material: ['Клен'],
        img: faceted_ring1,
        catalog: 'faceted-ring',
        galary: [faceted_ring1],
        another: [
            ['Комплектация', 'Мешочек для хранения']
        ]
    },
    {
        id: 5,
        title: 'Кольцо',
        name: 'Классик',
        category: 'ring',
        cost: 499,
        material: ['Клер'],
        img: classic_ring1,
        catalog: 'classic-ring',
        galary: [classic_ring1],
        another: [
            ['Комплектация', 'Мешочек для хранения']
        ]
    },
    {
        id: 6,
        title: 'Кольца парные',
        name: 'Сакура',
        category: 'ring',
        cost: 1299,
        material: ['Дуб'],
        img: sacura_rings2,
        catalog: 'sacura-twin-rings',
        galary: [sacura_rings1, sacura_rings2],
        another: [
            ['Комплектация', 'Мешочек для хранения']
        ]
    },
    {
        id: 7,
        title: 'Подвеска',
        name: 'Ворон',
        category: 'pendant',
        cost: 999,
        material: ['Дуб'],
        img: crow_pendant,
        catalog: 'crow-pendant',
        galary: [crow_pendant],
        another: [
            ['Комплектация', 'Мешочек для хранения, цепочка']
        ]
    },
    // {
    //     id: 6,
    //     name: 'Кольцо "Сердце"',
    //     cost: 500,
    //     material: 'Амарант',
    //     img: ring_heart_box,
    // },
]

export default shop_data