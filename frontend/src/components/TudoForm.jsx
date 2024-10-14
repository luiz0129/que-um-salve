import React from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'

 const TudoForm = () => {

    const [tarefa, setTarefa] = React.useState('')
    const [descricao, setDescricao] = React.useState(null)
    const [message, setMessage] = React.useState(null)
    const [loading, setLoading] = React.useState(null)

   const handlePost = async (event) => {
      event.preventDefault()
      setLoading("Carregando...")

      try {
         await axios.post("http://localhost:3333/api/tarefas", {
            tarefa,
            descricao
         })
          setMessage("Tarefa criada com sucesso!")
          setTarefa('')
          setDescricao()
      } catch (error) {
          setMessage("Não foi possivel salvar a sua tarefa!")
      }
      
   }

  return (
        <Form onSubmit={handlePost}>
          <Form.Group className="mb-3">
            <Form.Label>Titulo</Form.Label>
            <Form.Control 
            type="email" 
            placeholder="Digite o titulo da sua tarefa" 
            value={tarefa}
            onChange={(e) => setTarefa(e.target.value)}
            required />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Descricão</Form.Label>
            <Form.Control 
            type="textarea" 
            placeholder="Digite a descrição da sua tarefa"
            value={descricao}
            onChange={(e) => setDescricao(e.target.value)} />
          </Form.Group>
        
          <Button variant="primary" type="submit">
            Postar
          </Button>
          { message ? <p>{message} </p> : <p>{loading}</p>}
        </Form>
      )
    }

export default TudoForm;