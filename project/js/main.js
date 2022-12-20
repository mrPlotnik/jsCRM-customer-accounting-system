(async function() {

  // Куда будут монтироваться контакты
  const CLIENTS_WRAP = document.querySelector('.clients-wrap');
  // Обращение к серверу
  const URL = 'http://localhost:3000';
  const URI = '/api/clients';

  // Кнопка "Добавить клиента"
  const addClient = document.querySelector('.newclient__btn');
  // вызывает модальное окно
  addClient.addEventListener('click', showModal);



  let allClients = await getClients();

  (function() {
    for (let i = 0; i < allClients.length; i++) {
      allClients[i].fullname = getFullName(allClients[i]);
    }
  })();

  createRow(allClients);

  // Создаем и заполняем елемент row для каждого клиента
  function createRow(allClients) {
    // Удаляем дочерние DOM узлы
    while (CLIENTS_WRAP.firstChild) {
      CLIENTS_WRAP.removeChild(CLIENTS_WRAP.firstChild);
    }

    for (let i = 0; i < allClients.length; i++) {
      // Берем "пустой" row (объект из узлов DOM)
      const emptyRow = createEmptyRow();
      // заполняем его
      const fullRow = insertDataInRow(emptyRow, allClients[i]);
      // монтируем его
      CLIENTS_WRAP.append(fullRow);
    }

    // Функция возвращает заполненный div.row информацией с сервера
    function insertDataInRow(obj, clientData) {
      // Id
      obj.clientId.innerHTML = clientData.id;

      // Имя
      obj.clientName.innerHTML = clientData.fullname;

      // Дата и время создания
      const create = dataFormat(clientData.createdAt);
      obj.clientCreateDate.innerHTML = create.date;
      obj.clientCreateTime.innerHTML = create.time;

      // Дата и время изменения
      const update = dataFormat(clientData.updatedAt);
      obj.clientUpdateDate.innerHTML = update.date;
      obj.clientUpdateTime.innerHTML = update.time;

      // Контакты
      const сontacts = getContacts(clientData.contacts);
      for(let i = 0; i < сontacts.length; i++) {
        obj.clientContacts.append(сontacts[i].span);
      }

      // Функция возвращает массив узлов span
      // с иконками контактов
      function getContacts(contacts) {
        let allContacts = [];

        for(let i = 0; i < contacts.length; i++) {
          const emptySpan = createEmptySpan();

          const fullSpan = insertData(emptySpan, contacts[i]);
          allContacts.push(fullSpan);
          // console.log(allContacts);
        }

        function createEmptySpan() {
          const span = document.createElement('span');
          span.classList.add('contact');

          const link = document.createElement('a');
          link.classList.add('client__contact-link');

          span.append(link);

          return {span, link};
        }

        // Функция возвращает span, в котором будет лежать
        // SVG иконка контакта, название которого передается в аргументе
        // и заполненные ссылки
        function insertData(obj, arr) {
          const phoneIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="#9873FF" xmlns="http://www.w3.org/2000/svg"><g><circle cx="8" cy="8" r="8"/><path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/></g></svg>';
          const emailIcon = '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/></svg>';
          const instaIcon = '<svg width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m0 0h32v32h-32z"/><path d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z" fill="#9873FF"/></g></svg>';
          const vkIcon = '<svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/></g></svg>';
          const tgIcon = '<svg width="16" height="16" viewBox="0 0 24 24" fill="#9873FF" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>';

          if (arr.type === 'email') {
            obj.link.innerHTML = emailIcon;
            obj.link.setAttribute('href', `mailto:${arr.value}`);

          }
          else if (arr.type === 'phone') {
            obj.link.innerHTML = phoneIcon;
            obj.link.setAttribute('href', `tel:${arr.value}`);

          }
          else if (arr.type === 'insta') {
            obj.link.innerHTML = instaIcon;
            obj.link.setAttribute('href', `https://www.instagram.com/${arr.value}`);
          }
          else if (arr.type === 'vk') {
            obj.link.innerHTML = vkIcon;
            obj.link.setAttribute('href', `https://vk.com/${arr.value}`);
          }
          else if (arr.type === 'tg') {
            obj.link.innerHTML = tgIcon;
            obj.link.setAttribute('href', `https://t.me/${arr.value}`);

          }

          return obj;
        }

        return allContacts;
      }

      // Возвращаем заполненный obj (<row>)
      return obj.row;
    }

    // Функция возвращает объект из пустых узлов (div.row и дочерние)
    function createEmptyRow() {
      let row = document.createElement('div');
      row.classList.add('row', 'client-row');

      // Id
      let clientId = document.createElement('div');
      clientId.classList.add('col', 'client__id');

      // Имя
      let clientName = document.createElement('div');
      clientName.classList.add('col', 'client__name');

      // Дата и время создания
      let clientCreate = document.createElement('div');
      clientCreate.classList.add('col', 'client__create');
      let clientCreateDate = document.createElement('span');
      clientCreate.appendChild(clientCreateDate);
      let clientCreateTime = document.createElement('span');
      clientCreateTime.classList.add('client__time');
      clientCreate.appendChild(clientCreateTime);

      // Дата и время изменения
      let clientUpdate = document.createElement('div');
      clientUpdate.classList.add('col', 'client__update');
      let clientUpdateDate = document.createElement('span');
      clientUpdate.appendChild(clientUpdateDate);
      let clientUpdateTime = document.createElement('span');
      clientUpdateTime.classList.add('client__time');
      clientUpdate.appendChild(clientUpdateTime);

      //--- Кнопки действий
      let clientActions = document.createElement('div');
      // Кнопка "Изменить"
      clientActions.classList.add('col', 'client__actions');
      let clientUpdateBtn = document.createElement('button');
      clientUpdateBtn.classList.add('btn-reset', 'client__update-btn');
      clientUpdateBtn.innerHTML = 'Изменить';
      // Кнопка "Удалить"
      let clientDeleteBtn = document.createElement('button');
      clientDeleteBtn.classList.add('btn-reset', 'client__delete-btn');
      clientDeleteBtn.innerHTML = 'Удалить';
      clientActions.append(clientUpdateBtn, clientDeleteBtn);

      // Контакты
      let clientContacts = document.createElement('div');
      clientContacts.classList.add('col', 'client__contacts');

      row.appendChild(clientId);
      row.appendChild(clientName);
      row.appendChild(clientCreate);
      row.appendChild(clientUpdate);
      row.appendChild(clientContacts);
      row.appendChild(clientActions);

      return {
        row,
        clientId,
        clientName,
        clientCreateDate,
        clientCreateTime,
        clientUpdateDate,
        clientUpdateTime,
        clientContacts,
        clientActions
      }
    }

  };

  // Конкатинируем имена
  function getFullName(data) {
    const name = data.name;
    const surname = data.surname;
    const lastname = data.lastName;
    return `${surname} ${name} ${lastname}`;
  }

  // Преобразовываем даты
  function dataFormat(createDate) {
    var options = {
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      year: 'numeric',
      month: 'numeric',
    };
    const newDate = new Date(createDate).toLocaleString("ru", options);

    const date = newDate.split(',')[0];
    const time = newDate.split(' ')[1];

    return {
      date,
      time
    };
  }


  // ------------------------------------
  // Сортировка
  // ------------------------------------


  const sortId = document.getElementById('sort-id');
  const sortName = document.getElementById('sort-name');
  // const sortCreate = document.getElementById('sort-create');
  // const sortUpdate = document.getElementById('sort-update');
  // const sortContacts = document.getElementById('sort-contacts');
  // const sortActions = document.getElementById('sort-actions');

  sortId.addEventListener('click', sortById);
  let sortByIdInvert = 1;

  sortName.addEventListener('click', sortByName);
  let sortByNameInvert = 1;

  // sortCreate.addEventListener('click', sortClient('create'));
  // sortUpdate.addEventListener('click', sortClient('update'));
  // sortContacts.addEventListener('click', sortClient('contacts'));
  // sortActions.addEventListener('click', sortClient("actions"));

  function sortByName() {
    if (sortByNameInvert) {
      allClients.sort((a, b) => a.fullname.toLowerCase() > b.fullname.toLowerCase() ? 1 : -1)
      sortByNameInvert = 0;
    } else {
      allClients.sort((a, b) => a.fullname.toLowerCase() < b.fullname.toLowerCase() ? 1 : -1)
      sortByNameInvert = 1;
    }
    createRow(allClients);
  }

  function sortById() {
    if (sortByIdInvert) {
      allClients.sort((a, b) => +a.id > +b.id ? 1 : -1)
      sortByIdInvert = 0;
    } else {
      allClients.sort((a, b) => +a.id < +b.id ? 1 : -1)
      sortByIdInvert = 1;
    }
    createRow(allClients);
  }











  // Вешаем обработчик на кнопку "Добавить контакт"
  const addContact = document.querySelector('.modal__addNewContact-btn');
  addContact.addEventListener('click', createNewContact)

  // Все инпуты из .modal__top
  // Нужны для поведения лейблов и их очистки
  const allInputs = document.querySelectorAll('.modal__input-wrap');

  // Модальное окно
  // Нужно для функции showModal() и closeModal()
  const modal = document.querySelector('.modal');

  // Вешаем обработчик на кнопку "Сохранить"
  const saveBtn = document.querySelector('.modal__saveContact-btn');
  saveBtn.addEventListener('click', saveContact )

  // Функция создает селект и инпут для нового контакта
  function createNewContact() {
    // Сюда все монтируем
    const newContact = document.querySelector('.modal__newContact-content');

    // Делаем контейнер для селекта
    const newContactDiv = document.createElement('div');
    newContactDiv.classList.add('modal__newContact');

    // Делаем один селект
    const select = document.createElement('select');
    select.classList.add('modal__select');

    // Выпадающий список селекта
    const optionPhone = document.createElement('option');
    optionPhone.setAttribute('value', 'phone');
    optionPhone.innerHTML = 'Телефон';
    const optionEmail = document.createElement('option');
    optionEmail.setAttribute('value', 'email');
    optionEmail.innerHTML = 'E-mail';
    const optionVk = document.createElement('option');
    optionVk.setAttribute('value', 'vk');
    optionVk.innerHTML = 'ВКонтакте';
    const optionTg = document.createElement('option');
    optionTg.setAttribute('value', 'tg');
    optionTg.innerHTML = 'Телеграм';
    const optionInsta = document.createElement('option');
    optionInsta.setAttribute('value', 'insta');
    optionInsta.innerHTML = 'Инстаграм';

    // Монтируем список в наш селект
    select.append(
      optionPhone,
      optionEmail,
      optionVk,
      optionTg,
      optionInsta
      );

      // Делаем один инпут
      const input = document.createElement('input');
      input.classList.add('modal__input');
      input.setAttribute('type', 'text');

      // Монтируем селект и инпут в контейнер
      newContactDiv.append(select, input);

      // Монтируем все в DOM
      newContact.append(newContactDiv);

      // Передаем select в плагин choices.js
      choises(select);
  }

  // Показываем модальное окно
  function showModal() {
    // Отображаем окно "Новый клиент"
    fadeIn(modal, 200, 'flex');

    // Поведение label`ов
    (function() {
      for(let i = 0; i < allInputs.length; i++) {
        const label = allInputs[i].firstElementChild;
        const input = allInputs[i].lastElementChild;
        // Есть кейсы, где инпут пустой, а лейбл вверху
        // Строчка ниже решает проблему
        label.classList.remove('modal__label--active');
        input.onfocus = function() {
          label.classList.add('modal__label--active');
        }
        input.onblur = function() {
          if (!input.value) {
            label.classList.remove('modal__label--active');
          }
        }
      }
    })();
  }

  // Если кликнуть вне диалогового окна,
  // на крестик или кнопку "отмена", то окно закроется,
  // инпуты очистятся и удалятся дополнительные селекты
  (function() {
    const closeBtn = document.querySelector('.modal__close-btn');
    const cancelBtn = document.querySelector('.modal__cancel-btn');
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    modal.addEventListener( 'click', (e) => {
      const modalDialog = document.querySelector('.modal__dialog');
      const contains = e.composedPath().includes(modalDialog);
      if ( !contains ) {
        fadeOut(modal, 200);
        closeModal();
      }
    })

  })();

  // Закрытие модального окна из любого места родительской функции
  function closeModal() {
    fadeOut(modal, 200);
    clearModal();

    // Очистка модального окна
    function clearModal() {
      // Удаление инпутов
      (function() {
        for(let i = 0; i < allInputs.length; i++) {
          const input = allInputs[i].lastElementChild.value = '';
        }
      })();
      // Удаление селектов
      (function() {
        const parent = document.querySelector('.modal__newContact-content');
        while (parent.firstChild) {
          parent.removeChild(parent.firstChild);
        }
      })();
    }
  }

  // Взять данные из инпутов и отправить на сервер
  async function saveContact() {
    const nameInput = document.getElementById('modal__name');
    const surnameInput = document.getElementById('modal__surname');
    const lastname = document.getElementById('modal__lastname');

    const newContact = document.querySelector('.modal__newContact');

    let data = {};
    data.name = nameInput.value.trim();
    data.surname = surnameInput.value.trim();
    data.lastName = lastname.value.trim();
    data.contacts = [];

    if (newContact) {
      const allSelects = document.querySelectorAll('.modal__select');
      const allInputs = document.querySelectorAll('.modal__input');

      for(let i = 0; i < allSelects.length; i++) {
        const selectValue = allSelects[i].value;
        const inputValue = allInputs[i].value;
        let obj = {};

        obj.type = selectValue;
        obj.value = inputValue;

        data.contacts.push(obj)
      }
    }

    await postClient(data);

    // Закрываем модальное окно
    closeModal();

    // Берем массив данных с сервера
    allClients = await getClients();

    // Перерисовываем приложение
    showClients();
  };





  // ------------------------------------
  // Анимация
  // ------------------------------------

  // Появление
  function fadeIn(el, timeout, display) {
    el.style.opacity = 0;
    el.style.display = display || 'block';
    el.style.transition = `opacity ${timeout}ms`;
    setTimeout(() => {
      el.style.opacity = 1;
    }, 10);
  };

  // Изчезновение
  function fadeOut(el, timeout) {
    el.style.opacity = 1;
    el.style.transition = `opacity ${timeout}ms`;
    el.style.opacity = 0;
    setTimeout(() => {
      el.style.display = 'none';
    }, timeout);
  };

  // ------------------------------------
  // Методы сервера
  // ------------------------------------

  // Создать клиента
  async function postClient(data = {}) {
    const response = await fetch(`${URL}${URI}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    const client = await response.json();
    console.log(client);
    return client;
  };

  // Получить список клиентов
  async function getClients() {
    const response = await fetch(`${URL}${URI}`);
    const clients = await response.json();
    // console.log(clients[0]);
    return clients;
  };

  // ------------------------------------
  // Сторонние плагины
  // ------------------------------------

  // Инициализация плагина choices.js
  function choises(el) {
    const choises = new Choices(el,{
      searchEnabled: false,
      itemSelectText: ''
    })
  };

})();
