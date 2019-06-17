/*
 * 帮助文档查询api
 * @Author: shichangchun
 * @Date: 2018年8月30日14:22:15
 */
import fetch from '@/util/fetch'

/**
 * 查询文章 add 2018-10-19
 */
export const getArticleByPath = (data) => {
  return fetch({
    url: '/api/help/contentTxtByPath',
    method: 'GET',
    params: data
  })
}

/**
 * 查询目录 add 2018-10-19
 */
export const getMuneByPath = (data) => {
  return fetch({
    url: '/api/help/contentNewByPath',
    method: 'GET',
    params: data
  })
}

/**
 * 首页查询
 * @param data
 */
export const getHelpList = (data) => {
  return fetch({
    url: '/api/help/catalogByPath',
    method: 'GET',
    params: data
  })
}

/**
 * 根据url名称查询文章内容与目录树
 */
export const getContentByPath = (data) => {
  return fetch({
    url: '/api/help/contentByPath',
    method: 'GET',
    params: data
  })
}

/**
 * 产品文档下获取openApi接口调用
 */
export const getContentOpenByPath = (data) => {
  return fetch({
    url: '/api/help/contentOpenByPath',
    method: 'GET',
    params: data
  })
}

/**
 * 关键词搜索
 * @param data
 */
export const getSearch = (data) => {
  return fetch({
    url: '/api/text/search',
    method: 'GET',
    params: data
  })
}

/**
 * 根据id查询链接地址
 */
export const catalogById = (data) => {
  return fetch({
    url: '/api/help/catalogById',
    method: 'GET',
    params: data
  })
}

/**
 *
 * 提叫返回给工单
 * @export
 * @param {int} id
 * @returns
 */
export function submitWorkOrder (data) {
  return fetch({
    url: '/workorder/api/issue/submitInfo',
    method: 'post',
    data: data
  })
}
