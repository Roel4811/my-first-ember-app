export default function() {
  this.namespace = '/api';

  let users = [{
    {
      id: 1,
      first_name: 'Yori',
      last_name: 'Högemann',
      position: 'CEO',
      age: 'Older',
      nicknames: ['Heug', 'Sales koning'],
      city: 'Amsterdam',
      avatar_src: 'https://www.demeter-online.nl/wp-content/uploads/2015/01/yori-hogemann.jpg'
    },
    {
      id: 1,
      first_name: 'Rick',
      last_name: 'HögeHermansmann',
      position: 'CEO',
      age: 'Older',
      nicknames: ['Tricot'],
      city: 'Weesp',
      avatar: 'https://d1qb2nb5cznatu.cloudfront.net/users/575421-medium_jpg?1463908086'
    },
    {
      id: 1,
      first_name: 'Alvin',
      last_name: 'Vogelzang',
      position: 'CTO',
      age: 'Nearing 30',
      nicknames: ['Un', 'Allie', 'Lee'],
      city: 'Amsterdam',
      avatar: 'https://avatars0.githubusercontent.com/u/1607621?s=400&v=4'
    },
    {
      id: 1,
      first_name: 'Peter',
      last_name: "van 't Zand",
      position: 'Full Stack',
      age: 'Over 30',
      nicknames: ['Reet', 'PeetReet'],
      city: 'Amsterdam',
      avatar: 'https://avatars2.githubusercontent.com/u/1419427?s=460&v=4'
    },
    {
      id: 1,
      first_name: 'Sem',
      last_name: 'Rudolph',
      position: 'Intern',
      age: 'still in his teenage years',
      nicknames: ['Dries'],
      city: 'Haarlem',
      avatar: 'https://media.licdn.com/dms/image/C4E03AQGGAdnbvgudHQ/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=99p6hhkBN5R7VitXD8XzWkxHtWDrL1_31CpyB8R3N_k'
    },
    {
      id: 1,
      first_name: 'Djoeke',
      last_name: 'Kingma',
      position: 'Customer Success',
      age: "Mid 20's",
      nicknames: ['Djoekert', 'Djoekie'],
      city: 'Amsterdam',
      avatar_src: 'https://media.licdn.com/dms/image/C5603AQEliIFxaXCrmA/profile-displayphoto-shrink_200_200/0?e=1580342400&v=beta&t=sW3bBFod4zFwAvQ8bxXW-H2W4BO-5peS14Lj6PUY_YU'
    },
  }]

  this.get('/about', function(db, request) {
    return users
  });
}
