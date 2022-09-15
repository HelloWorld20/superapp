import { request } from '@ww/utils-web';
import config from '../config'

const host = config.get('api.host');
const prefix = host + '/api/widget/notion/weather'

export function getDocument(id: string) {
  return request.get(`${prefix}/${id}`)
}

export function getList() {
  return request.get(`${prefix}/list`);
}

export function addDocument(id: string, data: Record<string, any>) {
  return request.post(`${prefix}/${id}`, data)
}

export function updateDocument(id: string, value: Record<string, any>) {
  return request.put(`${prefix}/${id}`, { data: value })
} 