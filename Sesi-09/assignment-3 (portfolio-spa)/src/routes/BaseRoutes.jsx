import { lazy } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
//modals
import ModalProjectCard from '../scenes/Projects/ModalProjectCard/ModalProjectCard';
//scenes
const Home = lazy(() => import('../scenes/Home/Home'));
const About = lazy(() => import('../scenes/About/About'));
const Projects = lazy(() => import('../scenes/Projects/Projects'));
const Resume = lazy(() => import('../scenes/Resume/Resume'));
const Skills = lazy(() => import('../scenes/Skills/Skills'));
const Experience = lazy(() => import('../scenes/Experience/Experience'));
const Interest = lazy(() => import('../scenes/Interest/Interest'));
const Awards = lazy(() => import('../scenes/Awards/Awards'));


export const routes = {
  HOME: '/',
  ABOUT: '/about',
  PROJECTS: '/projects',
  PROJECT: '/project/:id',
  RESUME: '/resume',
  SKILLS: '/skills',
  EXPERIENCE: '/experience',
  INTEREST: '/interest',
  AWARDS: '/awards',
};

const BaseRoutes = () => {
  // const location = useLocation();
  // const background = location.state?.background;

  return (
    <>
      <Routes>
        <Route path={routes.HOME} exact element={<Home/>} />
        <Route path={routes.ABOUT} element={<About/>} />
        <Route path={routes.PROJECTS} element={<Projects/>} />
        <Route path={routes.PROJECT} element={<ModalProjectCard/>} />
        <Route path={routes.RESUME} element={<Resume />} />
        <Route path={routes.SKILLS} element={<Skills />} />
        <Route path={routes.EXPERIENCE} element={<Experience />} />
        <Route path={routes.INTEREST} element={<Interest  />} />
        <Route path={routes.AWARDS} element={<Awards />} />
        {/* <Route path="*" element={<Home />} />       */}
      </Routes>

      {/* {background && (
        <Route path={routes.PROJECT} component={<ModalProjectCard/>} />
      )} */}
    </>
  );
};

export default BaseRoutes;
