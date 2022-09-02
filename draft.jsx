// ИЗ Арр файла
<input className={style.field} type="text" onChange={authorClick} ref={textInput}></input>









let state =
[
  {
    text: 'First object Change',
    author: 'Ivanov Change'
  },
  {
    text: 'Second object Change',
    author: 'Petrov Change'
  }
]

let changeText = 'changeText';
let changeAuthor = 'changeAuthor';

const [messageList, setMessageList] = useState([
  {
    text: 'First object',
    author: 'Ivanov',
  },
  {
    text: 'Second object',
    author: 'Petrov'
  }
]);


const changeMessageList = () => {

  // setMessageList(([messageList[0].text = "This is index zero" ]))
  setCount(count + 100);
  // handleClick();

  // добавляем объект в массив
  setMessageList([...messageList, {
    text: textInput.current.value,
    author: authorInput.current.value,
  }]);

  console.log(messageList.length);
  // setMessageList([...messageList, state])

  // messageList.map((message, index) => <div key={index}>{message.text}  = {message.author}</div>

  // setMessageList(messageList[0].text = 'changeText')

  // console.log(messageList[0].text = changeText);
}
// console.log(messageList, messageList.length);


    // messageList.map((message) => <div>{message}</div>);


setMessageList(
  messageList.map((message) =>
    message.author === authorInput.current.value
      ? { ...message }
      : {...message, 
        text: textInput.current.value,
        author: authorInput.current.value,
      }
  )
);

{messageList.map((message, index) => <div key={message.author}>{message.text}  = {message.author}</div>)}


return (
  <div className="App">
    <div className={style.card}>
      <h3 className={style.title}>App component (parent)</h3>
      <input className={style.field} type="text" ref={textInput}></input>
      <input className={style.field} type="text" ref={authorInput}></input>
      <button className={style.btn} onClick={handleClick}>Send</button>
    </div>
    <Message data={text} />
    <div>
      {/* {state.messageList.map((item, id) => {
        console.log(item);
      })} */}
      {/* {messageList.map((message, index) => <div key={index}>{message}</div>)} */}
      {/* {console.log(messageList[0].text, messageList[0].author)} */}
      {/* <div>{messageList[0].text}</div> */}
      {/* <div>{messageList[0].author}</div> */}
      <div>{count}</div>

      {messageList.map((message, index) => <div key={index}>{message.text}  = {message.author}</div>)}
    </div>
  </div>
);

  // useEffect(() => {
  //   console.log(count);
  //   }, [count]);

  // ****************************************************************************************************************************
  //  ПОЛНАЯ КОПИЯ ФАЙЛА App.jsx
  import React from 'react';
import { useState, useEffect } from 'react';
// import { useEffect } from 'react';
import style from './App.module.css';
import { Message } from "./components/Message/Message";

export const App = () => {

  const [name, setName] = useState("Tom");
  const [age, setAge] = useState(36);
  const [isTyping, setIsTyping] = useState(false);

  const [author, setAuthor] = useState('Иванов');


  console.log(isTyping);

  const authorClick = (event) => {

    setAuthor(event.target.value);

  }
  // console.log(author);

  const changeName = (event) => {
    setIsTyping(true);
    setName(event.target.value);
  }
  const changeAge =(event) => setAge(event.target.value);

  useEffect(() => {
    console.log(isTyping);
    // Изменяем заголовок html-страницы 
    if (isTyping) {
      return;
    }
    console.log("useEffect");
  }, [name, isTyping]);


  const [messageList, setMessageList] = useState([
    // {
    //   text: '',
    //   author: '',
    // },
  ]);
  const [text, setText] = useState(messageList.length); // 'Начальное значение'
  const [count, setCount] = useState(100);
  let textInput = React.createRef();
  let authorInput = React.createRef();

  const handleClick = () => {
    setIsTyping(false);
    setCount(count + 1);
    let authorEff = author;
    setMessageList([...messageList, {
      text: textInput.current.value,
      // author: authorInput.current.value,
      author: author,
    }]);

    setText(messageList.length + 1);
  }

  // console.log(messageList);

  // useEffect(() => {
  //   setTimeout(() => {
  //     console.log('Сообщение отправлено автор:  ' + author); // + messageList[messageList.length-1].author
  //   }, 500);
  // }, [messageList]);


  return (
    <div className="App">
      <div className={style.card}>
        <h3 className={style.title}>App component (parent)</h3>
        <p className={style.title}>Автор:</p>
        <input className={style.field} type="text" onChange={authorClick} ref={authorInput}></input>
        <p className={style.title}>Текст:</p>
        <input className={style.field} type="text" ref={textInput}></input>
        <button className={style.btn} onClick={handleClick}>Send</button>
      </div>
      <Message data={text} />
      <div>
        <div>{count}</div>
        <div>{author}</div>
        {messageList.map((message, index) => <div key={index}> {message.author}: {message.text}</div>)}
      </div>
      <div>
        <p>Имя: <input type="text" value={name}  onChange={changeName} /></p>
        <p>Возраст: <input type="number" value={age} onChange={changeAge} /></p>
      </div>
    </div>
  );
};


