import React, { useEffect, useState } from 'react'

const Documentos = () => {
  const [documentos, setDocumentos] = useState([]);
  const [novoDocumento, setNovoDocumento] = useState({
    nome: "",
    descricao: "",
    arquivo: null,
  });

  useEffect(() => {
    fetch("http://localhost:3001/documentos")
      .then(res => res.json())
      .then(data => setDocumentos(data))
      .catch(err => console.error("Erro ao carregar documentos:", err));
  }, []);

  const handleAddDocumento = (e) => {
    e.preventDefault();

    if (!novoDocumento.nome || !novoDocumento.descricao || !novoDocumento.arquivo) {
      alert("Preencha todos os campos e selecione um arquivo!");
      return;
    }

    fetch("http://localhost:3001/documentos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nome: novoDocumento.nome,
        descricao: novoDocumento.descricao,
        arquivo: novoDocumento.arquivo.name
      })
    })
      .then(res => res.json())
      .then(data => setDocumentos([...documentos, data]));

    setNovoDocumento({ nome: "", descricao: "", arquivo: null });
  };

  return (
    <section>
      <div>
        <h2>Documentos</h2>

        {documentos.length === 0 ? (
          <p>Nenhum documento enviado.</p>
        ) : (
          <ul>
            {documentos.map((doc, index) => (
              <li key={index}>
                <strong>{doc.nome}</strong> - {doc.descricao} - {doc.arquivo}
              </li>
            ))}
          </ul>
          )}
      </div>

      <div>
           <h3>Adicionar Novo Documento</h3>
          <form onSubmit={handleAddDocumento} className='form-padrao'>
            <input
              type="text"
              placeholder="Nome do documento"
              value={novoDocumento.nome}
              onChange={(e) =>
                setNovoDocumento({ ...novoDocumento, nome: e.target.value })
              }
              required
            />
            <input
              type="text"
              placeholder="Descrição"
              value={novoDocumento.descricao}
              onChange={(e) =>
                setNovoDocumento({ ...novoDocumento, descricao: e.target.value })
              }
              required
            />
            <input
              type="file"
              onChange={(e) =>
                setNovoDocumento({ ...novoDocumento, arquivo: e.target.files[0] })
              }
              required
            />
            <button type="submit">Adicionar Documento</button>
          </form>
      </div>
    </section>
  )
}

export default Documentos