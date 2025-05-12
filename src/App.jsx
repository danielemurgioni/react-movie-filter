import { useState, useEffect } from 'react'

const arrFilms = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

//creo un nuovo array con lo spread i cui generi non sono duplicati con l'uso di new Set
const uniqueGenres = [...new Set(arrFilms.map((item) => item.genre))]
console.log(uniqueGenres)

function App() {

  // definisco la value della select con la variabile di stato di useState e la cambio lo stato con setGenre utilizzandola insieme ad onChange
  const [genre, setGenre] = useState("")
  console.log(genre)

  return (
    <>
      <header>
        <h1>REACT FILMS</h1>
      </header>
      <hr />
      <main>
        <div className='container'>
          <div>
            <label><strong>Filtra i film per genere</strong></label>
            <br />
            {/* SELECT */}
            <select name="selectFilm" id="film-select" value={genre} onChange={(e) => { setGenre(e.target.value) }}>
              <option value={""}>Nessun Genere Selezionato</option>
              {uniqueGenres.map((genre, index) => (
                <option key={index} value={genre}>{genre}</option>
              ))}
            </select>
          </div>

          <div>
            <h2>Array di Film</h2>
            {/* FILM LIST */}
            <ul>
              {arrFilms.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </div>
        </div>
      </main >
    </>
  )

}

export default App
