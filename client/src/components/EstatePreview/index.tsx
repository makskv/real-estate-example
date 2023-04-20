import React, { useEffect, useRef, useState } from 'react'
import './Estate.css'
import { Estate } from '../../types'
import { ReactComponent as Arrow } from 'assets/arrow.svg'

type Props = Estate

const gap = 4
const imageWidth = 400

const EstatePreview = ({ name, locality, images }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const galleryContainerRef = useRef<HTMLDivElement>(null)
  const galleryRef = useRef<HTMLDivElement>(null)

  const galleryWidth = galleryRef.current?.scrollWidth ?? 0
  const galleryContainerWidth = galleryContainerRef.current?.clientWidth ?? 0

  const cannotScrollMore =
    currentImageIndex * imageWidth + currentImageIndex * gap + galleryContainerWidth > galleryWidth

  const increment = () => {
    if (cannotScrollMore) {
      return
    }
    setCurrentImageIndex(currentImageIndex + 1)
  }

  const decrement = () => {
    if (currentImageIndex === 0) {
      return
    }
    setCurrentImageIndex(currentImageIndex - 1)
  }

  useEffect(() => {
    if (galleryRef.current == null || galleryContainerRef.current == null) {
      return
    }
    if (cannotScrollMore) {
      galleryRef.current.style.transform = `translateX(-${
        galleryRef.current.scrollWidth - galleryContainerRef.current.clientWidth
      }px)`
    } else {
      galleryRef.current.style.transform = `translateX(-${
        currentImageIndex * imageWidth + currentImageIndex * gap
      }px)`
    }
  }, [currentImageIndex])

  return (
    <div className="estate">
      <h2 className="estate__title"> {name}</h2>
      <span className="estate__subtitle"> {locality}</span>
      <div ref={galleryContainerRef} className="estate__gallery">
        <button
          className="estate__gallery__button estate__gallery__button--left"
          onClick={decrement}
        >
          <div className="estate__gallery__button__icon estate__gallery__button__icon--left">
            <Arrow />
          </div>
        </button>
        <div ref={galleryRef} className="estate__gallery__list">
          {images.map((image, i) => (
            <img key={i} className="estate__gallery__item" src={image} alt={i + name + locality} />
          ))}
        </div>
        <button
          className="estate__gallery__button estate__gallery__button--right"
          onClick={increment}
        >
          <div className="estate__gallery__button__icon estate__gallery__button__icon--right">
            <Arrow />
          </div>
        </button>
      </div>
    </div>
  )
}

export default EstatePreview
