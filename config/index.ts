
import devConfig from './dev.config'
import prodConfig from './prod.config'

let globalConfig: any;

switch (process.env.NODE_ENV) {
    case 'development':
        globalConfig = devConfig;
        break;
    case 'production':
        globalConfig = prodConfig;
        break;
    case 'test':
        globalConfig = devConfig;
        break;
    default:
        globalConfig = prodConfig;
        break;
}

export default globalConfig
