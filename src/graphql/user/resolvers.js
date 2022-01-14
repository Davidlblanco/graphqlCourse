const user = () => {
    return {
        id: '1',
        userName: 'Luiz'
    }
}
const users = () => {
    return [{
        id: '1',
        userName: 'Luiz'
    }, {
        id: '2',
        userName: 'Luiz'
    }
        , {
        id: '3',
        userName: 'Luiz'
    }]
}

export const userResolvers = {
    Query: {
        user,
        users
    },
}