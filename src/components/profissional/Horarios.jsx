import { useEffect, useState, useMemo } from 'react'

const Horarios = () => {
  const [horarios, setHorarios] = useState([]);
    
    const [novoHorario, setNovoHorario] = useState({
      data: "",
      horario: "",
    });

    const [filtroData, setFiltroData] = useState("");
    const [filtroHorario, setFiltroHorario] = useState("");

    useEffect(() => {
    fetch("http://localhost:3001/horarios")
      .then((res) => res.json())
      .then((data) => setHorarios(data))
      .catch((err) => console.error("Erro ao carregar horários:", err));
    }, []);

    const horariosFiltrados = useMemo(() => {
      return horarios.filter((h) => {
        const matchData = !filtroData || h.data === filtroData;
        const matchHorario = !filtroHorario || h.horario === filtroHorario;
        return matchData && matchHorario;
      });
    }, [horarios, filtroData, filtroHorario]);

    const handleAddHorario = (e) => {
      e.preventDefault();

      if (!novoHorario.data || !novoHorario.horario) {
        alert("Preencha todos os campos!");
        return;
      }

      setHorarios([...horarios, novoHorario]);

      setNovoHorario({ data: "", horario: ""});
    }

    const limparFiltros = () => {
      setFiltroData("");
      setFiltroHorario("");
    };
  
  return (
    <section>
      <div>
        <h2>Horários Disponíveis</h2>
        {horariosFiltrados.length === 0 ? (
          <p>Nenhum Horário encontrado.</p>
        ) : (
          <ul>
            {horariosFiltrados.map((h, index) => (
              <li key={index}>
                <strong>Data:</strong> {h.data} | <strong>Horário:</strong>{" "}
                {h.horario}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h3>Adicionar Novo Horário</h3>
        <form onSubmit={handleAddHorario} className='form-padrao'>
          <input
            type="date"
            value={novoHorario.data}
            onChange={(e) =>
              setNovoHorario({ ...novoHorario, data: e.target.value })
            }
            required
          />
          <input
            type="time"
            value={novoHorario.horario}
            onChange={(e) =>
              setNovoHorario({ ...novoHorario, horario: e.target.value })
            }
            required
          />
          <button type="submit">Adicionar Horário</button>
        </form>
      </div>

      <div>
        <div>
          <div className="form-grid">
            <input
              type="date"
              value={filtroData}
              onChange={(e) => setFiltroData(e.target.value)}
            />
            <input
              type="time"
              value={filtroHorario}
              onChange={(e) => setFiltroHorario(e.target.value)}
            />
            <button type="button" onClick={limparFiltros}>
              Limpar Filtros
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Horarios