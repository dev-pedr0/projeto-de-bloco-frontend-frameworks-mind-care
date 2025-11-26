import React, { useEffect, useMemo, useState } from 'react'

const Consultas = () => {
  const [consultas, setConsultas] = useState([]);
  
  const [novaConsulta, setNovaConsulta] = useState({
    data: "",
    horario: "",
    medico: "",
  });

  const [filtroData, setFiltroData] = useState("");
  const [filtroHorario, setFiltroHorario] = useState("");
  const [filtroMedico, setFiltroMedico] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/consultas")
      .then((res) => res.json())
      .then((data) => setConsultas(data))
      .catch((err) => console.error("Erro ao carregar consultas:", err));
  }, []);

  const consultasFiltradas = useMemo(() => {
    return consultas.filter((c) => {
      const matchData = !filtroData || c.data === filtroData;
      const matchHorario = !filtroHorario || c.horario === filtroHorario;
      const matchMedico = !filtroMedico || 
        c.medico.toLowerCase().includes(filtroMedico.toLowerCase());

      return matchData && matchHorario && matchMedico;
    });
  }, [consultas, filtroData, filtroHorario, filtroMedico]);
  
  const handleAddConsulta = (e) => {
    e.preventDefault();

    if (!novaConsulta.data || !novaConsulta.horario || !novaConsulta.medico) {
      alert("Preencha todos os campos!");
      return;
    }

    fetch("http://localhost:3001/consultas", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novaConsulta),
    })
      .then((res) => res.json())
      .then((nova) => setConsultas([...consultas, nova]));

    setNovaConsulta({ data: "", horario: "", medico: "" });
  }

  const limparFiltros = () => {
    setFiltroData("");
    setFiltroHorario("");
    setFiltroMedico("");
  };

  return (
    <section>
      <div>
        <h2>Consultas Agendadas</h2>

        {consultasFiltradas.length === 0 ? (
            <p>Nenhuma consulta agendada.</p>
          ) : (
            <ul>
              {consultasFiltradas.map((c, index) => (
                <li key={index}>
                  <strong>Data:</strong> {c.data} | <strong>Horário:</strong>{" "}
                  {c.horario} | <strong>Médico:</strong> {c.medico}
                </li>
              ))}
            </ul>
          )}
      </div>

      <div>
        <h3>Adicionar Nova Consulta</h3>
        <form onSubmit={handleAddConsulta} className='form-padrao'>
          <input
            type="date"
            value={novaConsulta.data}
            onChange={(e) =>
              setNovaConsulta({ ...novaConsulta, data: e.target.value })
            }
            required
          />
          <input
            type="time"
            value={novaConsulta.horario}
            onChange={(e) =>
              setNovaConsulta({ ...novaConsulta, horario: e.target.value })
            }
            required
          />
          <input
            type="text"
            placeholder="Nome do médico"
            value={novaConsulta.medico}
            onChange={(e) =>
              setNovaConsulta({ ...novaConsulta, medico: e.target.value })
            }
            required
          />
          <button type="submit">Adicionar Consulta</button>
        </form>
      </div>

      <div>
        <h3>Filtros:</h3>
        <div className="form-grid">
          <input
            type="date"
            value={filtroData}
            onChange={(e) => setFiltroData(e.target.value)}
            placeholder="Filtrar por data"
          />
          <input
            type="time"
            value={filtroHorario}
            onChange={(e) => setFiltroHorario(e.target.value)}
            placeholder="Filtrar por horário"
          />
          <input
            type="text"
            placeholder="Buscar médico..."
            value={filtroMedico}
            onChange={(e) => setFiltroMedico(e.target.value)}
          />
          <button type="button" onClick={limparFiltros}>
            Limpar Filtros
          </button>
        </div>
      </div>

    </section>
  )
}

export default Consultas;