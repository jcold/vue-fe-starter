import axios from 'axios'
import qs from 'qs'


const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_URL_API,
    headers: {
        'Content-Type': 'application/json',
        // 'token_in_header': global_.token,//token从全局变量那里传过来
    },
    timeout: 30 * 1000 // 30秒超时
});


instance.postForm = function(url, data, config) {
    return this.post(url, qs.stringify(data), { ...config,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        }
    })
}



// Add a response interceptor
instance.interceptors.response.use(function(response) {
    if (response.data.errno > 0) {
        if (response.data.errno == 401) {
            message.warn(response.data.error);
            setTimeout(()=>{
                let l = window.location, u = l.href.split(l.pathname)
                let url = u[0] + process.env.VUE_APP_BASE_URL_FE  + 'login'
                window.location.replace(url)
            }, 3000)
            
            return new Promise(() => {})
        }
        let isShowError = true
        const cancelShowError = () => isShowError = false
        setTimeout(() => {
            if (isShowError) {
                alert(response.data.error, 8)
            }
        })
        return Promise.reject({ ...response,
            cancelShowError
        })
    } else {
        return Promise.resolve(response)
    }
}, function(error) {
    let isShowError = true
    const cancelShowError = () => isShowError = false
    setTimeout(() => {
        if (isShowError) {
            var msg = '网络异常'
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                // console.log(error.response.data);
                // console.log(error.response.status);
                // console.log(error.response.headers);
                msg = '网络错误：' + error.response.data
            } else if (error.message) {
                msg = error.message
            }
            alert(msg, 8)
        }
    })
    return Promise.reject({ ...error,
        cancelShowError
    })
});


export default instance