import React, { useState } from 'react'

const Anotacoes = () => {
  const [anotacoes, setAnotacoes] = useState([]);
  const [novaAnotacao, setNovaAnotacao] = useState({ nome: "", atividade: "" });
  const [editIndex, setEditIndex] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!novaAnotacao.nome || !novaAnotacao.atividade) {
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

    setNovaAnotacao({nome: "", atividade: ""});
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
        ): (
          <ul className='list'>
            {anotacoes.map((a, index) => (
              <li key={index}>
                <span><strong>{a.nome}:</strong> {a.atividade}</span>
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
            value={novaAnotacao.nome}
            onChange={(e) =>
              setNovaAnotacao({ ...novaAnotacao, nome: e.target.value })
            }
            required
          />

          <input
            type="text"
            placeholder="Atividade"
            value={novaAnotacao.atividade}
            onChange={(e) =>
              setNovaAnotacao({ ...novaAnotacao, atividade: e.target.value })
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