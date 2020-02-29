## Express GraphQL demo environment

This playground is using blowson to generate fake data and graphql-voyager to create some fancy graphical overview of the API architecture.

#### To set this up

* git clone the code
* npm install 
* npm start


- browse to localhost:4000/voyager to see the models
- browse to localhost:4000/graphql to play around with the models and fake data


e.g try:
```
{
  user(id: 10){
    username
  }
}
```
and
```
{
  users{
    username
    comments{
      message
    }
  }
}
```

