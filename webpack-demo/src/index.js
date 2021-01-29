// 引入 css
import './style/style1.css'

import { sum } from './math'

const sumRes = sum(10, 20)
console.log('index page')
console.log('sumRes', sumRes)

import _ from 'lodash';

console.log(_.cloneDeep)
// // 增加，开启热更新之后的代码逻辑
// if (module.hot) {
//     module.hot.accept(['./math'], () => {
//         const sumRes = sum(10, 30)
//         console.log('sumRes in hot', sumRes)
//     })
// }
