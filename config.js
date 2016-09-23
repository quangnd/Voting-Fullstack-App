module.exports = {
    database: process.env.MONGO_URI_VOTINGAPI || 'mongodb://localhost:27017/votingapi',
    initUserData: [
        {
            userid: 1,
            username: 'quangnd',
            password: 'quangnd',
            fullname: 'Nguyen Dang Quang'
        },
        {
            userid: 2,
            username: 'hanght',
            password: 'hanght',
            fullname: 'Hoang Hang'
        },
        {
            userid: 3,
            username: 'dietnv',
            password: 'dietnv',
            fullname: 'Nguyen Van Diet'
        }
    ]
}