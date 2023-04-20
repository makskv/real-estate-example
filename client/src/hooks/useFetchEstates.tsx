import { useState, useEffect, useCallback } from 'react'
import axios, { type AxiosError } from 'axios'
import { type Estate } from '../types'

function useFetchEstates(offset: number, limit: number) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [allWasLoaded, setAllWasLoaded] = useState(false)
  const [estates, setEstates] = useState<Estate[]>([])

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true)
      setError(false)
      const response = await axios.get<Estate[]>('/api/flats', {
        params: {
          limit: limit,
          offset: offset
        }
      })
      setEstates((prev) => [...prev, ...response.data])
      setLoading(false)
      if (response.data.length < limit) {
        setAllWasLoaded(true)
      }
    } catch (err) {
      setError((err as AxiosError).message == null)
    }
  }, [offset, limit])

  useEffect(() => {
    sendQuery()
  }, [sendQuery])

  return { loading, error, allWasLoaded, estates }
}

export default useFetchEstates