//****************************************************** */
/*
export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const handleClick = () => {
    if (author !== '' && text !== '') {
      setIsTyping(false);
      setMessageList([...messageList, {
        text: text,
        author: author,
      }]);
    } else {
      console.log('Заполните поля')
    }
  }

  const authorChange = (event) => {
    setIsTyping(true);
    setAuthor(event.target.value);
  }

  const textChange = (event) => {
    setText(event.target.value);
  }

  useEffect(() => {
    // пропускаем событие во время набора имени автора 
    if (isTyping) { return; }
    setTimeout(() => {
      console.log("Добавился новый автор:  " + author);
    }, 100);
  }, [author, isTyping]);
*/


/*
export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');

  const handleClick = () => {
    if (author !== '' && text !== '') {
      setMessageList([...messageList, {
        text: text,
        author: author,
      }]);
    } else {
      console.log('Заполните поля')
    } 
  }

  const authorChange = (event) => {
    setAuthor(event.target.value);
  }

  const textChange = (event) => {
    setText(event.target.value);
  }

  console.log(messageList)
*/

/*
export const App = () => {
  const [messageList, setMessageList] = useState([]);
  const [author, setAuthor] = useState('');
  const [text, setText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  const handleClick = () => {
    if (author !== '' && text !== '') {
      messageList.forEach(element => {
        // console.log(element);
        if (author === element.author) {
          console.log("Такой автор имеется");
          setIsTyping(true);
        } else {
          setIsTyping(false);
        }
      });

      setMessageList([...messageList, {
        text: text,
        author: author,
      }]);
    } else {
      console.log('Заполните поля')
    }
  }

  const authorChange = (event) => {
    setIsTyping(true);
    setAuthor(event.target.value);
  }

  const textChange = (event) => {
    setText(event.target.value);
  }
  
  useEffect(() => {
    // пропускаем событие во время набора имени автора 
    if (isTyping) { return; }
    setTimeout(() => {
      console.log("Добавился новый автор:  " + author);
    }, 100);
  }, [author, isTyping]);

  /*
    useEffect(() => {
      // пропускаем событие во время набора имени автора 
      // if (isTyping) { return; }
  
      messageList.forEach(element => {
        console.log(element);
        if (author === element.author) {
          console.log("Такой автор имеется");
        } else {
          setTimeout(() => {
            console.log("Добавился новый автор:  " + author);
          }, 100);
        }
      });
  
  console.log("Добавился новый автор:  " + author);
    }, [messageList]);
  */

  // console.log(Object.values(messageList));
  /*
    for (const object of messageList) {
      if (object.author == author) {
        console.log('Такой автор имеется');
      }
  
      // const objectArray = Object.entries(object);
  
      // for (const iterator of Object.values(object)) {
      //    console.log(iterator);
      // }
    }
  */
