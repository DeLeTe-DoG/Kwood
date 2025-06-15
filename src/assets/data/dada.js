import heart_pendant1 from '../images/goods-photos/heart-pendant/1.png'
import heart_pendant2 from '../images/goods-photos/heart-pendant/2.png'
import heart_pendant3 from '../images/goods-photos/heart-pendant/3.png'

import twin_rings2 from '../images/goods-photos/twin-rings/2.png'
import twin_rings1 from '../images/goods-photos/twin-rings/1.png'
import twin_rings3 from '../images/goods-photos/twin-rings/3.png'
import twin_rings4 from '../images/goods-photos/twin-rings/4.png'

import heart_ring1 from '../images/goods-photos/heart-ring/1.png'

import faceted_ring1 from '../images/goods-photos/faceted-ring/1.jpg'

import classic_ring1 from '../images/goods-photos/classic-ring/1.jpg'

// import  from '../images/goods-photos/ring-heart-box.png'
// import ring_heart_box from '../images/goods-photos/ring-heart-box.png'

const shop_data = [
    {
        id: 1,
        title: 'Подвеска',
        name: "Сердце",
        cost: 600,
        material: ['Амарант', 'Эпоксидная смола'],
        catalog: 'heart-pendant',
        galary: [heart_pendant1, heart_pendant2, heart_pendant3],
        img: heart_pendant1,
        another: [
            ['Комплектация', 'Мешочек для хранения, тряпочка для чистки']
        ]
    },
    {
        id: 2,
        title: 'Кольца парные',
        name: 'Инь-Янь',
        cost: 1000,
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
        cost: 500,
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
        cost: 500,
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
        cost: 500,
        material: ['Клен'],
        img: classic_ring1,
        catalog: 'classic-ring',
        galary: [classic_ring1],
        another: [
            ['Комплектация', 'Мешочек для хранения']
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