import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import All from './Pages/All';
import FullstackDevelopment from './Pages/FullstackDevelopment';
import DataScience from './Pages/DataScience';
import CyberSecurity from './Pages/CyberSecurity';
import Career from './Pages/Career';
import NotFound from './Pages/NotFound';
import NavBar from './Components/NavBar';

const App = () => {
const data=[
  {
    head:"fsd",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/person-front-computer-working-html.jpg",
    content:"Best Full-Stack Development Project Ideas in 2024",
    author:"By Isha Sharma",
    date:"25 Mar, 2024"
  },
  {
    head:"fsd",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/how-long-it-would-it-take-to-learn-full-stack-development_-1536x804.webp",
    content:"How Long Would It Take to Be a Full Stack Developer?",
    author:"By Meghana D",
    date:"26 Mar, 2024"
  },
  {
    head:"fsd",
    image:"https://www.guvi.in/blog/wp-content/uploads/2021/05/react-600x314.jpg",
    content:"6 Essential Prerequisites For Learning ReactJS",
    author:"By Ramkumar",
    date:"25 Mar, 2024"
  },
  {
    head:"ds",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
    content:"Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
    author:"By Isha Sharma",
    date:"Apr 16, 2024"
  },
  {
    head:"ds",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/07/Real-World-Data-Science-Examples-1536x804.webp",
    content:"12 Real-World Data Science Examples: Power Of Data Science",
    author:"By Lukesh S",
    date:"25 Mar, 2024"
  },
  {
    head:"ds",
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/5.-data-science-1536x804.png",
    content:"Can A Commerce Student Do Data Science?",
    author:"By Saakshi Priyadarshini",
    date:"16 Apr, 2024"
  },
  {
    head:"cs",
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
    content:"Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
    author:"By Jaishree Tomar",
    date:"Mar 26, 2024"
  },
  {
    head:"cs",
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/cybersecuity-.gif",
    content:"What is Cybersecurity? Importance and its uses & the growing challenges in 2023!",
    author:"By Tushar Vinocha",
    date:"Oct 04, 2023"
  },
  {
    head:"cs",
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/12/Yellow-Blue-Illustration-Business-Blog-Banner-1536x864.png",
    content:"Cybersecurity Vs Ethical Hacking: Top 10 Differences",
    author:"By Tushar Vinocha",
    date:"16 Apr, 2024"
  },
  {
    head:"career",
    image:"https://www.guvi.in/blog/wp-content/uploads/2022/06/Your-paragraph-text-1536x768.png",
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
    image:"https://www.guvi.in/blog/wp-content/uploads/2023/05/2202.i402.018.S.m004.c13.Devops-engineer-flat-composition-1536x1182.jpg",
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
        <Route path='/fsd' element={<FullstackDevelopment data={data}/>}/>
        <Route path='/ds' element={<DataScience data={data}/>}/>
        <Route path='/cs' element={<CyberSecurity data={data}/>}/>
        <Route path='/career' element={<Career data={data}/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>
    </div>
    

  );
};

export default App;