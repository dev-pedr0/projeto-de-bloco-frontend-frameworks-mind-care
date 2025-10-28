import React, { useEffect, useState } from 'react'

const Consultas = () => {
  const [consultas, setConsultas] = useState([]);
  
  const [novaConsulta, setNovaConsulta] = useState({
    data: "",
    horario: "",
    medico: "",
  });

  useEffect(() => {
    fetch("http://localhost:3001/consultas")
      .then((res) => res.json())
      .then((data) => setConsultas(data))
      .catch((err) => console.error("Erro ao carregar consultas:", err));
  }, []);
  
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

  return (
    <section>
      <div>
        <h2>Consultas Agendadas</h2>
          {consultas.length === 0 ? (
            <p>Nenhuma consulta agendada.</p>
          ) : (
            <ul>
              {consultas.map((c, index) => (
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
    </section>
  )
}

export default Consultas;