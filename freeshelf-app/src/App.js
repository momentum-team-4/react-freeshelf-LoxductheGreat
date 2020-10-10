import React, { useState } from 'react'
import './App.css'
import books from './data/books.json'
import Collapsible from 'react-collapsible'


function App () {
  // const title = (
  //   <div>
  //     {books.map((book) =>
  //       <div key={book.id}>{book.title}{book.author}</div>
  //     )}
  //   </div>
  // )

  // function collapse () {
  //   const [open, setOpen] = useState(false)
  // }

  const booklist = books.map((book) => (
    <div key={book.id}>
      <div className='body'>
        <div className='title'>{book.title}</div>
        <div className='author'>{book.author}</div>
        <div className='des'>{book.shortDescription}</div>
        <img className='image' src={book.coverImageUrl} />
        {/* <button on onClick={() => setOpen(!open)}>More Information</button> */}
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
// function App () {
//   return (
//     <div>
//       {books.map((book) => <div key={book.id}>
//       <div>
//         <h1 className='title'>{book.title}</h1>
//         <p>{book.author}</p>
//       </div>
//     </div>
//   )
// }


export default App
