## Backend Routes 

- User_ID (at signup and login)
    * method: 'POST' 
    * url: 'space-time/users'
    * method: 'GET'
    * url: 'space-time/users/:id 
- Session_token (during login time) 
    * method: 'GET', 'POST' 
    * url: 'space-time/users/:id/session' 
    * method: 'DELETE' 
    * url: 'space-time' 
- donation_token (if true) 
    * method: 'POST' 
    * url: 'space-time/users/:id/donation=false/true' 

