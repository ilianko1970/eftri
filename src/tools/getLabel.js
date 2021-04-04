
//var language = 'bg';
//window.language = 'bg';

function t(label)
{
  
  let lang ={ "en":{
    "page.title": "Electronic Family Tree",
    "birthday.label": "Birthday",
    "daddy.label":"LastEarthDay",
    "notes.label":"Notes",
    "father.label":"Father",
    "mother.label":"Mother",
    "sisters.label":"Sister / Brother",
    "add.label":"Add",
    "children.label":"Children",
    "edit.label":"Edit",
    "clickme.label":"Click Me!",
    "main.label":"Main",
    "aboutMe.label":"About me",
    "addEdit.label":"Add Edit",
    "change.lang":"Български"

},
"bg":{
    "page.title": "Електронно Родословно Дърво",
    "birthday.label": "Дата на раждане",
              "daddy.label":"Последен Земен ден",
              "notes.label":"бележки",
              "father.label":"Баща",
              "mother.label":"Майка",
              "sisters.label":"брат / сестра",
              "add.label":"Въведи",
              "children.label":"Деца",
              "edit.label":"Редактирай!",
              "clickme.label":"Натисни!",
              "main.label":"Начало",
              "aboutMe.label":"За мен",
              "addEdit.label":"Добавяне / Редакция",
              "change.lang":"English"
}
  }
return ( lang[window.language][label])
}

export default t;