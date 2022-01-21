/*
Treehouse Techdegree: Data Pagination and Filtering
*/

// Variables
const studentPerPage = 9;
const studentList = document.querySelector('.student-list');


/*
This function will create and insert/append the elements needed to display a "page" of nine students
*/


function showPage (list,page) {
   const startIndex = (page * studentPerPage) - studentPerPage;
   const endIndex = page * studentPerPage;
   studentList.innerHTML = '';

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         const displayItems = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">${list[i].registered.date}</span>
               </div>
            </li>
         `;
         studentList.insertAdjacentHTML('beforeend',displayItems);

      }
   }
};


/*
This function will create and insert/append the elements needed for the pagination buttons
*/

function paginationButton (list) {
   const pageNumber = Math.ceil(list.length / studentPerPage);
   const LinkList = document.querySelector('.link-list');
   LinkList.innerHTML = '';

   for (let i = 1; i <= pageNumber; i++){
      const pageButton = `
         <li>
            <button type="button">${i}</button>
         </li>
      `;
      LinkList.insertAdjacentHTML('beforeend',pageButton);
   
   const button = document.querySelector('button:first-child');
      button.className = 'active';
      LinkList.addEventListener('click', (e) => {
         if(e.target.tagName === 'BUTTON') {
            const activeButton = document.querySelector('.active');
            activeButton.className = '';
            e.target.className = 'active';
            showPage(list,e.target.textContent);
         }
      });
   }
}

showPage(data,1);

paginationButton(data);