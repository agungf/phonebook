# Phonebook Apps

Another Phonebook sharing apps

## Demo 

- Url : http://udock.cloudapp.net:9000/
- User: demo@mail.com
- password: demo

## The  stack

- Angular js frontend framework with modules loaded: bootstrap, font-awesome, lodash, datatables, ngDialog, moment 
- Mongo database persistent data layer using mongoose
- Nodejs Express backend framework
- Yeoman Bower Grunt developemnt environment automation
- Docker container isolated environment deployed with Fig on Azure cloud

## Features

- User Authentication and Authorization

  It should have a login with username and password so the user can access the main user interface.
  
- Protected Area

  Once the user is logged in you will need to have a logout button where he can go out of the protected area.

- Add Record

  There should also be an option to add new records in the phone book which will contain: Name, Phone number, Date of adding, Additional Notes'
  
- Manage phonebook',
  
  We need to have an option to edit/delete existing records in the phone book.
  
- Pagination
  
  It needs to have a pagination for the records which are more than 10 on page.
  
- Search

  Need to have a search field on the top allowing the user to search through all the fields mentioned above (Name, Phone number, Date of adding, Additional Notes)'

## Custom rules / Beta release limitation

- Run on developemnt mode
- 'Dem	o' user can't be deleted
- Only admin can manage the phonebook
- Users register or logging using Facebook ot twitter account can not manage the phonebook
 

## Todo

-  run on production mode which is minified and optimized documents and assets
	 
