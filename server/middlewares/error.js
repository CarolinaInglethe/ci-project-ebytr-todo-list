// middleware de erro utilizavel por qualquer rota de throw , catch e next

module.exports = (err, _req, res) => {
  // se existir status no objeto error do throw e catch
  // retorna status e mensagem do objeto:
  if (err.status) {
    return res.status(err.status).json({ message: err.message });
  }

  // se nao vier status é porque foi erro nao tratado, no caso interno
  return res.status(500).json({ message: 'Internal server error' });
};
