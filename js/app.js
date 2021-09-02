const searchBook = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value; 
    console.log(searchText);
    searchField.value = '';
    const url = `http://openlibrary.org/search.json?q=${searchText}`
 
   console.log(url);
   fetch(url)
   .then(res => res.json())
   .then(data => displaySerachResult(data.docs));

   const errorDiv = document.getElementById('error');
   if (searchText === ""){
       errorDiv.innerText = "Search Field Can Not Be Empty"
   }
   else {
       errorDiv.innerText = "Wait for Result"
   }
 
}

const displaySerachResult = books => {
    const searchResult = document.getElementById('search-result')
    searchResult.textContent ='';
    books.forEach (book => {
        console.log(book);
        const div =document.createElement('div');
        div.classList.add('col');
        
        const cover_i = book.cover_i;
        div.innerHTML= `
        <div class="card">
            <img  src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="rounded p-2 m-3 " >
            <div class="card-body">
              <h3 >Book Title: ${book.title}</h3>
              <p > <span class="fs-3">Author Name : </span> ${book.author_name.slice(0,2)}</p>
              <p ><span class="fs-3">Publisher : </span>  ${book.publisher.slice(0,2)}</p>
              <p ><span class="fs-3">First Publishes Date : </span>  ${book.first_publish_year}</p>
              
            </div>
          </div>
        `;
        searchResult.appendChild(div);  
    })
}

