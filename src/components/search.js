import React from 'react'
import styles from './search.module.css'
import { useDebounce } from '../components/hooks/useDebounce'
import { useRouter } from 'next/router'

export const Search = ({ onClick, content, image, like }) => {
  const [query, setQuery] = React.useState('')
  const [results, setResults] = React.useState([])
  const [showResults, setShowResults] = React.useState(false)
  const debouncedQuery = useDebounce(query, 300)
  const ref = React.useRef(null)

  React.useEffect(() => {
    if (!debouncedQuery || debouncedQuery.length <= 2) {
      return setResults([])
    }
    fetch(`/api/search?query=${debouncedQuery}`)
      .then(res => res.json())
      .then(res => setResults(res))
  }, [debouncedQuery])

  React.useEffect(() => {
    const listener = (event) => {
      const el = ref?.current
      if (!el || el.contains(event.target)) {
        return
      }
      setShowResults(false)
    }

    document.addEventListener('mousedown', listener)
    ref?.current.addEventListener('mousedown', () => setShowResults(true))
  }, [])

  return (
    <div className={styles.search_container} ref={ref}>
      <input
        className={styles.search_input}
        type="text"
        onChange={e => setQuery(e.target.value)}
        placeholder="Search lots and homes..."
      />
      { (results.length > 0  && showResults) ? (
        <div className={styles.search_results_container}>
          {results.map(res => <ResultItem key={res.url} {...res} />)}
        </div>
      ): null}
    </div>
  )
}

const ResultItem = ({ url, image, title, subtitle }) => {
  const router = useRouter()
  return (
    <div className={styles.result_item} onClick={() => {
      router.push(`${router.pathname}/${url}`)
    }}>
      <div>
        <img src={image} className={styles.result_image} />
      </div>
      <div>
        <div className={styles.title}>
          { title }
        </div>
        <div className={styles.subtitle}>
          { subtitle }
        </div>
      </div>
    </div>
  )
}
  
