import { withAppSyncData } from 'next-apollo-appsync'
import AppSyncConfig from '../../AppSync'

const config = {
  url: AppSyncConfig.graphqlEndpoint,
  region: AppSyncConfig.region,
  auth: {
    type: AppSyncConfig.authenticationType,
    apiKey: AppSyncConfig.apiKey
  },
}

export default withAppSyncData(config)