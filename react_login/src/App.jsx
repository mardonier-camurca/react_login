import './App.css';

function App() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode lidar com o login manualmente (ex: envio para uma API)
    alert('Formulário enviado!');
  };

  return (
    <main className="login-container">
      <header>
        <h1>Bem-vindo</h1>
        <p className="subtitle">Faça login para continuar</p>
      </header>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email ou Usuário</label>
          <div className="input-group">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Seu email ou nome de usuário"
              required
              autoFocus
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="password">Senha</label>
          <div className="input-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Senha"
              required
            />
          </div>
        </div>

        <div className="forgot-password">
          <a href="/recuperar-senha">Esqueceu sua senha?</a>
        </div>

        <div className="options">
          <div className="remember-me">
            <input type="checkbox" id="remember" name="remember" />
            <label htmlFor="remember">Lembrar-me</label>
          </div>
        </div>

        <button type="submit">Entrar</button>
      </form>

      <div className="divider">
        <span>Ou continue</span>
      </div>

      <div className="social-login">
        <a href="#" className="social-btn" aria-label="Entrar com google">G</a>
        <a href="#" className="social-btn" aria-label="Entrar com facebook">F</a>
        <a href="#" className="social-btn" aria-label="Entrar com apple">A</a>
      </div>

      <div className="signup-link">
        Não tem uma conta? <a href="/cadastro">Criar conta</a>
      </div>
    </main>
  );
}

export default App;
