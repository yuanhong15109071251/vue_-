/**
 * mock数据服务器模块，用于暴露mock接口，返回数据
 */
import Mock from 'mockjs';
// import category from './category.json';
import homeData from './homeData.json';
import categoryList from './categoryList.json'
import sss from './sss.json'
Mock.mock('/home', {code: 0, data: homeData});
Mock.mock('/cateList', {code: 0, data: categoryList});
Mock.mock('/found', {code: 0, data: sss});
// Mock.mock('/cateList', {code: 0, data: categorylist});
