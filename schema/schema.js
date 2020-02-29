const graphql = require('graphql');
const _ = require('lodash');
const {
    GraphQLObjectType, 
    GraphQLString, 
    GraphQLSchema,
    GraphQLID,
    GraphQLList
} = graphql;

const blowson = require('blowson');
const data = require('./data.js');
const users = blowson(data)["users"];
const comments = blowson(data)["comments"];


const UserType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
      id: {type: GraphQLID },
      username: {type: GraphQLString },
      age: {type: GraphQLString },
      profession: {type: GraphQLString},
      comments: {
          type: new GraphQLList(CommentType),
          resolve(parent,args){
              // console.log(_.filter(comments, ['user_id', parent.id]));
              return _.filter(comments, ['user_id', parent.id]);
          }
      }
    })
});

const CommentType = new GraphQLObjectType({
    name: 'Comment',
    fields: () => ({
      id: {type: GraphQLID },
      user_id: {type: GraphQLID },
      message: {type: GraphQLString },
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //console.log(_.find(users, {id: parseInt(args.id)}));
               return _.find(users, {id: parseInt(args.id)});
            }
        },
        users: {
            type: new GraphQLList(UserType),
            resolve(parent, args){
                return users
            }
        },
        comment: {
            type: CommentType,
            args: {id: {type: GraphQLID}},
            resolve(parent, args){
                //console.log(_.find(comments, {id: parseInt(args.id)}));
               return _.find(comments, {id: parseInt(args.id)});
            }
        },
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
});