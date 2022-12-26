(async function() {
  const phoneIcon = '<svg class="phoneIcon" width="16" height="16" viewBox="0 0 16 16" fill="#9873FF" xmlns="http://www.w3.org/2000/svg"><g><circle cx="8" cy="8" r="8"/><path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/></g></svg>';
  const emailIcon = '<svg class="emailIcon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/></svg>';
  const instaIcon = '<svg class="instaIcon" width="16" height="16" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><g fill="none"><path d="m0 0h32v32h-32z"/><path d="m17.0830929.03277248c8.1190907 0 14.7619831 6.64289236 14.7619831 14.76198302v2.3064326c0 8.1190906-6.6429288 14.761983-14.7619831 14.761983h-2.3064325c-8.11909069 0-14.76198306-6.6428924-14.76198306-14.761983v-2.3064326c0-8.11909066 6.64289237-14.76198302 14.76198306-14.76198302zm-.8630324 8.0002641-.2053832-.0002641c-1.7102378 0-3.4204757.05652851-3.4204757.05652851-2.4979736 0-4.52299562 2.02501761-4.52299562 4.52298561 0 0-.05191606 1.4685349-.05624239 3.0447858l-.00028625.2060969c0 1.7648596.05652864 3.590089.05652864 3.5900891 0 2.497968 2.02502202 4.5229856 4.52299562 4.5229856 0 0 1.5990132.0565285 3.2508899.0565285 1.7648634 0 3.6466255-.0565285 3.6466255-.0565285 2.4979736 0 4.4664317-1.9684539 4.4664317-4.4664219 0 0 .0565286-1.8046833.0565286-3.5335605l-.0010281-.4057303c-.0076601-1.5511586-.0555357-3.0148084-.0555357-3.0148084 0-2.4979681-1.9684582-4.46642191-4.4664317-4.46642191 0 0-1.6282521-.05209668-3.2716213-.05626441zm-.2053831 1.43969747c1.4024317 0 3.2005639.04637875 3.2005638.04637875 2.0483524 0 3.3130573 1.2647021 3.3130573 3.31305 0 0 .0463789 1.7674322.0463789 3.1541781 0 1.4176885-.0463789 3.2469355-.0463789 3.2469355 0 2.048348-1.2647049 3.31305-3.3130573 3.31305 0 0-1.5901757.0389711-2.9699093.0454662l-.3697206.0009126c-1.3545375 0-3.0049692-.0463788-3.0049692-.0463788-2.0483172 0-3.36958592-1.321301-3.36958592-3.3695785 0 0-.04637885-1.8359078-.04637885-3.2830941 0-1.3545344.04637885-3.061491.04637885-3.061491 0-2.0483479 1.32130402-3.31305 3.36958592-3.31305 0 0 1.7416035-.04637875 3.1440353-.04637875zm-.0000353 2.46195055c-2.2632951 0-4.0980441 1.8347448-4.0980441 4.098035s1.8347489 4.098035 4.0980441 4.098035 4.0980441-1.8347448 4.0980441-4.098035c0-2.2632901-1.8347489-4.098035-4.0980441-4.098035zm0 1.4313625c1.4727754 0 2.6666784 1.1939004 2.6666784 2.6666725s-1.193903 2.6666726-2.6666784 2.6666726c-1.4727401 0-2.6666784-1.1939005-2.6666784-2.6666726s1.1939031-2.6666725 2.6666784-2.6666725zm4.2941322-2.5685935c-.5468547 0-.9902027.4455321-.9902027.9950991 0 .5495671.443348.9950639.9902027.9950639.5468546 0 .9901674-.4454968.9901674-.9950639 0-.5496023-.4433128-.9950991-.9901674-.9950991z" fill="#9873FF"/></g></svg>';
  const vkIcon = '<svg class="vkIcon" width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/></g></svg>';
  const tgIcon = '<svg class="tgIcon" width="16" height="16" viewBox="0 0 24 24" fill="#9873FF" xmlns="http://www.w3.org/2000/svg"><path d="m12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12c0-6.627-5.373-12-12-12zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/></svg>';
  const otherIcon = '<svg class="otherIcon" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/></svg>';


  // ------------------------------------
  // Методы сервера
  // ------------------------------------

  class Server {

    constructor() {
      this.URL = 'http://localhost:3000';
      this.URI = '/api/clients';
    }

    // Создать клиента
    async newClient(obj = {}) {
      const response = await fetch(`${this.URL}${this.URI}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      });
      const status = response.status;
      const data = await response.json();
      return {status, data};
    };

    // Получить список клиентов
    async getClients() {
      const response = await fetch(`${this.URL}${this.URI}`);
      const clients = await response.json();
      return clients;
    };

    // Получить клиента по id
    async getClient(id) {
      const response = await fetch(`${this.URL}${this.URI}/${id}`);
      const clients = await response.json();
      return clients;
    };

    // Удалить клиента по id
    async deleteClient(id) {
      const response = await fetch(`${this.URL}${this.URI}/${id}`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(id)
      });
      const status = response.status;
      const data = await response.json();
      return {status, data};
    };

    // Изменить клиента по id
    async updateClient(id, obj = {}) {
      const response = await fetch(`${this.URL}${this.URI}/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj)
      });
      const status = response.status;
      const data = await response.json();
      return {status, data};
    };

  }

  // ------------------------------------
  // Запуск CRM
  // ------------------------------------
  const deleteIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_216_224)"><path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/></g><defs><clipPath id="clip0_216_224"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>'


  // Создаем объект с методами сервера
  let server = new Server();

  // Сюда будут монтироваться div.row с клиентами
  const CLIENTS_WRAP = document.querySelector('.clients-wrap');

  // Массив клиентов
  let allClients = [];

  show();

  async function show() {
    // Копируем в переменную массив клиентов полученный с сервера
    allClients = (await server.getClients()).slice(0);

    // --------------------------------------------
    // Подготовительные изменения массива контактов
    // --------------------------------------------

    // Добавляем ключ fullname в объекты
    allClients.forEach((el) => el.fullname = getFullName(el));

    // Добавляем ключ id для каждого контакта
    // для более простой сортировки
    allClients.forEach((el) => {
      const contacts = el.contacts;
      contacts.forEach((e) => {
        if (e.type === 'phone') e.id = 1;
        else if (e.type === 'email') e.id = 2;
        else if (e.type === 'tg') e.id = 3;
        else if (e.type === 'vk') e.id = 4;
        else if (e.type === 'insta') e.id = 5;
      })
    });

    // Предсортировка контактов у каждого клиента
    allClients.forEach((el) => sortContacts(el.contacts));

    // Предсортировка всего массива по дате создания
    // перед отрисовкой
    sortByCreateDate();

    console.log(allClients);

    // Создаем и заполняем данными div.row для каждого клиента
    createRow(allClients);

    // Конкатинируем имена
    function getFullName(data) {
      const name = data.name;
      const surname = data.surname;
      const lastname = data.lastName;
      return `${surname} ${name} ${lastname}`;
    }
  }

  // Создаем и заполняем елемент row для каждого клиента
  // Оставляем в глоб-м scope для перерисовывания при сортировке
  function createRow(allClients) {
    // Удаляем дочерние DOM узлы
    deleteChildNode(CLIENTS_WRAP);

    allClients.forEach((el) => {
      // Берем "пустой" row (объект из узлов DOM)
      const emptyRow = createEmptyRow();
      // заполняем его
      const fullRow = insertDataInRow(emptyRow, el);
      // монтируем его
      CLIENTS_WRAP.append(fullRow);
    })

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

      // Вешаем обработчики на все кнопки "Изменить" и "Удалить"
      obj.clientUpdateBtn.addEventListener('click', () => { showModalUpdate(clientData.id) });
      obj.clientDeleteBtn.addEventListener('click', () => { showModalDelete(clientData.id) });

      // Функция возвращает массив узлов span
      // с иконками контактов
      function getContacts(contacts) {
        let allContacts = [];

        for(let i = 0; i < contacts.length; i++) {
          const emptySpan = createEmptySpan();

          const fullSpan = insertData(emptySpan, contacts[i]);
          allContacts.push(fullSpan);
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

           if (arr.type === 'phone') {
            obj.link.innerHTML = phoneIcon;
            obj.link.setAttribute('href', `tel:${arr.value}`);
            tooltip(obj.link, `Телефон: <span class="tooltip">${arr.value}</span>`);
          } else if (arr.type === 'email') {
            obj.link.innerHTML = emailIcon;
            obj.link.setAttribute('href', `mailto:${arr.value}`);
            tooltip(obj.link, `Почта: <span class="tooltip">${arr.value}</span>`);
          } else if (arr.type === 'insta') {
            obj.link.innerHTML = instaIcon;
            obj.link.setAttribute('href', `https://www.instagram.com/${arr.value}`);
            tooltip(obj.link, `Инстаграм: <span class="tooltip">${arr.value}</span>`);
          } else if (arr.type === 'vk') {
            obj.link.innerHTML = vkIcon;
            obj.link.setAttribute('href', `https://vk.com/${arr.value}`);
            tooltip(obj.link, `ВКонтакте: <span class="tooltip">${arr.value}</span>` );
          } else if (arr.type === 'tg') {
            obj.link.innerHTML = tgIcon;
            obj.link.setAttribute('href', `https://t.me/${arr.value}`);
            tooltip(obj.link, `Телеграм: <span class="tooltip">${arr.value}</span>` );
          } else if (arr.type === 'fb') {
            obj.link.innerHTML = otherIcon;
            obj.link.setAttribute('href', `https://www.facebook.com/${arr.value}`);
            tooltip(obj.link, `Фейсбук: <span class="tooltip">${arr.value}</span>` );
          } else if (arr.type === 'tw') {
            obj.link.innerHTML = otherIcon;
            obj.link.setAttribute('href', `https://twitter.com/${arr.value}`);
            tooltip(obj.link, `Твиттер: <span class="tooltip">${arr.value}</span>` );
          } else if (arr.type === 'otherEmail') {
            obj.link.innerHTML = emailIcon;
            obj.link.setAttribute('href', `mailto:${arr.value}`);
            tooltip(obj.link, `Доп. почта: <span class="tooltip">${arr.value}</span>` );
          }else if (arr.type === 'otherTel') {
            obj.link.innerHTML = phoneIcon;
            obj.link.setAttribute('href', `tel:${arr.value}`);
            tooltip(obj.link, `Доп. телефон: <span class="tooltip">${arr.value}</span>` );
          }

          function tooltip(el, content) {
            tippy(el, { content, allowHTML: true })
          }

          return obj;
        }

        return allContacts;
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
        return { date, time };
      }

      // Возвращаем заполненный obj (<row>)
      return obj.row;
    }

    // Функция возвращает объект из пустых узлов (div.row и дочерние)
    function createEmptyRow() {
      const editIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_216_219)"> <path d="M2 11.5002V14.0002H4.5L11.8733 6.62687L9.37333 4.12687L2 11.5002ZM13.8067 4.69354C14.0667 4.43354 14.0667 4.01354 13.8067 3.75354L12.2467 2.19354C11.9867 1.93354 11.5667 1.93354 11.3067 2.19354L10.0867 3.41354L12.5867 5.91354L13.8067 4.69354Z" fill="#9873FF"/></g><defs><clipPath id="clip0_216_219"> <rect width="16" height="16" fill="white"/></clipPath></defs></svg>'

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
      clientUpdateBtn.innerHTML = editIcon + 'Изменить';
      // Кнопка "Удалить"
      let clientDeleteBtn = document.createElement('button');
      clientDeleteBtn.classList.add('btn-reset', 'client__delete-btn');
      clientDeleteBtn.innerHTML = deleteIcon + 'Удалить';

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
        clientActions,
        clientUpdateBtn,
        clientDeleteBtn
      }
    }
  };

  // ------------------------------------
  // Сортировки
  // ------------------------------------

  // Сортировка контактов каждого клиента
  function sortContacts(clientContacts) {
    clientContacts.sort((a, b) => a.id > b.id)
  }

  const sortId = document.querySelector('#sort-id .sort__header');
  const sortName = document.querySelector('#sort-name .sort__header');
  const sortCreate = document.querySelector('#sort-create .sort__header');
  const sortUpdate = document.querySelector('#sort-update .sort__header');

  sortId.addEventListener('click', sortById);
  let sortByIdInvert = 0;

  sortName.addEventListener('click', sortByName);
  let sortByNameInvert = 0;

  sortCreate.addEventListener('click', sortByCreateDate);
  let sortByCreateDateInvert = 0;

  sortUpdate.addEventListener('click',  sortByUpdateDate);
  let sortByUpdateDateInvert = 0;

  function sortById() {
    if (sortByIdInvert) {
      allClients.sort((a, b) => +a.id > +b.id ? 1 : -1)
      sortByIdInvert = 0;
    } else {
      allClients.sort((a, b) => +a.id < +b.id ? 1 : -1)
      sortByIdInvert = 1;
    }
    sortActive(sortId);
    createRow(allClients);
  }

  function sortByName() {
    if (sortByNameInvert) {
      allClients.sort((a, b) => a.fullname.toLowerCase() > b.fullname.toLowerCase() ? 1 : -1)
      sortByNameInvert = 0;
    } else {
      allClients.sort((a, b) => a.fullname.toLowerCase() < b.fullname.toLowerCase() ? 1 : -1)
      sortByNameInvert = 1;
    }
    sortActive(sortName);
    createRow(allClients);
  }

  function sortByCreateDate() {
    if (sortByCreateDateInvert) {
      allClients.sort((a, b) => {
        let dateA = new Date(a.createdAt);
        let dateB = new Date(b.createdAt);
        return dateA - dateB;
      });
      sortByCreateDateInvert = 0;
    } else {
      allClients.sort((a, b) => {
        let dateA = new Date(a.createdAt);
        let dateB = new Date(b.createdAt);
        return dateB - dateA;
      });
      sortByCreateDateInvert = 1;
    }
    sortActive(sortCreate);
    createRow(allClients);
  }

  function sortByUpdateDate() {
    if (sortByUpdateDateInvert) {
      allClients.sort((a, b) => {
        let dateA = new Date(a.updatedAt);
        let dateB = new Date(b.updatedAt);
        return dateA - dateB;
      });
      sortByUpdateDateInvert = 0;
    } else {
      allClients.sort((a, b) => {
        let dateA = new Date(a.updatedAt);
        let dateB = new Date(b.updatedAt);
        return dateB - dateA;
      });
      sortByUpdateDateInvert = 1;
    }
    sortActive(sortUpdate);
    createRow(allClients);
  }

  let activeSort = null;

  function sortActive(el) {
    // Ищем svg в переданном элементе
    const list = Array.from(el.childNodes);
    const svg = list.find((item) => item.nodeName.includes('svg'));

    svg.classList.toggle('rotate');

    // Первая сортировка
    if (activeSort === null) {
      activeSort = el;
      el.classList.add('sort-active');
    }

    // При смене сортировки
    if (el !== activeSort) {
      activeSort.classList.remove('sort-active');
      activeSort = el;
      el.classList.add('sort-active');
    }
  }

  // ------------------------------------
  // Поведение модального окна
  // ------------------------------------

  // Кнопка "Добавить клиента"
  const addClientBtn = document.querySelector('.newclient__btn');
  // вызывает модальное окно
  addClientBtn.addEventListener('click', showModalAdd);

  // Модальное окно "Добавить клиента"
  const modal = document.getElementById('modal');

  // Все инпуты из .modal__top
  // Нужны для поведения лейблов и их очистки
  const modalAllInputsWrap = document.querySelectorAll('.modal__input-wrap');

  let newContactCount = 0;

  // Если контактов 10, то скрываем кнопку
  function checkContactcount(bool) {
    if (bool) newContactCount++;
    else newContactCount--;
    if (newContactCount === 10) fadeOut(modalAddContactBtn, 200);
    else fadeIn(modalAddContactBtn, 200, 'flex');
  }

  // Кнопка модального окна "Добавить контакт"
  const modalAddContactBtn = document.querySelector('.modal__addNewContact-btn');
  // добавляет новый селект и инпут
  modalAddContactBtn.addEventListener('click', createNewContact)

  // Кнопка модального окна "Сохранить"
  const modalSaveBtn = document.getElementById('modal__primary-btn');
  const modalSecondaryBtn = document.getElementById('modal__secondary-btn');

  // Вешаем обработчики закрытия на модальное окно
  // По нажатию на "х", кнопку "Отмена" или фон модального окна
  // модальное окно закроется
  modalCloseEvents(modal);

  // Возврящает все инпуты (массив объектов) из модального окна
  function getAllInputs() {
    const nameInput = document.getElementById('modal__name');
    const surnameInput = document.getElementById('modal__surname');
    const lastnameInput = document.getElementById('modal__lastname');
    return { nameInput, surnameInput, lastnameInput };
  }

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
    optionPhone.innerHTML = `${phoneIcon} Телефон`;
    const optionEmail = document.createElement('option');
    optionEmail.setAttribute('value', 'email');
    optionEmail.innerHTML = `${emailIcon} Почта`;
    const optionVk = document.createElement('option');
    optionVk.setAttribute('value', 'vk');
    optionVk.innerHTML = `${vkIcon} ВКонтакте`;
    const optionTg = document.createElement('option');
    optionTg.setAttribute('value', 'tg');
    optionTg.innerHTML = `${tgIcon} Телеграм`;
    const optionInsta = document.createElement('option');
    optionInsta.setAttribute('value', 'insta');
    optionInsta.innerHTML = `${instaIcon} Инстаграм`;
    const optionFb = document.createElement('option');
    optionFb.setAttribute('value', 'fb');
    optionFb.innerHTML = `${otherIcon} Фейсбук`;
    const optionTw = document.createElement('option');
    optionTw.setAttribute('value', 'tw');
    optionTw.innerHTML = `${otherIcon} Твиттер`;
    const optionOtherTel = document.createElement('option');
    optionOtherTel.setAttribute('value', 'otherTel');
    optionOtherTel.innerHTML = `${phoneIcon} Доп. телефон`;
    const optionOtherEmail = document.createElement('option');
    optionOtherEmail.setAttribute('value', 'otherEmail');
    optionOtherEmail.innerHTML = `${emailIcon} Доп. почта`;

    // Монтируем список в наш селект
    select.append(
      optionPhone,
      optionEmail,
      optionVk,
      optionTg,
      optionInsta,
      optionFb,
      optionTw,
      optionOtherTel,
      optionOtherEmail
    );

    // Делаем один инпут
    const input = document.createElement('input');
    input.classList.add('modal__input');
    input.setAttribute('type', 'text');

    // Делаем кнопку
    const btn1 = document.createElement('button');
    btn1.classList.add('btn-reset', 'modal__deleteContact-btn');
    btn1.innerHTML = deleteIcon;
    // вешаем на нее обработчик удаления
    btn1.addEventListener('click', function() {
      const parent = newContactDiv.parentNode;
      parent.removeChild(newContactDiv);
      checkContactcount(0);
    });

    // Монтируем селект и инпут в контейнер
    newContactDiv.append(select, input, btn1);

    // Монтируем все в DOM
    newContact.append(newContactDiv);

    // Передаем select в плагин choices.js
    const choisesObj = choises(select);

    checkContactcount(1);

    return { choisesObj, input };
  }

  // Формирование объекта из данных формы для отправки на сервер
  function createObj(inputsObj) {
    const newContact = document.querySelector('.modal__newContact');

    let data = {};
    data.name = inputsObj.nameInput.value.trim();
    data.surname = inputsObj.surnameInput.value.trim();
    data.lastName = inputsObj.lastnameInput.value.trim();
    data.contacts = [];

    if (newContact) {
      const allSelects = document.querySelectorAll('.modal__select');
      const allContactInputs = document.querySelectorAll('.modal__input');

      for(let i = 0; i < allSelects.length; i++) {
        const selectValue = allSelects[i].value;
        let inputValue = null;
        if (allContactInputs[i].value === '') {
          // если инпут пустой, то ничего не делаем
          // не пушим на этой итерации в массив data
        }
        else {
          inputValue = allContactInputs[i].value;
          let obj = {};

          obj.type = selectValue;
          obj.value = inputValue;

          data.contacts.push(obj)
        }
      }
    }
    return data;
  }

  // Отображаем модальное окно
  function showModal(title, client) {
    clearModalInputs();
    newContactCount = 0;
    fadeIn(modal, 200, 'flex');
    fadeIn(modalAddContactBtn, 200, 'flex');

    const h2 = document.querySelector('.modal__top h2');

    // Если client передан, значит это окно "Изменить клиента"
    if (client !== undefined) {
      h2.innerHTML = `${title}<span>ID: ${client.id}</span>`;
      const inputs = getAllInputs();
      inputs.nameInput.value = client.name;
      inputs.surnameInput.value = client.surname;
      inputs.lastnameInput.value = client.lastName

      for(let i = 0; i < client.contacts.length; i++) {
        const contact = createNewContact();
        // Тут метод из библиотеки choises.js
        contact.choisesObj.setChoiceByValue(client.contacts[i].type);
        contact.input.value = client.contacts[i].value;
      }
      modalSaveBtn.addEventListener('click', updateClient);
      modalSecondaryBtn.innerHTML = 'Удалить клиента';
      modalSecondaryBtn.addEventListener('click', () => { showModalDelete(client.id) });

    } else {
      h2.innerHTML = title;
      // Отправляем данные на сервер
      modalSaveBtn.addEventListener('click', newClient);
      modalSecondaryBtn.innerHTML = 'Отмена';
    };

    // Поведение label`ов
    (function() {
      for(let i = 0; i < modalAllInputsWrap.length; i++) {
        const label = modalAllInputsWrap[i].firstElementChild;
        const input = modalAllInputsWrap[i].lastElementChild;

        label.classList.remove('modal__label--active');

        if (input.value) {
          label.classList.add('modal__label--active');
        }
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

  // ------------------------------------
  // Поведение модального окна "Добавить клиента"
  // ------------------------------------

  function showModalAdd() {
    showModal('Новый клиент');
  }

  // (Новый клиент) Взять данные из инпутов и отправить на сервер
  async function newClient() {
    // Берем данные из инпутов
    const inputsObj = getAllInputs();
    // Формируем объект с данными клиента
    const data = createObj(inputsObj);
    // Отправляем его на сервер
    const response = await server.newClient(data);
    // Обрабатываем ответ сервера
    modalErrorsCheck(response, modal);
  };

  // Очистка модального окна "Добавить клиента"
  // удаление инпутов и селектов
  function clearModalInputs() {
    // Очистка инпутов
    for(let i = 0; i < modalAllInputsWrap.length; i++) {
      const input = modalAllInputsWrap[i].lastElementChild.value = '';
    }

    // Удаление селектов и инпутов контактов
    const parent = document.querySelector('.modal__newContact-content');
    while (parent.firstChild) {
      parent.removeChild(parent.firstChild); // Повторяется
    }

  };

  // ------------------------------------
  // Поведение модального окна "Изменить клиента"
  // ------------------------------------

  // ID клиента, котрого нужно изменить
  let clientIndexUpdate = null;

  // Показать модальное окно с нужным клиентом
  async function showModalUpdate(id) {
    clientIndexUpdate = id;
    const client = await server.getClient(clientIndexUpdate);
    showModal('Изменить клиента', client);
  }

  // (Изменить клиента) Взять данные из инпутов и отправить на сервер
  async function updateClient() {
    const inputsObj = getAllInputs();
    const obj = createObj(inputsObj);

    const response = await server.updateClient(clientIndexUpdate, obj);

    modalErrorsCheck(response, modal);
  };

  // ------------------------------------
  // Поведение модального окна "Удалить клиента"
  // ------------------------------------

  // Модальное модальное окно "Удалить клиента"
  const modalDelete = document.getElementById('modal-delete');

  // Вешаем необходимые обработчики закрытия
  modalCloseEvents(modalDelete);

  // Кнопка "Удалить", подтверждающая удаление
  const deleteBtn = document.getElementById('modal-delete__primary-btn');
  // вызывает удаление клиента с сервера
  deleteBtn.addEventListener('click', deleteClient);

  // ID клиента, котрого нужно удалить
  let clientIndexDelete = null;

  // Узнаем id клиента
  // отображаем модальное окно
  function showModalDelete(id) {
    clientIndexDelete = id;
    fadeIn(modalDelete, 200, 'flex');
  }

  // Удаляем клиента с сервера, используя его id
  async function deleteClient() {
    const response = await server.deleteClient(clientIndexDelete);
    modalErrorsCheck(response, modalDelete);
  }

  // ------------------------------------
  // Общие функции модальных окон
  // ------------------------------------

  // Если успешно, то
  // закрываем модальное окно и перерисовываем приложение
  // Если есть ошибки - показываем их
  function modalErrorsCheck(response, modal) {
    if (response.status === 200 || response.status === 201) {
      // Закрываем модальное окно
      closeModal(modal);
      // Перерисовываем приложение
      show();
    } else if (response.data.hasOwnProperty('errors')) {
      showError(response.data.errors);
    } else {
      showError('Что-то пошло не так...');
    }
  }

  // Удалить дочерние узлы
  function deleteChildNode(node) {
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
  }

  const errorsWrap = document.querySelector('.modal__errors-wrap');

  // показать ошибки сервера
  function showError(messages) {
    deleteChildNode(errorsWrap);

    for (let i = 0; i < messages.length; i++) {
      let errorSpan = document.createElement('span');
      errorSpan.classList.add('error');
      errorSpan.innerHTML = messages[i].message;
      errorsWrap.append(errorSpan);
      fadeIn(errorsWrap, 0, 'flex');
    }
  }

  // Если кликнуть вне диалоговых окон,
  // на крестик или кнопку "отмена", то окно закроется,
  // инпуты очистятся и удалятся дополнительные селекты
  function modalCloseEvents(modal) {
    // Кнопки "Х" и "Отмена" модального окна
    const modalCloseBtn = document.querySelector(`#${modal.id} .modal__close-btn`);
    const modalCancelBtn = document.querySelector(`#${modal.id} .modal__secondary-btn`);
    // закрывают модальное окно "Добавить клиента"
    modalCloseBtn.addEventListener('click', () => { closeModal(modal) });
    modalCancelBtn.addEventListener('click', () => { closeModal(modal) });

    // Клик вне модального она закрывает окно
    modal.addEventListener( 'click', (e) => {
      const modalDialog = document.querySelector(`#${modal.id} .modal__dialog`);
      const contains = e.composedPath().includes(modalDialog);
      if (!contains) {
        closeModal(modal);
        if (modal.id === 'modal-add') clearModalInputs();
      }
    })
  };

  // Закрытие модальных окон
  function closeModal(el) {
    fadeOut(el, 200);
    deleteChildNode(errorsWrap);

    if (el.id === 'modal') {
      setTimeout(() => {
        modalSaveBtn.removeEventListener('click', updateClient);
        modalSaveBtn.removeEventListener('click', newClient);
      }, 300)
    }
  }

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
  // Сторонние плагины
  // ------------------------------------

  // Инициализация плагина choices.js
  function choises(el) {
    const choises = new Choices(el,{
      searchEnabled: false,
      itemSelectText: '',
      sorter: () => {
        // тут пусто, чтобы не было сортировки по умолчанию
      },
    })
    return choises;
  };

})();
