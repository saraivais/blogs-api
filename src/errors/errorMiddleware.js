const errorMiddleware = (error, _request, response, _next) => {
  const { message } = error;
  if (message.includes('|')) {
    const [code, customMessage] = message.split('|');
    return response.status(Number(code)).json({ message: customMessage });
  }
  return response.status(500).json({ message: 'Algo diferente deu ruim' });
};

module.exports = errorMiddleware;
