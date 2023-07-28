import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card } from './components/card';

function App() {
  const [valor, setValor] = useState(0);
  const [lista, setLista] = useState([]);

  const incrementar = event => {
    console.log('aumentou +10');
    setValor(valor+10)
    //prevcount
  }
  
  //sempre executa na renderzaçao
  useEffect(() =>{
    console.log('renderizou!');
  })

  //Com o array de dependencia [], é onde insiro as variáveis que serão observadas
  useEffect(() =>{
    if (valor === 50){
      console.log('Renderizou! 2');
    }
  }, [valor])

  useEffect(() =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => {
      setLista(data.splice(0,12))
      console.log(data)
    })
  }, [])  //Consultar API uma vez!!

  return (
    <>
      {/* Aqui o primeiro uso com o UseEffect */}
      <h1>{`contador: ${valor}`}</h1>
      <button onClick={incrementar}>+10</button>

      {/* Cards de imagem, aqui utiliazamos o bootstrap*/}
      <div className="container">

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {lista.map((foto) => {
          return(
            <Card
              key = {foto.id} //para tirar o warning -> boa pratica!
              cardTitle = {foto.id}     //id
              cardText = {foto.title}   //title
              cardImg = {foto.thumbnailUrl}    //image
            />  
          )
        })}
      {/*o map retorna o html(cria outra lista em html, que nocaso sao os cards), o foreach nao retorna*/}
      {/*  AQUI COM O RETORNO IMPLICITO
        {lista.map(foto => 
          return(
            <Card 
              cardTitle = {foto.id}     //id
              cardText = {foto.title}   //title
              cardImg = {foto.thumbnailUrl}    //image
            />  
          )
        )} */}


      {/*primeiro cardteste */}
      {/* <Card 
        cardTitle='id da api'     //id
        cardText='title da api'   //title
        cardImg='image da api'    //image
      />  */}
      </div>

      </div>
    </>
  )
}

export default App
