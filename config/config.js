/*
 * 설정
 */

module.exports = {
    server_port: 3000,
    db_url: 'mongodb://localhost:27017/local',
    db_schemas: [
        {file:'./user_schema', collection:'users6', schemaName:'UserSchema', modelName:'UserModel'}
    ],
    route_info: [
    ],
    facebook: {		// passport facebook`
        clientID: '370561273394167',
        clientSecret: 'eede7d7f8f63af45880578691394d779',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    }
    // twitter: {		// passport twitter
    //     clientID: 'id',
    //     clientSecret: 'secret',
    //     callbackURL: '/auth/twitter/callback'
    // },
    // google: {		// passport google
    //     clientID: 'id',
    //     clientSecret: 'secret',
    //     callbackURL: '/auth/google/callback'
    // }
}