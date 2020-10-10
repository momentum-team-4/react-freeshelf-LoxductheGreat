import React, { useState } from 'react'
import './App.css'
import books from './data/books.json'
import Collapsible from 'react-collapsible'

function App () {
  
  const booklist = books.map((book) => (
    <div key={book.id}>
      <div className='body'>
        <div className='title'>{book.title}</div>
        <div className='author'>{book.author}</div>
        <div className='des'>{book.shortDescription}</div>
        <img className='image' src={book.coverImageUrl} />
        <Collapsible trigger="More Information">
          <div className='url'><strong>URL: </strong>{book.url}</div>
          <div className='pub'><strong>Publisher: </strong>{book.publisher}</div>
          <div className='pub-date'><strong>Publication Date: </strong>{book.publicationDate}</div>
          <div className='full-des'><strong>Full Description: </strong>{book.detailedDescription}</div>
        </Collapsible>
      </div>
    </div>
  ))

  return (
    <div>
      {booklist}
    </div>
  )
}

export default App
