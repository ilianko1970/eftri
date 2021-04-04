import { useParams} from 'react-router-dom';
import t from '../../tools/getLabel';
import Header from '../header/header';

function AddEddit(){

    const {lang} = useParams();
    window.language = lang;
    console.log(lang);

    return(
        
        <div>
            <Header></Header>
            
            <h1>{t('addEdit.label')}</h1>
            
            <div style={{padding: 5, width:0.99}}><div style={{float:'left'}}> Име (Кирилица): </div><input type="text" id='namec' name='namec' /></div>
<div style={{padding: 5}}>Name (Latin): <input style={{width:1.0}} type="text" id='name' name="name" /></div>
<table>
    <tr>
        <td>Презиме (Кирилица):</td>
        <td><input type="text" id='fnamec' name="fnamec" /></td>
    </tr>
    <tr>
        <td>Sirname(Latin):</td>
        <td><input id='fname' type="text" name="fname" /></td>
    </tr>
    <tr>
        <td>{t('birthday.label')} ... </td>
        <td><input id='birthday' type="text" name="birthday" /></td>
    </tr>
    <tr>
        <td>Последен Земен ден</td>
        <td><input id='daddy' type="text" name="daddy" /></td>
    </tr>
    <tr>
        <td>бележки</td>
        <td><input id='notes' type="text" name="notes" /></td>
    </tr>
</table>
         <button id="saveEdit" >SAVE</button><button id="mainPersonEdit" >Edit</button><span id="customerDetails"></span><div id="mainPerson" >
         <div id='namel'><input id='root' type='hidden' value='1' />
                    <span> Ilian </span>
                    <span> Ivanov </span>
                    <span> Todorov </span>
                    <button>Edit</button>
                 </div>
                 <div id='namec'>
                    <span> Илиян </span>
                    <span> Иванов </span>
                    <span> Тодоров </span>
                    <button>Edit</button>
                 </div>
                 <div id='birthday' root="1">
                    <span> {t('birthday.label')} (Year-Month-Day):</span>
                    <span> 1978-05-11 </span>
                 </div></div>
                 <table>
                 <tr><td colspan="2">M: <a href='/index.php?root=2'>Mimi Yankova</a>
                            T: <a href='/index.php?root=21'>Ivan Todorov</a>

<div id='voice'></div>
</td></tr>

<tr>
        <td colspan='2'></td>
    </tr>
    <tr>
        <td colspan='2'>email: </td>
    </tr>
    <tr>
        <td colspan='2'>брат / сестра: <a href='/index.php?root=5'>Диана Тодорова</a> </td>
    </tr>


    <tr>
        <td colspan='2'>Деца: <a href='/index.php?root=4'>Иван Тодоров</a> <a href='/index.php?root=23'>Милена Тодорова</a> <a href='/index.php?root=54'>Momchil </a> 
        <span id="addChild" parentId="1"><span id="addChildInput">Въведи</span></span><span id="addSavec"></span>
        </td>
    </tr>

</table>    
            
            
            
        </div>

    );
}

export default AddEddit;