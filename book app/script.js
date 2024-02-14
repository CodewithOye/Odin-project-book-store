let books = [
    { title: 'The Lord of the Rings: The Fellowship of the Ring', author: 'J.R.R. Tolkien', pages: 423, read: true },
    { title: 'Gone with the Wind', author: 'Margaret Mitchell', pages: 1037, read: false },
    { title: 'The Alchemist', author: 'Paulo Coelho', pages: 163, read: true },
    { title: 'Moby-Dick', author: 'Herman Melville', pages: 635, read: false },
    { title: 'The Shining', author: 'Stephen King', pages: 447, read: true }
  ];
  
  // Function to display books
  function displayBooks() {
    const bookListDiv = document.getElementById('bookList');
  
    // Clear previous content
    bookListDiv.innerHTML = '';
  
    // Loop through the books array
    books.forEach((book, index) => {
      // Create a div element for each book
      const bookDiv = document.createElement('div');
      bookDiv.classList.add('book');
      bookDiv.setAttribute('data-index', index); // Associate the book div with its index in the array
  
      // Create HTML content for the book
      const bookInfo = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Read:</strong> ${book.read ? 'Yes' : 'No'}</p>
        <button onclick="removeBook(${index})">Remove</button>
      `;
  
      // Set the HTML content of the book div
      bookDiv.innerHTML = bookInfo;
  
      // Append the book div to the book list div
      bookListDiv.appendChild(bookDiv);
    });
  }
  
  // Call the function to display books
  displayBooks();
  
  // Function to open the new book form
  function openForm() {
    document.getElementById('newBookModal').style.display = 'block';
  }
  
  // Function to close the new book form
  function closeForm() {
    document.getElementById('newBookModal').style.display = 'none';
  }
  
  // Function to handle form submission
  document.getElementById('bookForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
  
    // Get form data
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;
  
    // Create new book object
    const newBook = { title, author, pages, read };
  
    // Add new book to the books array
    books.push(newBook);
  
    // Close the form and display updated book list
    closeForm();
    document.getElementById('bookForm').reset();
    displayBooks();
  });
  
  // Function to remove a book
  function removeBook(index) {
    books.splice(index, 1); // Remove book from the array
    displayBooks(); // Update the book list display
  }
  