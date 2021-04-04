
import { useParams} from 'react-router-dom';
import Header from '../header/header';
import t from '../../tools/getLabel';

function AboutMe(){
    const {lang} = useParams();
    window.language = lang;
    console.log(lang);

    return(
        <div>
            <Header></Header>
            
            <h1>{t('aboutMe.label')}</h1></div>

    );
}

export default AboutMe;