import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './Pages/All';
import FullstackDevelopment from './Pages/FullstackDevelopment';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar';
import imagefsd1 from'./image/best fullstack development project.jpg'
import imagefsd2 from'./image/react.jpg'
import imageds from'./image/datascience.webp'
import imagecs2 from'./image/cybersecurityvsethical.webp'
import imagecs1 from'./image/cybersecuity-importance.gif'
import imagecrer1 from'./image/datasciencevsdataanalytics.webp'
import imagecrer2 from'./image/howdoishift.jpg'


const App = () => {
const data=[
  {
    head:"FullStack",
    image:imagefsd1,
    content:"Best Full-Stack Development Project Ideas in 2024",
    author:"By Isha Sharma",
    date:"25 Mar, 2024"
  },
  {
    head:"FullStack",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
    content:"How Long Would It Take to Be a Full Stack Developer?",
    author:"By Meghana D",
    date:"26 Mar, 2024"
  },
  {
    head:"FullStack",
    image:imagefsd2,
    content:"6 Essential Prerequisites For Learning ReactJS",
    author:"By Ramkumar",
    date:"25 Mar, 2024"
  },
  {
    head:"DataScience",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    content:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    author:"By Isha Sharma",
    date:"Apr 16, 2024"
  },
  {
    head:"DataScience",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
    content:"12 Real-World Data Science Examples: Power Of Data Science",
    author:"By Lukesh S",
    date:"25 Mar, 2024"
  },
  {
    head:"DataScience",
    image:imageds,
    content:"Can A Commerce Student Do Data Science?",
    author:"By Saakshi Priyadarshini",
    date:"16 Apr, 2024"
  },
  {
    head:"CyberSecurity",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    author:"By Jaishree Tomar",
    date:"Mar 26, 2024"
  },
  {
    head:"CyberSecurity",
    image:imagecs1,
    content:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    author:"By Tushar Vinocha",
    date:"Oct 04, 2023"
  },
  {
    head:"CyberSecurity",
    image:imagecs2,
    content:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    author:"By Tushar Vinocha",
    date:"16 Apr, 2024"
  },
  {
    head:"career",
    image:imagecrer1,
    content:"Data Science vs Data Analytics | Best Career Choice in 2024",
    author:"By Lahari Chandana",
    date:"Apr 16, 2024"
  },
  {
    head:"career",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/08/feature-image-How-to-Become-a-Motion-Graphics-Designer.webp",
    content:"How to Become a Motion Graphics Designer – Complete Career Roadmap",
    author:"By Meghana D",
    date:"16 Apr, 2024"
  },
  {
    head:"career",
    image:imagecrer2,
    content:"As a Software Engineer, How Do I Shift My Career to DevOps?",
    author:"By Lahari Chandana",
    date:"Apr 16, 2024"
  },
]

  return (
    <div>
      <BrowserRouter>
      <div>
      <NavBar/>
      </div>
      <Routes>
        <Route path='/' element={<All data={data}/>}/>
        <Route path='/FullStack' element={<FullstackDevelopment data={data}/>}/>
        <Route path='/DataScience' element={<DataScience data={data}/>}/>
        <Route path='/CyberSecurity' element={<CyberSecurity data={data}/>}/>
        <Route path='/Career' element={<Career data={data}/>}/>
        <Route path='/*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    

  );
};

export default App;