import React, { useState, useEffect } from 'react';
import t from './getLabel';
import AddMember from './AddMember';

function TestEffects() {
  const [language, setCount] = useState((window.language ===  'en') ? 'bg': 'en');
  
  const free = () => {
    window.language = (window.language ===  'en') ? 'bg': 'en';
      setCount((language ===  'en') ? 'bg': 'en');
      document.title = t('page.title');
      console.log(window.language);
  }

  /* Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    window.language = (window.language ===  'en') ? 'bg': 'en';
    // Update the document title using the browser API

  // setLang(t('clickme.label'));
   document.title = t('page.title');
 //document.title = `You clicked ${count} times`;
  
});
*/
  return (
    <div>
      <p>You clicked {language} times {t('clickme.label')} {t("edit.label")} </p>
      <button onClick={free}>
        {t('clickme.label')}
      </button>
      <AddMember />
    </div>
  );
}

export default TestEffects;