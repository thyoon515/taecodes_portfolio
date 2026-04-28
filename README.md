# taecodes — Personal Portfolio

Personal portfolio site for Taehoon Yoon. Built with React + Vite on the frontend and Ruby on Rails as the API backend, deployed on Render.

🌐 **Live site:** [taecodes.com](https://taecodes.com)

---

## Tech Stack

| Layer | Tech |
|---|---|
| Frontend | React 19, Vite, MUI (Material UI) |
| Backend | Ruby on Rails (API mode) |
| Database | PostgreSQL |
| Containerization | Docker Compose |
| Deployment | Render |

---

## Running Locally

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) (v18+)
- [Ruby](https://www.ruby-lang.org/) (see `backend/.ruby-version`)
- [PostgreSQL](https://www.postgresql.org/)
- [Bundler](https://bundler.io/) — `gem install bundler`

Or, if you prefer Docker:
- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

---

### Option 1 — Run with Docker (recommended)

```bash
# Clone the repo
git clone git@github.com:thyoon515/taecodes_portfolio.git
cd taecodes_portfolio

# Start all services (frontend, backend, database)
docker compose up --build
```

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:3000](http://localhost:3000)

To stop:
```bash
docker compose down
```

---

### Option 2 — Run manually

#### 1. Clone the repo

```bash
git clone git@github.com:thyoon515/taecodes_portfolio.git
cd taecodes_portfolio
```

#### 2. Frontend

```bash
# Install dependencies
npm install

# Start the dev server
npm run dev
```

Frontend runs at [http://localhost:5174](http://localhost:5174)

#### 3. Backend

```bash
cd backend

# Install gems
bundle install

# Set up the database
rails db:create db:migrate db:seed

# Start the Rails server
rails server
```

Backend runs at [http://localhost:3000](http://localhost:3000)

---

## Available Scripts (Frontend)

| Command | Description |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

---

## Project Structure

```
taecodes_portfolio/
├── src/                  # Frontend source (React)
│   ├── components/       # Hero, About, Projects, Experience, Contact
│   ├── App.jsx           # Root component with MUI ThemeProvider
│   └── main.jsx          # Entry point
├── backend/              # Ruby on Rails API
│   ├── app/              # Models, controllers
│   ├── config/           # Routes, database, deploy config
│   └── db/               # Migrations, schema, seeds
├── public/               # Static assets
├── docker-compose.yml    # Multi-container setup
└── vite.config.js        # Vite configuration
```

---

## Deployment

The site is deployed on **Render** and auto-deploys on every push to the `main` branch.
