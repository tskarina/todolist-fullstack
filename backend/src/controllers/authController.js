const authController = {
  login: async (req, res) => {
    const { username, password } = req.body;

    // Verifique se o usuário e a senha foram fornecidos
    if (!username || !password) {
      return res.status(400).json({
        message: "Por favor, forneça um nome de usuário e uma senha.",
      });
    }

    // Autenticação bem-sucedida, retorne um token de acesso
    const token = generateAccessToken(username);
    return res.json({ token });
  },
};

// Função auxiliar para gerar um token de acesso
function generateAccessToken(username) {
  // Simplesmente retornando um token fictício para fins de teste
  return "token-de-acesso-gerado";
}

export default authController;
