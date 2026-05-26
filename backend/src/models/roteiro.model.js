const roteiros = []; 

function criarRoteiro(nome,lugares , data) {
    if (!nome || !lugares || !data) {
        throw new Error("Todos os campos são obrigatórios.");
    }
    const newRoteiro = { id: roteiros.length + 1, nome, lugares, data, publicado: false };
    roteiros.push(newRoteiro);
    return newRoteiro;
}   

function publicarRoteiro(id) {
    const roteiro = roteiros.find(r => r.id === id);    
    if (!roteiro) {
        throw new Error("Roteiro não encontrado.");
    }
    roteiro.publicado = true;
    return roteiro;
}

function obterRoteiroPorId(id) {
    const roteiro = roteiros.find(r => r.id === id);            
    if (!roteiro) {
        throw new Error("Roteiro não encontrado.");
    }
    if (!Array.isArray(roteiro.lugares) || roteiro.lugares.length === 0) {
        throw new Error("O roteiro precisa ter pelo menos um lugar.");
    }

    return roteiro;
}

function atualizarRoteiro(id, nome, lugares, data) {
    const roteiro = roteiros.find(r => r.id === id);    
    if (!roteiro) {
        throw new Error("Roteiro não encontrado.");
    }
    if (nome) roteiro.nome = nome;
    if (lugares) roteiro.lugares = lugares;
    if (data) roteiro.data = data;
    return roteiro;
}

function deletarRoteiro(id) {
    const index = roteiros.findIndex(r => r.id === id);
    if (index === -1) {
        throw new Error("Roteiro não encontrado.");
    }   
    roteiros.splice(index, 1);
    return { message: "Roteiro deletado com sucesso." };
}

module.exports = {
    criarRoteiro,
    publicarRoteiro,        
    obterRoteiroPorId,
    atualizarRoteiro,
    deletarRoteiro
};