import { Link, NavLink, useLocation} from 'react-router-dom';
import t from '../../tools/getLabel';

function Header(){
   const lang = (window.language === 'en') ? 'bg':'en';
   document.title = t('page.title');
   const path = lang+useLocation().pathname.substring(3);

   return(
<header>
<h1>{t('page.title')}</h1>
<nav>
  <ul>
  <li><Link to={`/${window.language}`}>{t('main.label')}</Link>
    </li><li><NavLink to={`/${window.language}/addEdit`}>{t('addEdit.label')}</NavLink>
    </li><li><NavLink to={`/${window.language}/aboutMe`}>{t('aboutMe.label')}</NavLink>
    </li><li><NavLink to={`/${path}`}>{t('change.lang')}</NavLink></li>
    </ul>
   
</nav>
</header>)
}

export default Header;