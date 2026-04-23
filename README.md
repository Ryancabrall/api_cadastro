# API de Cadastro

**Finalidade:** Sistema de cadastro de clientes, produtos e usuários

**Tecnologias:** Node.js, JavaScript, Express

## Como rodar localmente:
```bash
node index.js
```

## Como compartilhar com outras pessoas:

### 1. Descubra seu IP:
```bash
# Windows
ipconfig

# Linux/Mac  
ifconfig
```

### 2. Inicie o servidor:
```bash
node index.js
```

### 3. Compartilhe o link:
O servidor mostrará duas URLs:
- `http://localhost:3000` (acesso local)
- `http://SEU_IP:3000` (acesso externo)

**Compartilhe o link da loja virtual** (ex: `http://192.168.1.100:3000`) com outras pessoas na mesma rede.

### 4. Endpoints disponíveis:
- **Usuários:** `POST /usuarios`, `GET /usuarios`, `POST /login`
- **Produtos:** `POST /produtos`, `GET /produtos`, `GET /produtos/:id`
- **Clientes:** `POST /clientes`, `GET /clientes`, `GET /clientes/:cpf`

### 5. Acesso à interface web:
As outras pessoas podem acessar a loja virtual em: `http://SEU_IP:3000`

## Deploy em Produção

### Opções de Deploy:

#### 1. **Vercel** (Recomendado)
```bash
# Instalar Vercel CLI
npm install -g vercel

# Fazer deploy
vercel --prod
```

#### 2. **Heroku** (Alternativa)
```bash
# Instalar Heroku CLI
npm install -g heroku

# Criar app
heroku create api-cadastro-loja-virtual

# Fazer deploy
git push heroku main
```

#### 3. **Glitch** (Simples)
- Acesse: https://glitch.com
- Importe o projeto do GitHub
- URL automática gerada

### Arquivos de Deploy:
- `package.json` configurado
- `vercel.json` para Vercel
- `app.json` para Heroku
- `.gitignore` otimizado

## Acesso Público (Internet):

### Link Público Atual (LocalTunnel):
**https://dry-owl-16.loca.lt**

### Como usar o LocalTunnel:
```bash
# Instalar
npm install -g localtunnel

# Iniciar tunnel público
lt --port 3000
```

### Importante:
- **Link público funciona para qualquer pessoa na internet**
- **Requer servidor rodando localmente** (`node index.js`)
- **Link muda a cada sessão** do LocalTunnel
- **Funciona mesmo fora da sua rede** Wi-Fi/LAN
- **Alternativa:** ngrok (requer conta gratuita)

## Importante:
- Todos na mesma rede Wi-Fi/LAN conseguirão acessar
- Firewall pode bloquear acesso externo
- Para internet pública, considere serviços como ngrok ou deploy na nuvem