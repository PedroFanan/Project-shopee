# Project-shopee

Este projeto é um sistema para leitura de etiquetas de entrega da Shopee, com extração de informações importantes (como nome da loja e código da etiqueta) por OCR (Tesseract.js) e armazenamento em banco NoSQL (MongoDB). Ele será integrado a um frontend em React e backend com Node.js + Express.

---

## 🚀 Tecnologias Utilizadas

- **Frontend:** React (em desenvolvimento)
- **Backend:** Node.js + Express
- **OCR:** Tesseract.js
- **AI:** OpenAI API (futuro)
- **Banco de dados:** MongoDB Atlas
- **Upload de imagens:** Multer

---

## 🧠 Configuração do MongoDB com Mongoose

### ✅ Requisitos

- Conta no [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- Um cluster criado
- Um banco de dados nomeado (ex: `etiquetai`)
- Um usuário com permissão de leitura/escrita
- IP liberado para acesso externo (`0.0.0.0/0` para testes)

---

## ⚙️ Setup do Backend

### 1. Clonar o repositório

```bash
git clone https://github.com/seu-usuario/Project-shopee.git
cd Project-shopee/server
