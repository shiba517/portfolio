import React, {useState} from "react"
import HeroSection from "./HeroSection"
import Navigation from "./Navigation"
import Projects from "./Projects"
import Contact from "./Contact"
import AboutMe from "./AboutMe"
import AboutMe2 from "./AboutMe2"



function App() {
    const myInfo = [
        {
            socialMedia: [
                {name: 'LinkedIn', url: 'https://www.linkedin.com/in/shiba-deb-2099b6105/', fa_icon: 'FaLinkedin'},
                {name: 'Github', url: 'https://github.com//shiba517',  fa_icon: 'FaGithub'}
            ],
            projects: [
                {name: 'Secret Underground Lockdown Football Tournament', description: 'This was my submission for the my first project at the Code Institute - Full Stack Developer course. It is a basic HTML5 and CSS page',
                url: 'https://shiba517.github.io/MLSP1-SULFT/', image: '/assets/images/sulft_card_image.png', github: 'https://github.com/shiba517/MLSP1-SULFT'
                },
                {name: 'Gallery Five', description: 'This is the fourth project I had submitted for my Code Institute - Full Stack Software Developer course. This is a website selling pieces of art. It is a full stack website produced with the use of HTML5, CSS, Bootstrap, JS, JQuery, Django, Heroku and AWS.',
                url: 'https://gallery-five.herokuapp.com/', image: '/assets/images/gallery_five_image.png', github: 'https://github.com/shiba517/msp4_gallery_five'
                },
                {name: 'The Memory Game', description: 'This is the project I submitted for my second assignment. Match the cards on top with the overturned cards. It was made with HTML5, CSS, JS and JQuery',
                url: 'https://shiba517.github.io/MSP2-The-Memory-Game/', image: '/assets/images/the_memory_game_image.png', github: 'https://github.com/shiba517/MSP2-The-Memory-Game'
                },
                {name: 'Find me Talent', description: 'This is a project that lets you find football talents via filtering and viewing player data in a graphical format. Demonstrates skills in SQL, NoSQL, Python, Pandas, Streamlit, and ELT/ETL.',
                url: 'https://shiba517-find-me-talent-main-zk90hn.streamlitapp.com/', image: '/assets/images/find_me_talent_image.png', github: 'https://github.com/shiba517/find-me-talent'
                },
                {name: 'Bubble Game', description: "This is a project that I have made because I wanted a taste of what it's like to create a game. I used HTML <canvas> element and mainly coded in JavaScript. The game is not complete and further info regarding the state of the game can be found in the README. I hope you will enjoy playing the game!",
                url: 'https://shiba517.github.io/bubble_game/', image: '/assets/images/bubble_game_image.png', github: 'https://github.com/shiba517/bubble_game'
                },
                {name: 'Portfolio', description: "This is my personal portfolio. I created this using React and deployed it on netlify.com",
                url: 'https://boisterous-griffin-71958e.netlify.app/', image: '/assets/images/personal_website_image.png', github: 'https://github.com/shiba517/portfolio'
                }
            ],
            contacts: [
                {name: 'Whatsapp', contact_info: '+4407960545799', href: 'https://wa.me/+447960545799', fa_icon: 'FaWhatsapp'},
                {name: 'Email', contact_info: 'shiba.cdeb@gmail.com', href: 'mailto:shiba.cdeb@gmail.com', fa_icon: 'FaEnvelope'},
            ],
            aboutme: [
                {card: [
                    {title: 'Bio',
                    fa_icon: 'FaSmileBeam',
                    context: 'I am a recently graduated Junior Fullstack Software Developer knocking on the doors of the tech world to start a new chapter in my life. Comfortable in my skills of SQL, JavaScript, Python, Django, MongoDB, AWS, and HTML & CSS. I also bring experience in communications with the public which came in use whilst working in the hospitality industry, and have been exposed to the world of creativity with my time in hair and beauty. Creative, collaborative, and certainly open to challenges.'}
                ]},
                {card: [
                    {title: 'Skills',
                    fa_icon: 'FaMugHot',
                    context: [
                        // {headingName: 'Languages', items: [{name: 'JavaScript'}, {name: 'Python'}, {name: 'HTML5'}, {name: 'CSS3'}]},
                        // {headingName: 'Languages2', items: [{name: 'JavaScript2'}, {name: 'Python2'}, {name: 'HTML52'}, {name: 'CSS32'}]},
                        // {headingName: 'Languages3', items: [{name: 'JavaScript'}, {name: 'Python'}, {name: 'HTML5'}, {name: 'CSS3'}]},
                        // {headingName: 'Languages4', items: [{name: 'JavaScript'}, {name: 'Python'}, {name: 'HTML5'}, {name: 'CSS3'}]},

                        {headingName: 'Languages', items: ['JavaScript', 'Python', 'HTML5', 'CSS3', 'SQL']},
                        {headingName: 'Databases', items: ['Django', 'MongoDB', 'Django', 'PySpark', 'Pig', 'MySQL']},
                        {headingName: 'Frameworks/Libraries', items: ['Jquery', 'React', 'Bootsrap', 'Materialize', 'Hadoop', 'Boto3', 'Streamlit', 'Pandas']},
                        {headingName: 'Version Control', items: ['Github']}
                    ]}
                ]},
                {card: [
                    {title: 'Education',
                    fa_icon: 'FaUserGraduate',
                    context: 'Code Institute (grad. 2022) - Full Stack Developer'},
                    
                ]},
                
            ]     
        }
    ]

    return (
        <div>
            <header>
                <Navigation></Navigation>
            </header>
            <main>
                <HeroSection socialmediaPlatforms={myInfo[0].socialMedia}></HeroSection>
                <AboutMe2 aboutme={myInfo[0].aboutme}></AboutMe2>
                <Projects allProjects={myInfo[0].projects}></Projects>
                <Contact allContacts={myInfo[0].contacts}></Contact>
            </main>
        </div>
    )
}

export default App