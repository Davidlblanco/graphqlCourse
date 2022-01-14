import { ApolloServer, gql } from 'apollo-server'

const server = new ApolloServer({
    typeDefs: gql`
    type Query{
        id: ID
        name : String
        age : Int
        average : Float
        maried:Boolean!
        arrayString:[String]
    }`,
    resolvers: {
        Query: {
            id: () => '349583905-dfdgidojoi-dfgidjgod',
            name: () => 'name',
            age: () => 30,
            average: () => 50.55,
            maried: () => false,//whei it takes ! in the types above resolver cant return null
            arrayString: () => ['a', 'b']
        },
    }
});
server.listen(4003).then(({ url }) => {
    console.log(`server listening to port 4003 ${url}`)
})