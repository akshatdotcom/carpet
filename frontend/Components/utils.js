export const services = [
    {
        id: 1,
        title: 'Cosmetic',
        name: 'cosmetic',
        url: 'cut-outline'
    },
    {
        id: 2,
        title: 'Music',
        name: 'music',
        url: 'musical-notes-outline'
    },
    {
        id: 3,
        title: 'Technology',
        name: 'technology',
        url: 'desktop-outline'
    },
    {
        id: 4,
        title: 'Photography',
        name: 'photography',
        url: 'camera-outline'
    },
    {
        id: 5,
        title: 'Floral Design',
        name: 'floralDesign',
        url: 'rose-outline'
    },
    {
        id: 6,
        iconName: 'digitalArt',
        title: 'Digital Art',
        name: 'digitalArt',
        url: 'brush-outline'
    },
    {
        id: 7,
        title: 'Videography',
        name: 'videography',
        url: 'videocam-outline'
    },
    {
        id: 8,
        title: 'Coding',
        name: 'coding',
        url: 'code-slash-outline'
    },
    {
        id: 9,
        title: "Arts & Crafts",
        name: 'artsAndCraft',
        url: 'easel-outline'
    },
    {
        id: 10,
        title: 'Gardening',
        name: 'gardening',
        url: 'leaf-outline',
    }
];

export const searchPageOptions = [
    { name: 'Arts and Crafts', url: 'easel-outline', desc: 'Knitting, Canvas Work, Crocheting ' },
    { name: 'Coding', url: 'code-slash-outline', desc: 'Web Development, Front-end, Back-end' },
    { name: 'Cosmetic', url: 'cut-outline', desc: 'Haircuts, Nails, Eyelashes, Eyebrows' },
    { name: 'Digital Design', url: 'brush-outline', desc: 'Logo Dseign, Digital Art, Graphics, Tattoo Design' },
    { name: 'Floral Design', url: 'rose-outline', desc: 'Bouquets, Reefs, Crowns, Decorations' },
    { name: 'Music', url: 'musical-notes-outline', desc: 'Mixing, Producing, Vocals, Recording' },
    { name: 'Photography', url: 'camera-outline', desc: 'Senior Portraits, Editing, Photoshop' },
    { name: 'Videography', url: 'videocam-outline', desc: 'Short Films, Organization Promos' },
    { name: 'Cleaning', url: 'color-fill-outline', desc: 'Deep Clean, UV Disinfection' },
    { name: 'Carpentry', url: 'hammer-outline', desc: 'Flooring, Painting' },
];

export const bookings = [
    {
        id: 1,
        name: 'John Doe',
        service: 'Photography',
        jobDescription: 'Job Description: Portrait Headshots',
        date: 'Date: 4/26/23',
        time: 'Time: 11AM - 1PM',
        location: '101 25th St, Austin, TX 78705',
        image: require('../assets/Photographer.png'),
        stars: '4.7',
        reviews: '(36 Reviews)',
        cost: '$36',
    },
    {
        id: 2,
        name: 'Jane Evel',
        service: 'Cosmetics',
        jobDescription: 'Job Description: Formal Makeup',
        date: '4/28/23',
        time: '12PM - 4PM',
        location: '2624 Whitis Ave, Austin, TX 78705',
        image: require('../assets/NailTechModified.png'),
        stars: '5.0',
        reviews: '(102 Reviews)',
        cost: '$56',
    },
    {
        id: 3,
        name: 'Jill Ross',
        service: 'Videography',
        jobDescription: 'Job Description: Hair Retouching',
        date: '5/8/23',
        time: '5PM - 7PM',
        location: '2804 Elkins Blvd, Sugar Land, TX 77479',
        image: require('../assets/Videographer.png'),
        stars: '3.7',
        reviews: '(36 Reviews)',
        cost: '$36',
    },

    {
        id: 4,
        name: 'Bill Waters',
        service: 'Nails (Cosmetics)',
        jobDescription: 'Job Description: Gel Polish, Acrylics',
        date: '4/28/23',
        time: '6PM - 7PM',
        location: '2804 Elkins Blvd, Sugar Land, TX 77479',
        image: require('../assets/Cosmetologist.png'),
        stars: '4.2',
        reviews: '(87 Reviews)',
        cost: '$25',
    },
];

export const filters = [
    {
        id: 1,
        title: 'Filter',
        name: 'filter',
        url: 'filter-outline'
    },
    {
        id: 2,
        title: 'Haircut',
        name: 'haircut',
        url: 'haircut-outline'
    },
    {
        id: 3,
        title: 'Nails',
        name: 'Nails',
        url: 'nail-outline'
    },
    {
        id: 4,
        title: 'Makeup',
        name: 'makeup',
        url: 'makeup-outline'
    },
    {
        id: 5,
        title: 'Beard',
        name: 'beard',
        url: 'beard-outline'
    },
    {
        id: 6,
        title: 'Eyebrows',
        name: 'eyebrows',
        url: 'eyebrows-outline'
    },
    {
        id: 7,
        title: 'Eyelashes',
        name: 'eyelashes',
        url: 'eyelashes-outline'
    },
    {
        id: 8,
        title: 'Hairstylist',
        name: 'hairstylist',
        url: 'hairstylist-outline'
    },
];

export const typesServices = [
    {type: 'Gel Polish Removal',
     price: 20
    },
    {type: 'Acrylic Nails',
     price: 50
    },
    {type: 'French Tip',
     price: 15
    },
    {type: 'Rhinestones',
     price: 10
    },
    {type: 'Custom Add-Ons',
     price: 15
    },
];