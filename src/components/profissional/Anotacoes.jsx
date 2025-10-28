import { useEffect, useState } from 'react'

const Anotacoes = () => {
  const [anotacoes, setAnotacoes] = useState([]);
  const [novaAnotacao, setNovaAnotacao] = useState({ title: "", body: "" });
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setAnotacoes(data))
      .catch(err => console.error('Erro ao carregar anotações:', err));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!novaAnotacao.title || !novaAnotacao.body) {
      alert("Preencha todos os campos.");
      return;
    }

    if (editIndex !== null) {
      const novas = [...anotacoes];
      novas[editIndex] = novaAnotacao;
      setAnotacoes(novas);
      setEditIndex(null);
    } else {
      setAnotacoes([...anotacoes, novaAnotacao]);
    }

    setNovaAnotacao({title: "", body: ""});
  };

  const handleRemover = (index) => {
    setAnotacoes(anotacoes.filter((_, i) => i !== index));
  };

  const handleEditar = (index) => {
    setNovaAnotacao(anotacoes[index]);
    setEditIndex(index);
  };

  return (
    <section>
      <h2>Anotações</h2>

      <div>
        {anotacoes.length === 0 ? (
          <p>Nenhuma anotação ainda.</p>
        ) : (
          <ul className='list'>
            {anotacoes.map((a, index) => (
              <li key={index}>
                <span><strong>{a.title}:</strong> {a.body}</span>
                <button onClick={() => handleEditar(index)}>Editar</button>
                <button onClick={() => handleRemover(index)}>Remover</button>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3 style={{textAlign: 'center'}}>{editIndex !== null ? "Editar Anotação" : "Nova Anotação"}</h3>
        <form onSubmit={handleSubmit} className='form-padrao'>
          <input
            type="text"
            placeholder="Nome"
            value={novaAnotacao.title}
            onChange={(e) =>
              setNovaAnotacao({ ...novaAnotacao, title: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Atividade"
            value={novaAnotacao.body}
            onChange={(e) =>
              setNovaAnotacao({ ...novaAnotacao, body: e.target.value })
            }
            required
          />

          <button type="submit">
            {editIndex !== null ? "Salvar Alterações" : "Adicionar"}
          </button>
        </form>
      </div>
    </section>
  )
}

export default Anotacoes;