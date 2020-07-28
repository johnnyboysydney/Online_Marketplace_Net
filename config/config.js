const config = {
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 3000,
  jwtSecret: process.env.JWT_SECRET || "51H6E6yEV0d7rwUXNpphZoFt42839",
  mongoUri: process.env.MONGODB_URI ||
    process.env.MONGO_HOST ||
    'mongodb://' + (process.env.IP || 'localhost') + ':' +
    (process.env.MONGO_PORT || '27017') +
    '/mernproject',
    stripe_connect_test_client_id: 'ca_HiS0upcpmPZ8oY88WWCIstQ1BnrZtBXE',
    stripe_test_secret_key: 'sk_test_51H6E6yEV0d7rwUXNpphZoFt42839vrqg8xgsdAnQcAuSrlxUS1GPRMrwP0gvdaqhgS9PpeESEwZtEorIo5cvaG95003wMGphVr',
    stripe_test_api_key: 'pk_test_51H6E6yEV0d7rwUXNgJU9onIdFyA4BksuQr7yFpFPAUryF7mVd0naFCx1nggH7D7OAZXgCywmBSooD1YOmTZCf1Ir00m1HwJ988'
}

export default config
