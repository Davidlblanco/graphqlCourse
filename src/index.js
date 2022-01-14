import { ApolloServer, gql } from 'apollo-server'

const server = new ApolloServer({
    typeDefs: gql`
    type Query{
        user: User
        users:[User]
    }, type User{
        id: ID!
        userName:String
    }`,
    resolvers: {
        Query: {
            user: () => {
                return {
                    id: '349583905-dfdgidojoi-dfgidjgod',
                    userName: 'james'
                }
            },
            users: () => {
                return [{
                    id: 'ewfewfef-dfdgidojoi-dfgidjgod',
                    userName: 'james'
                }, {
                    id: '349583905-dfdgidojoi-dfgidjgod',
                    userName: 'samantha'
                }]
            },
        },
    }
});
server.listen(4003).then(({ url }) => {
    console.log(`server listening to port 4003 ${url}`)
})