import logo from './logo.svg';
import './App.css';
import React from 'react';
import styled from 'styled-components'
// import {ContainerButtons} from './components/ContainerButtons'

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
  }

  onKeyUpPostarMensagem = event => {
    if (event.code === "Enter" && this.state.novoRemetente !== "" && this.state.novoConteudo !== "") {

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
  deletarMensagem = (event) => {
    let excluir = event.target
    excluir.remove()
    console.log("Events: ", event.target)
  }



  render() {

    const mensagemsComponentes = this.state.posts.map((post) => {
      return (
        <div
          id={post.remetente} onDoubleClick={this.deletarMensagem}>
          <span><i>{post.remetente}</i> :   </span>
          <span>{post.novoConteudo}</span>
        </div>
      )
    })

    return (
      <div className="App">
        <Container>
          {mensagemsComponentes}
          <ContainerButtons>
            <input placeholder="Remetente" value={this.state.novoRemetente} onChange={this.onChangeInputNovoRemente} onKeyDown={this.onKeyUpPostarMensagem} />
            <input placeholder="Mensagem" value={this.state.novoConteudo} onChange={this.onChangeInputNovoConteudo} onKeyDown={this.onKeyUpPostarMensagem} />
            <button onClick={this.novaMensagemPostada}>Adicionar comentário</button>
          </ContainerButtons>
        </Container>

      </div>
    );
  }
}
export default App;
