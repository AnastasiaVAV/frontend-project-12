export default {
  translation: {
    login: {
      title: 'Войти',
      form: {
        username: 'Ваш ник',
        password: 'Пароль',
        submit: 'Войти',
        feedback: 'Неверные имя пользователя или пароль',
      },
      noAccountQuestion: 'Нет аккаунта?',
      registration: 'Регистрация',
    },
    signup: {
      title: 'Регистрация',
      form: {
        username: 'Имя пользователя',
        password: 'Пароль',
        confirmPassword: 'Подтвердите пароль',
        submit: 'Зарегистрироваться',
        feedbacks: {
          username: 'От 3 до 20 символов',
          password: 'Не менее 6 символов',
          confirmPassword: 'Пароли должны совпадать',
          uniqueUser: 'Такой пользователь уже существует',
          required: 'Обязательное поле',
        },
      },
    },
    chat: {
      channels: 'Каналы',
      loadingChannel: 'Загрузка канала...',
      channelMenu: {
        dropdownEl: 'Управление каналом',
        removeBtn: 'Удалить',
        renameBtn: 'Переименовать',
      },
      messages: {
        key_one: '{{count}} сообщение',
        key_few: '{{count}} сообщения',
        key_many: '{{count}} сообщений',
      },
      form: {
        enterMessage: 'Введите сообщение...',
        submit: 'Отправить',
      },
    },
    modal: {
      addChannel: {
        title: 'Добавить канал',
      },
      renameChannel: {
        title: 'Переименовать канал',
      },
      removeChannel: {
        title: 'Удалить канал',
        body: 'Вы уверены?',
      },
      buttons: {
        cancel: 'Отменить',
        submit: 'Отправить',
        delete: 'Удалить',
      },
      channelsErrors: {
        required: 'Обязательное поле',
        length: 'От 3 до 20 символов',
        notOneOf: 'Должно быть уникальным',
      },
    },
    notFoundPage: {
      title: 'Страница не найдена',
      toMainPage: 'Но вы можете перейти <0>на главную страницу</0>',
    },
  },
}
