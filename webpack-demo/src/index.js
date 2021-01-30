// 引入 css
import './style/style1.css'
// import moment from 'moment';
// import 'moment/locale/zh-cn';
import { sum } from './math'

const sumRes = sum(10, 20)
console.log('index page')
console.log('sumRes', sumRes)

// moment.locale('zh-cn');
// console.log('date', moment().format('YYYY-MM-DD'))
// 增加，开启热更新之后的代码逻辑
// if (module.hot) {
//     module.hot.accept(['./math'], () => {
//         const sumRes = sum(10, 20)
//         console.log('sumRes in hot', sumRes)
//     })
// }
