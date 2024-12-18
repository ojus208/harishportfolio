import { dev1,dev2, dream1, dream2, dream3, dream4,netflix1,netflix2,netflix3,nike,nike1,nike2,nike3,global,global1,global2,global3} from "../images"
import Image from "next/image"
import { javascript, next1, react } from "../icon"

export const projects = [

{
    'name':"Dream11",
    "description":"This is a Dream11 clone built to simulate the experience of fantasy cricket team creation, where users can build their own cricket teams, participate in leagues, and compete based on real match statistics. The website is designed with a focus on simplicity, functionality, and user engagement, using HTML, CSS, JavaScript, and ReactJs.",
    'images':[dream1,dream2,dream3,dream4],
    'techstack':[
        {
            'name':'react',
            'iconURL':react
        }
    ],
    'livelink':"https://"
},

{ 
    'name':"Global Technology",
    "description":"Global Technology Service is an innovative platform designed to empower businesses and individuals by providing tailored website creation services. Our platform simplifies the process of building professional, responsive, and user-friendly websites, making it accessible for all levels of technical expertise. Whether you are a startup, a small business, or an enterprise, we offer a range of customizable solutions to meet your specific needs.",
    'images':[global,global1,global2,global3],
    'techstack':[
        {
            'name':'react',
            'iconURL':react
        }
    ],
    'livelink':"https://"
}
,
{ 
    'name':"Nike",
    "description":"This is a Nike website clone designed to replicate the clean, modern, and user-centric interface of the popular global sportswear brand. The clone includes a fully responsive design built using HTML, CSS, JavaScript, and NextJs. The website features product listings, detailed product pages, and an intuitive shopping experience. Users can browse through various categories like footwear, apparel, and accessories, with filters to narrow down their preferences.",
    'images':[nike,nike1,nike2,nike3],
    'techstack':[
        {
            'name':'Next',
            'iconURL':next1
        }
    ],
    'livelink':"https://"
}
,
{
    'name':"Netflix",
    "description":"This is a fully functional Netflix clone that replicates the core features of the popular streaming platform. The website includes a responsive design built with HTML, CSS, JavaScript, and ReactJS. One of the key features of this clone is the interactive trailer section. Users can browse through a collection of movies and TV shows, and when they hover over a title, a preview trailer automatically plays, providing an engaging preview experience similar to Netflix's original interface.",
    'images':[netflix1,netflix2,netflix3],
    'techstack':[
        {
            'name':'react',
            'iconURL':react
        }
    ],
    'livelink':"https://"
}

]