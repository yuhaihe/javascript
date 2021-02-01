/**
 * @description 时间格式化输出
 * 按所给的时间格式输出指定的时间
 * 格式说明
  对于 2014.09.05 13:14:20
  yyyy: 年份，2014
  yy: 年份，14
  MM: 月份，补满两位，09
  M: 月份, 9
  dd: 日期，补满两位，05
  d: 日期, 5
  HH: 24制小时，补满两位，13
  H: 24制小时，13
  hh: 12制小时，补满两位，01
  h: 12制小时，1
  mm: 分钟，补满两位，14
  m: 分钟，14
  ss: 秒，补满两位，20
  s: 秒，20
  w: 星期，为 ['日', '一', '二', '三', '四', '五', '六'] 中的某一个
 * @example formatDate(new Date(1409894060000), 'yyyy-MM-dd HH:mm:ss 星期w')
 */

function formatDate (date, format) {
  const week = ['日', '一', '二', '三', '四', '五', '六'];
  const add = (num) => {
    if(num<10) {
      return '0' + num;
    }

    return num;
  }
  const data = {
    yyyy: date.getFullYear(),
    yy: String(date.getFullYear()).substring(2),
    M: date.getMonth() + 1,
    MM: add(date.getMonth() + 1),
    d: date.getDate(),
    dd: add(date.getDate()),
    H: date.getHours(),
    HH: add(date.getHours()),
    h: date.getHours()%12,
    hh: add(date.getHours()%12),
    m: date.getMinutes(),
    mm: add(date.getMinutes()),
    s: date.getSeconds(),
    ss: add(date.getSeconds()),
    w: week[date.getDay()]
  };
  format.replace(/\w+/ig, function($1) {
    format = format.replace($1, data[$1])
  })
  return format;
}

const d = formatDate(new Date(), 'yyyy-MM-dd HH:mm:ss 星期w');
console.log(d)