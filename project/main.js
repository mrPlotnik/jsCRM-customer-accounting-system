(async function() {

  // Куда будут монтироваться контакты
  const CLIENTS_WRAP = document.querySelector('.clients-wrap');
  // Обращение к серверу
  const URL = 'http://localhost:3000';
  const URI = '/api/clients';

  // Кнопка "Добавить клиента"
  const newClientBtn = document.querySelector('.new-client-btn');

  // const client = {
  //   name: 'Andrey',
  //   surname: 'Plotnikov',
  //   lastname: 'Sergeevich',
  //   contacts: [
  //     { type: 'Email', value: 'plotnik1992@gmail.com' },
  //   ]
  // };

  // Загружаем список клиентов с сервера
  const allClient = await getClients();

  (function createRow() {

  // Создаем и заполняем елемент row для каждого клиента
  for(let i = 0; i < allClient.length; i++) {
    // Берем "пустой" row (объект из узлов DOM)
    const emptyRow = createRow();
    // заполняем его
    const fullRow = insertDataInRow(emptyRow, allClient[i]);
    // монтируем его
    CLIENTS_WRAP.append(fullRow);
  }

    // Функция возвращает заполненный div.row информацией с сервера
    function insertDataInRow(obj, clientData) {
    // Id
    obj.clientId.innerHTML = clientData.id;

    // Имя
    const fullName = getFullName(clientData);
    obj.clientName.innerHTML = fullName;

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
      obj.clientContacts.append(сontacts[i]);
    }

    // Конкатинируем имена
    function getFullName(clientData) {
      const name = clientData.name;
      const surname = clientData.surname;
      const lastname = clientData.lastname;
      return `${name} ${surname} ${lastname}`;
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

    // Функция возвращает массив узлов span
    // с иконками контактов
    function getContacts(contacts) {
      let allContacts = [];

      for(let i = 0; i < contacts.length; i++) {
        let oneContact = createOneContact(contacts[i].type)
        allContacts.push(oneContact);
      }

      // Функция возвращает span, в котором будет лежать
      // SVG иконка контакта, название которого
      // передается в аргументе
      function createOneContact(str) {
        const phoneIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g><circle cx="8" cy="8" r="8" fill="#9873FF"/><path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/></g></svg>';
        const emailIcon = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/></svg>';

        const contactSpan = document.createElement('span');
        contactSpan.classList.add('contact');

        if (str === 'email') contactSpan.innerHTML = emailIcon;
        else if (str === 'phone') contactSpan.innerHTML = phoneIcon;
        return contactSpan;
      }

      return allContacts;
    }

    // Возвращаем заполненный obj
    return obj.row;
  }

  // Функция возвращает объект из незаполненных узлов
  function createRow() {
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

    // Контакты
    let clientContacts = document.createElement('div');
    clientContacts.classList.add('col', 'client__contacts');

    row.appendChild(clientId);
    row.appendChild(clientName);
    row.appendChild(clientCreate);
    row.appendChild(clientUpdate);
    row.appendChild(clientContacts);

    return {
      row,
      clientId,
      clientName,
      clientCreateDate,
      clientCreateTime,
      clientUpdateDate,
      clientUpdateTime,
      clientContacts,
    }
  }

  })();

  // Клик по кнопкае "Добавить клиента"
  newClientBtn.addEventListener('click', () => {
    // Отображаем окно "Новый клиент"
    const newClientModal = document.querySelector('.modal-1');
    newClientModal.classList.add('display');

    // Если кликнуть вне диалогового окна,
    // то окно закроется
    (function closeModal() {
      const modal = document.querySelector('.modal-1__dialog');
      newClientModal.addEventListener( 'click', (e) => {
      const contains = e.composedPath().includes(modal); 
      if ( !contains ) {
        newClientModal.classList.remove('display');
      }
    })
    })()

  })

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

})();
