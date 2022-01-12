const express = require('express');
const cors = require('cors');

const app = express();

const EVENTS = {
  'A halloween night out': ['2', '4', '7'],
  'Santas night': ['12', '14', '15'],
  'A night to remeber': ['3', '6', '9'],
  'Thanksgiving Bar Crawl': ['8', '13', '11'],
};

const FRIENDS = [
  {
    id: '1',
    firstName: 'Jason',
    lastName: 'Li',
    tags: ['Outgoing Guy, Over 21'],
  },
  {
    id: '2',
    firstName: 'Benny',
    lastName: 'Huang',
    tags: ['Smooth Moves', 'Over 21'],
  },
  {
    id: '3',
    firstName: 'Victor',
    lastName: 'Liang',
    tags: ['Photographer'],
  },
  {
    id: '4',
    firstName: 'Alex',
    lastName: 'Chen',
    tags: ['Old Man', 'Over 30'],
  },
  {
    id: '5',
    firstName: 'Kevin',
    lastName: 'Chau',
    tags: ['Outgoing Guy', 'Over 21'],
  },
  {
    id: '6',
    firstName: 'Kenneth',
    lastName: 'Eav',
    tags: ['Skinny'],
  },
  {
    id: '7',
    firstName: 'Brian',
    lastName: 'Zhao',
    tags: ['Skinny', 'Alien'],
  },
  {
    id: '8',
    firstName: 'Matt',
    lastName: 'Deng',
    tags: ['Buff', 'Over 21'],
  },
  {
    id: '9',
    firstName: 'Bryan',
    lastName: 'Trieu',
    tags: ['Buff', 'Outgoing Guy'],
  },
  {
    id: '10',
    firstName: 'Brandon',
    lastName: 'Leung',
    tags: ['Funny Guy'],
  },
  {
    id: '11',
    firstName: 'Louis',
    lastName: 'Zhang',
    tags: ['Funny Guy'],
  },
  {
    id: '12',
    firstName: 'Kevin',
    lastName: 'Yu',
    tags: ['Funny Guy'],
  },
  {
    id: '13',
    firstName: 'Young',
    lastName: 'Choi',
    tags: ['Funny Guy'],
  },
  {
    id: '14',
    firstName: 'Sam',
    lastName: 'Loing',
    tags: ['Funny Guy'],
  },
  {
    id: '15',
    firstName: 'Big',
    lastName: 'Tee',
    tags: ['Funny Guy'],
  },
];

app.get('/api/friends', (req, res) => {
  res.send({ friends: FRIENDS })
})




app.use(cors());

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => console.log(`Server running on port: ${PORT}`))