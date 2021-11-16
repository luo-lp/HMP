/*
 * @Author: your name
 * @Date: 2021-06-22 17:28:43
 * @LastEditTime: 2021-07-20 18:09:56
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \HMP\src\api\index.ts
 */
import { Request } from '@/utils/request';


export function login(parameter: any) {
    return Request.axiosInstance({
        url: '/get',
        method: 'get'
    })
}