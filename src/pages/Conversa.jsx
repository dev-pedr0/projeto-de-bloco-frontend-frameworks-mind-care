import React, { useState } from 'react'

const Conversa = () => {
  const [mensagem, setMensagem] = useState("");
  const [conversa, setConversa] = useState([
    { autor: "outro", texto: "Olá, tudo bem?" },
    { autor: "eu", texto: "Oi! Estou bem, e você?" },
    { autor: "outro", texto: "Também, obrigado!" },
  ]);

  const handleEnviar = (e) => {
    e.preventDefault();

    if (mensagem.trim() === "") return;

    setConversa([...conversa, {autor: "eu", texto: mensagem}]);
    setMensagem("");
  };

  return (
    <section>
      <div className='container-chat'>
        {conversa.map((msg, index) => (
          <div className='container-msg' key={index} style={{textAlign: msg.autor === "eu" ? "right" : "left",
              backgroundColor: msg.autor === "eu" ? "#DCF8C6" : "#d2d5a8",}}>
            {msg.texto}
          </div>
        ))}
      </div>

      <form onSubmit={handleEnviar}>
        <input type="text" placeholder='Digite sua mensagem...' value={mensagem} onChange={(e) => setMensagem(e.target.value)}/>
        <button type='submit'>
          Enviar
        </button>
      </form>
    </section>
  )
}

export default Conversa