const apiBase = 'https://crudcrud.com/api/efd462cc0cb74ab1a0e0d8597397a376/clientes';

const form = document.getElementById('cliente-form');
const lista = document.getElementById('lista-clientes');

// Carrega clientes ao iniciar
window.onload = () => {
  buscarClientes();
};

// Cadastrar cliente
form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();

  if (!nome || !email) return alert('Preencha todos os campos!');

  const novoCliente = { nome, email };

  fetch(apiBase, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(novoCliente)
  })
    .then(res => res.json())
    .then(() => {
      form.reset();
      buscarClientes();
    })
    .catch(err => {
      console.error('Erro ao cadastrar cliente:', err);
      alert('Erro ao cadastrar. Verifique a conexão.');
    });
});

// Buscar clientes
function buscarClientes() {
  lista.innerHTML = '';

  fetch(apiBase)
    .then(res => res.json())
    .then(clientes => {
      clientes.forEach(cliente => {
        const li = document.createElement('li');
        li.innerHTML = `
          <div>
            <strong>${cliente.nome}</strong><br />
            <small>${cliente.email}</small>
          </div>
          <button onclick="excluirCliente('${cliente._id}')">Excluir</button>
        `;
        lista.appendChild(li);
      });
    })
    .catch(err => {
      console.error('Erro ao buscar clientes:', err);
      alert('Erro ao carregar lista de clientes.');
    });
}

// Excluir cliente
function excluirCliente(id) {
  fetch(`${apiBase}/${id}`, {
    method: 'DELETE'
  })
    .then(() => buscarClientes())
    .catch(err => {
      console.error('Erro ao excluir cliente:', err);
      alert('Erro ao excluir cliente.');
    });
}
