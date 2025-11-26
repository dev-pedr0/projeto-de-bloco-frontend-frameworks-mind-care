import React, { useEffect, useState } from 'react'

const Progresso = () => {
  const [anotacoes, setAnotacoes] = useState([]);
  const [novaAnotacao, setNovaAnotacao] = useState({ nome: "", atividade: "" });
  const [editIndex, setEditIndex] = useState(null);
  const [filtroTitulo, setFiltroTitulo] = useState("");
  const [filtroAtividade, setFiltroAtividade] = useState("");

  useEffect(() => {
    const fetchAnotacoes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/todos');
        const data = await response.json();
        const comAtividade = data.todos.map(t => ({ ...t, atividade: "" }));
        setAnotacoes(comAtividade);
      } catch (error) {
        console.error('Erro ao buscar anotações:', error);
      }
    };

    fetchAnotacoes();
  }, []);

  const anotacoesFiltradas = anotacoes.filter(a => {
    const matchTitulo = a.todo.toLowerCase().includes(filtroTitulo.toLowerCase());
    const matchAtividade = !novaAnotacao.atividade ||
      a.atividade?.toLowerCase().includes(filtroAtividade.toLowerCase());
    return matchTitulo && matchAtividade;
  });
  
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
      <h2>Progresso</h2>

      <div className="container-filtro">
        <input
          type="text"
          placeholder="Filtrar por título..."
          value={filtroTitulo}
          onChange={(e) => setFiltroTitulo(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filtrar por atividade..."
          value={filtroAtividade}
          onChange={(e) => setFiltroAtividade(e.target.value)}
        />
      </div>

      <div>
        {anotacoesFiltradas.length === 0 ? (
          <p>Nenhuma anotação ainda.</p>
        ): (
          <ul className='list'>
            {anotacoesFiltradas.map((a, index) => (
              <li key={index}>
                <span><strong>{a.todo}:</strong> {a.completed ? 'Concluída' : 'Pendente'}</span>
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

export default Progresso;