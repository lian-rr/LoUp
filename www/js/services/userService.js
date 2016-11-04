angular.module('UserService', [])
  .service('userService', [function () {

    return {
      users: [
        {
          name: 'Lian',
          lastname: 'Rodriguez',
          email: 'lian@hotmail.com',
          phone: '87229900'
        }
      ],

      active:  {
        name: 'Lian',
        lastname: 'Rodriguez',
        email: 'lian@hotmail.com',
        phone: '87229900'
      }

    }

  }]);
