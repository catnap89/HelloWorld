import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    name: 'Ekaterina Tankova',
    address: {
      country: 'USA',
      state: 'West Virginia',
      city: 'Parkersburg',
      street: '2849 Fulton Street'
    },
    email: 'ekaterina.tankova@devias.io',
    phone: '304-428-3097',
    avatarUrl: '/images/avatars/avatar_3.png',
    createdAt: 1555016400000
  },
  {
    id: uuid(),
    name: 'Cao Yu',
    address: {
      country: 'USA',
      state: 'Bristow',
      city: 'Iowa',
      street: '1865  Pleasant Hill Road'
    },
    email: 'cao.yu@devias.io',
    avatarUrl: '/images/avatars/avatar_4.png',
    phone: '712-351-5711',
    createdAt: 1555016400000
  },
  // {
  //   id: uuid(),
  //   name: 'Alexa Richardson',
  //   address: {
  //     country: 'USA',
  //     state: 'Georgia',
  //     city: 'Atlanta',
  //     street: '4894  Lakeland Park Drive'
  //   },
  //   email: 'alexa.richardson@devias.io',
  //   phone: '770-635-2682',
  //   avatarUrl: '/images/avatars/avatar_2.png',
  //   createdAt: 1555016400000
  // },
  
];
