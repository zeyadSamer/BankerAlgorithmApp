# DeadlockDetect

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.


## Project Description

This project is for validating occurance of deadlocks by providing allocation matrix, max need matrix,and available matrix.The output of the app is to determine if the system is safe or not


## Project installation
When installing the project from github,make sure to install the required dependencies for the app.To do so,run this command in the root directory of the project

```
npm i
```

## Project running

- Make sure to have the angular cli installed
- Run the command
```
ng serve -o
```


## App logic src code

- The app logic is divided into two parts : Component Logic  and Buisness Logic(Banker's Algorithm)
- To see the component logic navigate to src/app/components folder ,There are three main files for each component which are component.ts,component.html,component.css, in addition to testing file 
- To see the Banker's algorithm logic navigate to src/app/services/banker.service.ts file .This class is binded with the component (MatrixComponent) by dependency injection design pattern
- All the defined classes in the src/app/models folder


## App Deployment Link
- https://64491d6ff870de0008826fe2--deadlock-detector.netlify.app/




## test example


  


  {'Allocation Matrix':{
    title:'Allocation Matrix',
    rowsCount:5,
    columnsCount:3,
    
   data: [[0,1,0],[2,0,0],[3,0,2],[2,1,1],[0,0,2]]
  
  },
  'Maximum Need Matrix':{
    title:'Maximum Need Matrix',
    rowsCount:5,
    columnsCount:3,
  
    data:[[7,5,3],[3,2,2],[9,0,2],[2,2,2],[4,3,3]]},
  'Available Matrix':{
    title:'Matrix',
    rowsCount:1,
    columnsCount:3,

    data:[3,3,2]}



  }