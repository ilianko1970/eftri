import t from './getLabel';

function AddMember()
{

return(
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
          <td>{t('daddy.label')}</td>
          <td><input id='daddy' type="text" name="daddy" /></td>
      </tr>
      <tr>
          <td>бележки</td>
          <td><input id='notes' type="text" name="notes" /></td>
      </tr>
  </table>);
  }

  export default AddMember;
