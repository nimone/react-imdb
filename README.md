# [React IMDB](https://react-imdb.pages.dev/)
A completely responsive IMDB like movie database made with ReactJS using TMDB API. Browse popular titles and search across your favourite movies & tv series here.

**Movie/Tv Series page:**
![Title page screenshot](https://i.ibb.co/NCTwVw1/Screenshot-from-2021-08-23-12-34-00.png)

**Search:**
![Search page screenshot](https://i.ibb.co/DpXN8F1/Screenshot-from-2021-08-23-12-35-59.png)

**Actor's Info:**
![Actor's info screenshot](https://i.ibb.co/8z3gYJR/Screenshot-from-2021-08-23-12-38-01.png)

---
## Technologies used 🛠️
- [React](https://es.reactjs.org/) - Front-End JavaScript library
- [Windi CSS](https://windicss.org/) - Next generation utility-first CSS framework.
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