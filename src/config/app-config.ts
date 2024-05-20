export const config = {
    query_log: process.env.QUERY_LOG == 'true',
    environment: process.env.NODE_ENV ?? 'development',
    timezone: process.env.TZ || 'Asia/Tokyo',
    databaseUrl: process.env.DATABASE_URL,
    region: 'ap-northeast-1',
    api_prefix: '/new-year',
    jwt_secret: process.env.JWT_SECRET ? process.env.JWT_SECRET : '',
    jwt_secret_refresh: process.env.JWT_SECRET_REFRESH
        ? process.env.JWT_SECRET_REFRESH
        : '',
    jwt_expires_in: '1y',
    admin: process.env.ADMIN ? process.env.ADMIN : '',
    s3: {
        bucket: process.env.DEPLOYMENT_BUCKET
            ? process.env.DEPLOYMENT_BUCKET
            : '',
        url_signed_expires_in: 60 * 60,
        bucket_name: process.env.S3_BUCKET_NAME
            ? process.env.S3_BUCKET_NAME
            : '',
        survey_upload_prefix: process.env.S3_SURVEY_UPLOAD_PREFIX,
        form_upload_prefix: process.env.S3_FORM_UPLOAD_PREFIX,
        limit_time_upload: 5, //minute
        path_img_pdf: process.env.PATH_IMAGE_PDF,
        bucket_icon_menu: process.env.ICON_URL,
        path_icon_menu: process.env.PATH_IMAGE_ICON_MENU,
    },
    encoding: {
        shift_jis: 'Shift_JIS',
    },
    noti_key: {
        honbu_message: 'honbu_message',
        honbu_message_emergency: 'honbu_message_emergency',
        new_content: 'new_content',
    },
    rocketchat: {
        api_login: process.env.API_LOGIN_ROCKETCHAT ? process.env.API_LOGIN_ROCKETCHAT : '',
        api_createToken: process.env.API_CREATE_TOKEN_ROCKETCHAT ? process.env.API_CREATE_TOKEN_ROCKETCHAT : '',
        user: process.env.USER_ROCKETCHAT ? process.env.USER_ROCKETCHAT : '',
        password: process.env.PASSWORD_ROCKETCHAT ? process.env.PASSWORD_ROCKETCHAT : '',
    }
};
