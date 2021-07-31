# [React IMDB](https://react-imdb.pages.dev/)
A completely responsive IMDB clone made with ReactJS using TMDB API. Browse popular titles and search across your 
favourite movies & tv series here.

**Movie/Tv Series page:**
![Title page screenshot](https://i.ibb.co/CzvjDBc/Screenshot-from-2021-07-30-15-12-27.png)

**Home Page:**
![Home page screenshot](https://i.ibb.co/QfY0ZWW/Screenshot-from-2021-07-30-15-11-59.png)

---
## Technologies used 🛠️
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
- [Vite](https://vitejs.dev/) - Frontend Tooling

---
## Run Locally
1. Clone this repo
```bash
git clone https://github.com/nimone/react-imdb && cd react-imdb
```
2. Install project dependecies
```bash
npm install
```
3. Get your API key from [The MovieDB](https://www.themoviedb.org/) and put it in `.env` file:
```
VITE_TMDB_API_KEY=Your_API_Key_here
```
4. Build the project and start a local server
```bash
npm run build && npm run serve
```
> Or, run a development server using `npm run dev`

---
## Data Sources
The data for this project is generously provided by the following api/sources:
- [The Movie Database API](https://www.themoviedb.org/documentation/api)