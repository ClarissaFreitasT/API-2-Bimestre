const tarefas = [
  { id: 1, descricao: "Estudar química", concluida: false },
  { id: 2, descricao: "Criar páginas no Figma", concluida: true }
];

function encontrarIndiceTarefa(id) {
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id === id) {
      return i;
    }
  }
  return -1;
}

function gerarNovoId() {
  if (tarefas.length === 0) return 1;

  let maiorId = 0;
  for (let i = 0; i < tarefas.length; i++) {
    if (tarefas[i].id > maiorId) {
      maiorId = tarefas[i].id;
    }
  }

  return maiorId + 1;
}

function obterTodasTarefas() {
  return tarefas;
}


function obterTarefaPorId(id) {
  const indice = encontrarIndiceTarefa(id);

  if (indice === -1) return null;

  return tarefas[indice];
}


function criarNovaTarefa(descricao) {
  const novaTarefa = {
    id: gerarNovoId(),
    descricao: descricao.trim(),
    concluida: false
  };

  tarefas.push(novaTarefa);
  return novaTarefa;
}


function atualizarTarefa(id, novaDescricao, novoStatus) {
  const indice = encontrarIndiceTarefa(id);

  if (indice === -1) return null;

  const tarefa = tarefas[indice];


  if (novaDescricao !== undefined) {
    tarefa.descricao = novaDescricao.trim();
  }

 
  if (novoStatus !== undefined) {
    tarefa.concluida = novoStatus;
  }

  return tarefa;
}


function excluirTarefa(id) {
  const indice = encontrarIndiceTarefa(id);

  if (indice === -1) return null;

  const tarefaRemovida = tarefas[indice];

  tarefas.splice(indice, 1);

  return tarefaRemovida;
}

export {
  obterTodasTarefas,
  obterTarefaPorId,
  criarNovaTarefa,
  atualizarTarefa,
  excluirTarefa
};