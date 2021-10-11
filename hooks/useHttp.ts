
import globalConfig from '../config'

import { Result } from '../types/http'

let other:Result = {
	code:12313,
	type:'error',
	message:'VATE',
	result:{}
}
let BASEURL: string = `${globalConfig.baseApi}/`;

class Http {
    private headers: any = {
		'AUTH-TOKEN': '',
        'Content-Type': 'application/json'
    };

    constructor() {}

    public setHeaders(options={}) {}

    public getHeaders() {
		try{
			const token = uni.getStorageSync('AUTH-TOKEN');
			if (token) {
				this.headers['AUTH-TOKEN'] = token;
			}
			if(Object.is(type, 'file')){
				this.headers['Content-Type'] = 'multipart/form-data';
			}
		}catch(e) {
			// error
		}
        return this.headers;
    }

    public interceptor: any = {
        request(res: any) {
            if (res) {
                return res;
            }
        },
        response(res: any) {
            if (res) {
                return res;
            }
        }
    }

    async request(api = '', data = {}, method = 'POST',title=false) {
		if(title)  uni.showLoading({'title': '加载中...'});
        const options: any = {};
        options.url = BASEURL + api;
        options.method = method;
        options.data = data;
        options.header = this.getHeaders();
        try {
            let [error, res]: any = await uni.request(options);
            uni.hideLoading();
            if (res && res.data && res.data.code == 200) {
                return res.data;
            } else if (res && res.data && res.data.code != 200) {
                // 处理异常状态
                // stdResp.translateMsg(res.data.code, res.data.message);
                return false;
            } else {
                // stdResp.translateMsg(res.data.code, '网络异常');
                return false;
            }
        } catch (e) {
            // stdResp.translateMsg(100, '登录失败');
            return false;
        }
    }

	async uploadFile(api = '', data = {}, method = 'POST', type='') {
	    uni.showLoading({'title': '上传中...'});
	    const options: any = {};
	    options.url = BASEURL + api;
	    options.method = method;
		options.header = {'AUTH-TOKEN': uni.getStorageSync('AUTH-TOKEN')};
		options.name = 'file';
		options.filePath = data; // uni.chooseImage函数调用后获取的本地文件路劲
		options.fileType = 'image';
	    try {
	        let [error, res]: any = await uni.uploadFile(options);
	        uni.hideLoading();
	        if (res && res.data && res.data.code == 200) {
	            return res.data;
	        }else if(res && res.data) {
				let result:any = JSON.parse(res.data);
				if(result.code == 200) {
					return result;
				}
			} else if (res && res.data && res.data.code != 200) {
	            // 处理异常状态
	            // stdResp.translateMsg(res.data.code, res.data.message);
	            return false;
	        } else {
	            // stdResp.translateMsg(res.data.code, '网络异常');
	            return false;
	        }
	    } catch (e) {
	        // stdResp.translateMsg(100, '登录失败');
	        return false;
	    }
	}
}

export default new Http();
