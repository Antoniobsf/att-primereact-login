import { useState } from 'react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import './Login.css';

function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    if (!email.trim() || !senha.trim()) {
      alert('Por favor, preencha o e-mail e a senha!');
      return;
    }

    alert(`Login realizado com sucesso!\nE-mail: ${email}`);
    setEmail('');
    setSenha('');
  }

  return (
    <div className="login-container">
      <Card
        title="Bem-vindo"
        subTitle="Acesse sua conta para continuar"
        className="login-card"
      >
        <form onSubmit={handleLogin} className="login-form">
          <div className="field">
            <label htmlFor="email">E-mail</label>
            <InputText
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seuemail@exemplo.com"
              className="full-width"
            />
          </div>

          <div className="field">
            <label htmlFor="senha">Senha</label>
            <Password
              inputId="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
              toggleMask
              feedback={false}
              className="full-width"
            />
          </div>

          <Button
            type="submit"
            label="Entrar"
            icon="pi pi-sign-in"
            className="login-btn"
          />
        </form>
      </Card>
    </div>
  );
}

export default Login;