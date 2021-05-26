const postIts = [
    {
        size: 1,
        title: 'A trip Bremen',
        text: 'I once went to a trip in Bremen and I loved it',
        type: 'Story',
        img_url: 'https://i.ibb.co/NZ7R3j1/bremen-viertel.jpg'
    },
    {
        size: 0,
        title: 'A nice flower',
        text: 'It grows if you give it time',
        type: 'Story',
        img_url: 'https://i.ibb.co/BLjyGtj/Who.jpg'
    },
    {
        size: 0,
        title: '',
        text: 'Good friends will come your way',
        type: 'Message',
        img_url: 'https://i.ibb.co/0hwzYjc/chiuaua.jpg'
    },
    {
        size: 0,
        title: '',
        text: 'A good trip will do you good',
        type: 'Message',
        img_url: 'https://i.ibb.co/wy7bs59/61-original.png'
    },
    {
        size: 0,
        title: '',
        text: 'A good text',
        type: 'Message',
        img_url: 'https://i.ibb.co/Yk0PZ1s/Nature.jpg'
    },
    {
        size: 1,
        title: 'A good Title',
        text: 'A good text',
        type: 'Story',
        img_url: 'https://i.ibb.co/XYN4ZWd/tucan-0.jpg'
    },
]

const MockChats = [
    {
        id: '1',
        name: 'Tranquilidad',
        date: 'Date'
    },
    {
        id: '2',
        name: 'Alegria',
        date: 'Date'},
    {
        id: '3',
        name: 'Compasion',
        date: 'Date'
    }
]

export const getPostIts2 = () => {
    return postIts
}

export const getChats = () => {
    return MockChats
}