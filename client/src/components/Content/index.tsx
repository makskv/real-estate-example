import React, { useEffect, useRef, useState } from 'react'
import './Content.css'
import EstatePreview from '../EstatePreview'
import useFetchEstates from '../../hooks/useFetchEstates'

const LIMIT = 20

const Content = () => {
  const [offset, setOffset] = useState(0)
  const { loading, error, allWasLoaded, estates } = useFetchEstates(offset, LIMIT)

  const loader = useRef(null)

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0
    }
    const observer = new IntersectionObserver((entries) => {
      const target = entries[0]
      if (target?.isIntersecting && !loading) {
        setOffset((prev) => prev + 1)
      }
    }, option)
    if (loader.current) observer.observe(loader.current)

    return () => observer.disconnect()
  }, [loading])

  return (
    <main className="content">
      {estates?.map((estate) => (
        <EstatePreview key={estate.id} {...estate} />
      ))}
      {loading && (
        <div className="content__loader__container">
          <span className="content__loader"></span>
        </div>
      )}
      {error && <p>Error!</p>}
      {!allWasLoaded && <div ref={loader} />}
    </main>
  )
}

export default Content
