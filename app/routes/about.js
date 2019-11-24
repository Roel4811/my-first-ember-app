import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [
      {
        id: 1,
        firstName: 'Yori',
        lastName: 'Högemann',
        position: 'CEO',
        age: 'Older',
        nicknames: ['Heug', 'Sales koning'],
        city: 'Amsterdam',
        avatar: 'https://www.demeter-online.nl/wp-content/uploads/2015/01/yori-hogemann.jpg'
      },
      {
        id: 1,
        firstName: 'Rick',
        lastName: 'HögeHermansmann',
        position: 'CEO',
        age: 'Older',
        nicknames: ['Tricot'],
        city: 'Weesp',
        avatar: 'https://d1qb2nb5cznatu.cloudfront.net/users/575421-medium_jpg?1463908086'
      },
      {
        id: 1,
        firstName: 'Alvin',
        lastName: 'Vogelzang',
        position: 'CTO',
        age: 'Nearing 30',
        nicknames: ['Un', 'Allie', 'Lee'],
        city: 'Amsterdam',
        avatar: 'https://avatars0.githubusercontent.com/u/1607621?s=400&v=4'
      },
      {
        id: 1,
        firstName: 'Peter',
        lastName: "van 't Zand",
        position: 'Full Stack',
        age: 'Over 30',
        nicknames: ['Reet', 'PeetReet'],
        city: 'Amsterdam',
        avatar: 'https://avatars2.githubusercontent.com/u/1419427?s=460&v=4'
      },
      {
        id: 1,
        firstName: 'Sem',
        lastName: 'Rudolph',
        position: 'Intern',
        age: 'still in his teenage years',
        nicknames: ['Dries'],
        city: 'Haarlem',
        avatar: 'https://media.licdn.com/dms/image/C4E03AQGGAdnbvgudHQ/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=99p6hhkBN5R7VitXD8XzWkxHtWDrL1_31CpyB8R3N_k'
      },
      {
        id: 1,
        firstName: 'Djoeke',
        lastName: 'Kingma',
        position: 'Customer Success',
        age: "Mid 20's",
        nicknames: ['Djoekert', 'Djoekie'],
        city: 'Amsterdam',
        avatar: 'https://media.licdn.com/dms/image/C5603AQEliIFxaXCrmA/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=sW3bBFod4zFwAvQ8bxXW-H2W4BO-5peS14Lj6PUY_YU'
      }
    ]
  }
});
