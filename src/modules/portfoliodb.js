import { ref } from 'vue'

const getPortfolio = () => {
    const state = ref ([
        {
            id: 1,
            title: 'BIO-VERS',
            image: '../assets/img/biovers-profile.jpg',
            cover: '../assets/img/biovers-img.jpg',
            description: 'What is a perfect cinema app? What features does it need? The answer to these questions is Bio-Vers. With extended research and development, we present to you a revolutionary cinema app that will provide you an easy & enjoyable cinema experience!',
            link: 'https://1drv.ms/f/s!AqmkXcrlG_k4g3E_BYvy9DwX18sH?e=I3cI9r',
            category: 'UX',
            tech: 'XD, Illustrator & Photoshop',
            teammembers: 'Team - Alberte, Anne-Sofie, Tanya & Dream'
        },
        {
            id: 2,
            title: 'WORKEX',
            image: '../assets/img/workex-profile.jpg',
            cover: '../assets/img/workex-img.jpg',
            description: "Workex was a business & employment app development project that focused on creating an app for students to find study-relevant jobs that are not only user-friendly but also able to help the user discover job opportunities with the help of an ai based algorithm.",
            link: 'https://1drv.ms/f/s!AqmkXcrlG_k4g3KLtWArX8aXqY30?e=yuyLaw',
            category: 'UX',
            tech: 'XD, Illustrator & Photoshop',
            teammembers: 'Team - Alberte, Anne-Sofie & Dream'
        },
        {
            id: 3,
            title: 'NOODLE',
            image: '../assets/img/noodle-profile.jpg',
            cover: '../assets/img/noodle-img.jpg',
            description: 'This noodle commercial was a blast to make! The goal of this project was to make a cup-noodle commercial for students & young people as the main target audience. This short video was filmed in the format of a TikTok video. The format makes it ideal for other social media features such as YouTube Shorts & Instagram Reels as well.',
            link: 'https://youtube.com/shorts/JON6C0CkUfc',
            category: 'Video',
            tech: 'Premiere Pro & After Effects',
            teammembers: 'Team - Alberte, Anne-Sofie & Dream'
        },
        {
            id: 4,
            title: 'ESBJERG',
            image: '../assets/img/beyond-esbjerg-profile.jpg',
            cover: '../assets/img/beyond-esbjerg-img.jpg',
            description: 'Beyond Esbjerg was an event concept for the Esbjerg rebranding project. The main goal of this project was to create an event that could attract people to Esbjerg as well as showcase what Esbjerg has to offer. This project was carefully planned, analyzed & researched to make this the most unique & fun experience that anyone can enjoy.',
            link: 'https://1drv.ms/f/s!AqmkXcrlG_k4g3NyeoSxDDgtrFB0?e=DHX5u0',
            category: 'Branding',
            tech: 'Premiere Pro, After Effects, Photoshop & Illustrator',
            teammembers: 'Team - Alberte, Anne-Sofie, Lykke & Dream'
        },
        {
            id: 5,
            title: 'BBQ 2023',
            image: '../assets/img/bbq-profile.jpg',
            cover: '../assets/img/bbq-img.jpg',
            description: 'For the 2023 DM in American BBQ, we were assigned to create a website for our client from Longhorn. This website was used as a concept prototype for their new web design.',
            link: 'https://1drv.ms/f/s!AqmkXcrlG_k4g3SplQAq5WxIE65B?e=Xl6UaE',
            category: 'Web',
            tech: 'XD, Illustrator, Indesign, Photoshop & Visual Studio Code',
            teammembers: 'Team - Alberte, Helena, Marie & Dream'
        },
    ])

    return {
        state
    }
}

export default getPortfolio