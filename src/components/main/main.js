import { useParams} from 'react-router-dom';
import Header from '../header/header';
import t from '../../tools/getLabel';

function Main(){
    const {lang} = useParams();
    window.language = lang;
    console.log(lang);


    return( <div><Header></Header>
    
    
    
    <h1>{t('main.label')}</h1></div>);
}

export default Main;