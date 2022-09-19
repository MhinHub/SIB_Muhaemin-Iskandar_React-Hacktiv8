import s from './NavLinks.module.scss';
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';
import { FiAward } from 'react-icons/fi';
import { GiAbstract055, GiSkills } from 'react-icons/gi';
import { CgFileDocument } from 'react-icons/cg';
import { routes } from '../../../routes/BaseRoutes';
import { NavLink } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className={s.navBar}>
      <li>
        <NavLink to={routes.HOME} exact={"true"}>
          <AiOutlineHome />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.ABOUT}>
          <AiOutlineUser />
          About
        </NavLink>
      </li>


      <li>
        <NavLink to={routes.SKILLS}>
          <GiSkills />
          Skills
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.EXPERIENCE}>
          <CgFileDocument />
          Experience
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.INTEREST}>
          <GiAbstract055 />
          Interest
        </NavLink>
      </li>

      <li>
        <NavLink to={routes.AWARDS}>
          <FiAward />
          Awards
        </NavLink>
      </li>
      
      <li>
        <NavLink to={routes.PROJECTS}>
          <AiOutlineFundProjectionScreen />
          Projects
        </NavLink>
      </li>
            
    </ul>
  );
};

export default NavLinks;
