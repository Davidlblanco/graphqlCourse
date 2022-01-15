const post = () => {
    return {
        id: '1',
        title: 'This is the title'
    }
}

const posts = () => {
    return [
        {
            id: '1',
            title: 'This is the title'
        }, {
            id: '2',
            title: 'This is the title'
        }, {
            id: '3',
            title: 'This is the title'
        }
    ]
}

export const postResolvers = {
    Query: {
        post,
        posts
    },
}