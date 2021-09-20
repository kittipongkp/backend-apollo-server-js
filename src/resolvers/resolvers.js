// Fake database
const users = [
    {
      id: "1",
      name: "Somchai",
    },
    {
      id: "2",
      name: "Tom",
    },
    {
      id: "3",
      name: "Taro",
    },
  ];
  
  const me = users[0];
  
   const resolvers = {
    Query: {
      me: (parent, args, context, info) => me,
      user: (parent, args, context, info) =>{
          const {id} = args
          const user = users.find(user => user.id === id)
          return user
      },
      users : (parent, args, context, info) => {
          return users
      }
    },
  };

  export default resolvers;