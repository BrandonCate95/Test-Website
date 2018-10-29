export default {

    // REQUIRED only for Federated Authentication - Amazon Cognito Identity Pool ID
    identityPoolId: 'us-east-2:75c318fc-8d9b-4659-8a64-9c245b1317aa',
    
    // REQUIRED - Amazon Cognito Region
    region: 'us-east-2',

    // OPTIONAL - Amazon Cognito User Pool ID
    userPoolId: 'us-east-2_8qMRGnVK5',

    // OPTIONAL - Amazon Cognito Web Client ID (26-char alphanumeric string)
    userPoolWebClientId: '1ka2va2t5c853toa0us7rurmkn',

    // OPTIONAL - Enforce user authentication prior to accessing AWS resources or not
    mandatorySignIn: false,

    // OPTIONAL - Configuration for cookie storage
    // cookieStorage: {
    // // REQUIRED - Cookie domain (only required if cookieStorage is provided)
    //     domain: '127.0.0.1',
    // // OPTIONAL - Cookie path
    //     path: '/',
    // // OPTIONAL - Cookie expiration in days
    //     expires: 365,
    // // OPTIONAL - Cookie secure flag
    //     // secure: true
    // },

    // OPTIONAL - customized storage object
    // storage: new MyStorage(),
}