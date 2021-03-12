import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components'

const Container = styled.div`
height:100vh;
/* display:flex */
`
const ContainerButtons = styled.div`
position:fixed;
bottom: 0;
width:100%;
/* left: 30% */


`


class App extends React.Component {
  state = {
    posts: [
      {
        remetente: "",
        conteudo: ""
      }
    ],
    novoRemetente: "",
    novoConteudo: ""
  }

  onChangeInputNovoRemente = event => {
    this.setState({ novoRemetente: event.target.value })
    console.log("chaakaalaka")

  }

  onChangeInputNovoConteudo = event => {
    this.setState({ novoConteudo: event.target.value })
    console.log("Events.code: ",event)
  }

  onKeyUpPostarMensagem = event => {
    if (event.code === "Enter" && this.state.novoRemetente!=="" && this.state.novoConteudo!=="") {
    console.log("Events: asdasdddd",event)
    this.novaMensagemPostada()
    }
  }
  novaMensagemPostada = () => {
    const novaMensagem = {
      remetente: this.state.novoRemetente,
      novoConteudo: this.state.novoConteudo
    }
    const mensagensAtualizadas = [...this.state.posts, novaMensagem]
    this.setState({ posts: mensagensAtualizadas })
    this.setState({ novoRemetente: "", novoConteudo: "" })
  }



  render() {

    const mensagemsComponentes = this.state.posts.map((post) => {
      return (
          <div>
          <span><i>{post.remetente}</i>:   </span>
          <span>{post.novoConteudo}</span>
          </div>
        )
    })

    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header> */}

<Container>
{mensagemsComponentes}
<ContainerButtons>
<input value={this.state.novoRemetente} onChange={this.onChangeInputNovoRemente} onKeyDown={this.onKeyUpPostarMensagem}/>
<input value={this.state.novoConteudo} onChange={this.onChangeInputNovoConteudo} onKeyDown={this.onKeyUpPostarMensagem}/>
<button onClick={this.novaMensagemPostada}>Adicionar comentário</button>
</ContainerButtons>
</Container>
        
      </div>
    );
  }
}
export default App;
