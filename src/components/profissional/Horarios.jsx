import React, { useState } from 'react'

const Horarios = () => {
  const [horarios, setHorarios] = useState([]);
    
    const [novoHorario, setNovoHorario] = useState({
      data: "",
      horario: "",
    });

    const handleAddHorario = (e) => {
      e.preventDefault();

      if (!novoHorario.data || !novoHorario.horario) {
        alert("Preencha todos os campos!");
        return;
      }

      setHorarios([...horarios, novoHorario]);

      setNovoHorario({ data: "", horario: ""});
    }
  
  return (
    <section>
      <div>
        <h2>Horários Disponíveis</h2>
          {horarios.length === 0 ? (
            <p>Nenhum Horário encontrado.</p>
          ) : (
            <ul>
              {horarios.map((h, index) => (
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
    </section>
  )
}

export default Horarios