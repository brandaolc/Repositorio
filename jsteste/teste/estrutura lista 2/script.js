
document.addEventListener('DOMContentLoaded', () => {
   
    const books = [
        { title: 'Dom Casmurro', author: 'Machado de Assis' },
        { title: 'O Primo Basílio', author: 'José de Alencar' },
        { title: 'Memórias Póstumas de Brás Cubas', author: 'Machado de Assis' },
        { title: 'Senhora', author: 'José de Alencar' }
    ];

   
    const bookList = document.getElementById('book-list');

    
    const bookItems = books.map(book => {
        
        const li = document.createElement('li');
       
        li.textContent = `${book.title} - ${book.author}`;
        
        return li;
    });

   
    bookItems.forEach(item => bookList.appendChild(item));
});
