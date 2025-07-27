# 🚀 Projeto Struct Treinee 2025/1

Um site moderno e escalável construído com [Next.js](https://nextjs.org/), [Prisma](https://www.prisma.io/), [NextAuth.js](https://next-auth.js.org/) e [pnpm](https://pnpm.io/).

---

## ✨ Tecnologias Utilizadas

- ⚛️ Next.js
- 🔐 NextAuth.js
- 🧬 Prisma ORM
- 🐬 MySQL
- 📦 pnpm
- 🖼️ Tailwind CSS 

---

## ⚙️ Instalação e Configuração

### 1. Clone o repositório

```bash
git clone https://github.com/luisgds/TREEINE_projeto_25-1.git
cd TREEINE_projeto_25-1
```

---

### 2. Configure as variáveis de ambiente

---

🔐 Obtenha as chaves acessando os links a seguir:

🔸 Cloudinary: https://cloudinary.com/console

🔹 Google Console: https://console.cloud.google.com/apis/credentials

---

Adicione estas variáveis em seu arquivo .env:

```bash
# Next Auth Discord Provider
AUTH_SECRET="example123"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_URL_INTERNAL="http://localhost:3000"
# Next Auth Discord Provider
AUTH_DISCORD_ID="example123"
AUTH_DISCORD_SECRET="example123"
# Next Auth Google Provider
GOOGLE_CLIENT_ID="example123"
GOOGLE_CLIENT_SECRET="example123"
# Cloudinary
CLOUDINARY_CLOUD_NAME="example123"
CLOUDINARY_API_KEY="example123"
CLOUDINARY_API_SECRET="example123"
CLOUDINARY_URL=cloudinary://<example123>:<example123>@example123
``` 

---

### 3. Instale as dependências com pnpm

---

```bash
pnpm i
pnpm db:push
```

Caso não tenha [pnpm](https://pnpm.io/), instale em seu terminal com:

```bash
npm install pnpm --global
```

---

### 4. Rodando o projeto localmente

---

```bash
pnpm dev
```

e acesse http://localhost:3000 no seu navegador

---

