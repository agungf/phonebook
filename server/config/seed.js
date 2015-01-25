/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Thing = require('../api/thing/thing.model');
var User = require('../api/user/user.model');

Thing.find({}).remove(function() {
  Thing.create({
    name : 'User Authentication and Authorization',
    info : 'It should have a login with username and password so the user can access the main user interface.'
  }, {
    name : 'Protected Area',
    info : 'Once the user is logged in you will need to have a logout button where he can go out of the protected area.'
  }, {
    name : 'Add Record',
    info : 'There should also be an option to add new records in the phone book which will contain: Name, Phone number, Date of adding, Additional Notes'
  },  {
    name : 'Manage phonebook',
    info : 'We need to have an option to edit/delete existing records in the phone book'
  },  {
    name : 'Pagination',
    info : 'It needs to have a pagination for the records which are more than 10 on page'
  },{
    name : 'Search',
    info : 'Need to have a search field on the top allowing the user to search through all the fields mentioned above (Name, Phone number, Date of adding, Additional Notes)'
  });
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'user1',
    email: 'user1@mail.com',
    password: 'test',
    phone: '0812345678901',
    dateAdded: new Date(),
    notes: 'user one'
  }, 
  {
    provider: 'local',
    name: 'user2',
    email: 'user2@mail.com',
    password: 'test',
    phone: '0812345678902',
    dateAdded: new Date(),
    notes: 'user two'
  }, 
  {
    provider: 'local',
    name: 'user3',
    email: 'user3@mail.com',
    password: 'test',
    phone: '0812345678903',
    dateAdded: new Date(),
    notes: 'user three'
  }, 
  {
    provider: 'local',
    name: 'user4',
    email: 'user4@mail.com',
    password: 'test',
    phone: '0812345678904',
    dateAdded: new Date(),
    notes: 'user four'
  }, 
  {
    provider: 'local',
    name: 'user5',
    email: 'user5@mail.com',
    password: 'test',
    phone: '0812345678905',
    dateAdded: new Date(),
    notes: 'user five'
  }, 
  {
    provider: 'local',
    name: 'user6',
    email: 'user6@mail.com',
    password: 'test',
    phone: '0812345678906',
    dateAdded: new Date(),
    notes: 'user six'
  }, 
  {
    provider: 'local',
    name: 'user7',
    email: 'user7@mail.com',
    password: 'test',
    phone: '0812345678907',
    dateAdded: new Date(),
    notes: 'user seven'
  }, 
  {
    provider: 'local',
    name: 'user8',
    email: 'user8@mail.com',
    password: 'test',
    phone: '0812345678908',
    dateAdded: new Date(),
    notes: 'user eight'
  }, 
  {
    provider: 'local',
    name: 'user9',
    email: 'user2@mail.com',
    password: 'test',
    phone: '0812345678909',
    dateAdded: new Date(),
    notes: 'user nine'
  }, 
  {
    provider: 'local',
    name: 'user10',
    email: 'user10@mail.com',
    password: 'test',
    phone: '0812345678910',
    dateAdded: new Date(),
    notes: 'user ten'
  }, 
  {
    provider: 'local',
    name: 'user11',
    email: 'user11@mail.com',
    password: 'test',
    phone: '0812345678911',
    dateAdded: new Date(),
    notes: 'user eleven'
  }, 
  {
    provider: 'local',
    name: 'user12',
    email: 'user10@mail.com',
    password: 'test',
    phone: '0812345678912',
    dateAdded: new Date(),
    notes: 'user twelve'
  },
  {
    provider: 'local',
    name: 'user13',
    email: 'user13@mail.com',
    password: 'test',
    phone: '0812345678913',
    dateAdded: new Date(),
    notes: 'user 3rd teen'
  }, 
  {
    provider: 'local',
    name: 'user14',
    email: 'user14@mail.com',
    password: 'test',
    phone: '0812345678914',
    dateAdded: new Date(),
    notes: 'user fourteen'
  }, 
 
  {
    provider: 'local',
    role: 'admin',
    name: 'demo',
    email: 'demo@mail.com',
    password: 'demo',
    phone: '08123456789',
    dateAdded: new Date(),
    notes: 'It`s For Demo'
  }, function() {
      console.log('finished populating users');
    }
  );
});