
import useHttp from '../hooks/useHttp'

 const Api = {
	"ADD_ORG_MEMBER": 'org/addMember', //加入机构
	"GET_ORG_MEMBER": 'org/member', //加入机构
	"UPLOAD_FILE": 'oss/pictures', //文件上传
}


export async function addOrgMember(data = {}) {
	return await useHttp.request(Api.ADD_ORG_MEMBER, data, 'POST');
}

export async function getOrgMember(data = {}) {
	return await useHttp.request(Api.GET_ORG_MEMBER, data, 'GET');
}

export async function uploadFile(data = {}) {
	return await useHttp.uploadFile(Api.UPLOAD_FILE, data, 'POST', 'file');
	
}
