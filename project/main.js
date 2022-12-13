





















// (async function() {

//   const URL = 'https://gorest.co.in';
//   const URI = '/public-api';

//   const appContainer = document.getElementById('app');

//   const parameter = window.location.search;
//   const page = new URLSearchParams(parameter).get("page");

//   // Если в строке нет параметров страницы,
//   // то грузим первую
//   if (page === null) {
//     const answer = await getList(1);
//     createApp(answer);
//   } else {
//     const answer = await getList(page);
//     createApp(answer);
//   }

//   // Берем с сервера нужную страницу
//   async function getList(page) {
//     const response = await fetch(`${URL}/${URI}/posts?page=${page}`);
//     const answer = await response.json();
//     return answer;
//   }

//   // Создаем список елементов и пагинацию,
//   // используя данные с сервера
//   function createApp(answer) {
//     // Очишаем контейнер. Каждый раз
//     while (appContainer.firstChild) {
//       appContainer.removeChild(appContainer.firstChild);
//     }

//     for(let i = 0; i < answer.data.length; i++) {
//       // Узнаем id поста, чтобы передать его функции
//       const postId = answer.data[i].id;
//       // для формирования ссылки
//       let item = createItem(postId);
//       item.cardTitle.innerHTML = answer.data[i].title;
//       appContainer.append(item.card);
//     }

//     // Создаем элемент списка (карточку с кнопкой)
//     function createItem(id) {
//       let card = document.createElement('div');
//       let cardBody = document.createElement('div');
//       let cardTitle = document.createElement('h5');
//       let cardLink = document.createElement('a');

//       card.classList.add('card');
//       cardBody.classList.add('card-body');
//       cardTitle.classList.add('card-title');
//       cardLink.classList.add('btn', 'btn-primary');
//       cardLink.innerHTML = 'Read';
//       cardLink.setAttribute('href', `/post.html?id=${id}`);

//       cardBody.append(cardTitle);
//       cardBody.append(cardLink);
//       card.append(cardBody);

//       return {
//         card,
//         cardTitle,
//         cardLink
//       };
//     }

//     // Создаем пагинацию
//     (function createPagination() {
//       // Контейнер, куда будем помещать всю пагинацию
//       const paginationList = document.querySelector('.pagination');

//       const paginationEnd = answer.meta.pagination.pages; // ~250
//       let paginationStart = 1;
//       let paginationCount = 8;
//       let middle = Math.ceil(paginationCount/2);

//       // Красивое поведение пагинации
//       if (page > middle) {
//         paginationStart = page - middle + 1;
//         paginationCount = middle + Number(page) - 1;
//       }
//       if (page > paginationEnd - middle ) {
//         paginationCount = 8;
//         paginationStart = page - paginationCount + (paginationEnd - page ) + 1  ;
//         paginationCount = paginationEnd;
//       }

//       if (page > middle) {
//         createCustomPagination(1, 'right'); // Ссылка на первую страницу
//       }
//       if (page > 53) {
//         createCustomPagination(50, 'right'); // Ссылка на 50ю страницу
//       }
//       if (page > 103) {
//         createCustomPagination(100, 'right'); // Ссылка на 100ю страницу
//       }
//       if (page > 203) {
//         createCustomPagination(200, 'right'); // Ссылка на 200ю страницу
//       }

//       // Создаем кнопки в пагинации
//       for (let i = paginationStart; i <= paginationCount; i++) {
//         const item = document.createElement('li');
//         item.classList.add('page-item');
//         const itemLink = document.createElement('a');
//         itemLink.classList.add('page-link');
//         if (i === 1) {
//            itemLink.setAttribute('href', '/');
//         } else {
//            itemLink.setAttribute('href', `?page=${i}`);
//         }
//         itemLink.innerHTML = i;

//         item.append(itemLink);
//         paginationList.append(item);

//         // Подсвечиваем активную страницу
//         if (itemLink.innerHTML === page) {
//           itemLink.classList.add('pagination-active');
//         }
//       }

//       if (page < 45) {
//         createCustomPagination(50, 'left'); // Ссылка на 50ю страницу
//       }
//       if (page < 95) {
//         createCustomPagination(100, 'left'); // Ссылка 100ю страницу
//       }
//       if (page < 195) {
//         createCustomPagination(200, 'left'); // Ссылка на 200ю страницу
//       }
//       if (page < paginationEnd - middle + 1) {
//        createCustomPagination(paginationEnd, 'left'); // Ссылка на последнюю страницу
//       }

//       // Функция, которая создает кнопки пагинации
//       function createCustomPagination(page, position) {
//         const item = document.createElement('li');
//         item.classList.add('page-item', `pagination-gutter-${position}`);
//         const itemLink = document.createElement('a');
//         itemLink.classList.add('page-link', 'pagination-bg');
//         if (page === 1) {
//           itemLink.setAttribute('href', '/');
//           console.log(page);
//         } else {
//           itemLink.setAttribute('href', `?page=${page}`);
//         }
//         itemLink.innerHTML = page;
//         item.append(itemLink);
//         paginationList.append(item);
//         return item;
//       }

//     })();

//     // Все карточки одной высоты (по наибольшей высоте)
//     (function pro() {
//       const allCards = document.querySelectorAll('.card');
//       let maxWidth = 1;
//       for (let i = 0; i < allCards.length; i++) {
//         if (allCards[i].offsetHeight > maxWidth) {
//           maxWidth = allCards[i].offsetHeight;
//         }
//       }
//       for (let i = 0; i < allCards.length; i++) {
//         allCards[i].style.height = maxWidth + 'px';
//       }
//     })();

//   }

// })();
