/* 설정 파일
 *
 * db 스키마 추가하기
        file: 스키마 파일지정
        collection: 데이터베이스의 컬렉션 이름 지정
        schemaName: 스키마 파일을 불러들인 후 반환된 객체를 어떤속성이름으로 할것인지 지정
        modelName: 스키마에서 모델 객체를 만든후 어떤 속성 이름으로 할것인지 지정
 * 라우팅 정보 추가하기
        file: 라우팅 파일 지정
        path: 클라이언트로 부터 받은 요청 패스 지정
        method: 라우팅 파일 안에 만들어 놓은 객체의 함수 이름 지정
        type: get/post 요청 방식 지정

module.exports = {
    server_port: 3000,
    db_url: 'mongodb://localhost:27017/local',

    db_schemas: [
        {file:'./user_schema', collection:'users3', schemaName:'UserSchema', modelName:'UserModel'}
    ],

    route_info: [
        //===== User =====//
        {file:'./user', path:'/process/login', method:'login', type:'post'}					// user.login
        ,{file:'./user', path:'/process/adduser', method:'adduser', type:'post'}			// user.adduser
        ,{file:'./user', path:'/process/listuser', method:'listuser', type:'post'}			// user.listuser
    ]
}
 */

module.exports = {
    server_port: 3000,
    db_url: 'mongodb://localhost:27017/local',
    db_schemas: [
        {file:'./user_schema', collection:'users5', schemaName:'UserSchema', modelName:'UserModel'}
    ],
    route_info: [
    ]
}