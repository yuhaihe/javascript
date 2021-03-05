const data = [
  { name: "美国", amount: 20685 },
  { name: "俄罗斯", amount: 10899 },
  { name: "巴西", amount: 8446 },
  { name: "印度", amount: 3475 },
  { name: "英国", amount: 3403 },
  { name: "秘鲁", amount: 3237 },
  { name: "墨西哥", amount: 1997 },
  { name: "土耳其", amount: 1704 },
  { name: "巴基斯坦", amount: 1662 },
  { name: "智利", amount: 1658 }
];

const rectWidth = 20; // 定义矩形宽度
const yLength = 420; // 柱状图y轴长度
// 定义矩形高度
const rectHeight = d3.scaleLinear()
  .domain([0, d3.max(data, val => val.amount) + 5000])
  .range([0, yLength]);

const interval = 50; //定义矩形间的间隔
// 柱状图x轴长度
const xLength = (rectWidth + interval) * data.length;
const baseLine = 450; // 定义一个基线的位置，调整柱状图的位置

let svg = d3.select('svg');
//g——分组，可以简单的将他视为一个容器的作用
let g = svg.append('g');
let gy = g.append('g');

let rect = g.attr('transform', `translate(100, 0)`)
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('x', (d, i) => i * (rectWidth + interval))
  .attr('y', d => baseLine - rectHeight(d.amount))
  .attr('width', rectWidth)
  .attr('height', d => rectHeight(d.amount))
  .attr('fill', d => {
    return retColor(d.amount)
  })

// 添加x轴
const xTick = data.length; // x轴的刻度数目
//为坐标轴定义一个序数比例尺
let xScale = d3.scaleBand()
  .domain(address(data))
  .range([0, xLength])
// // 定义一个朝下的坐标轴
let xAxis = d3
  .axisBottom(xScale)
  .ticks(xTick)
  .tickPadding(30)//设置刻度和刻度文本之间的间距

let gx = g.append('g')
  .call(xAxis)
  .attr('transform', `translate(-45, ${baseLine})`);

//更改x轴的文本的样式
gx.selectAll('text')
  .style('color', '#bebebe')
  .attr('transform', 'rotate(-45)');
  
//将x轴的刻度隐藏起来
gx.selectAll('line').attr('stroke', '');
gx.selectAll('path').attr('stroke', '');

// 添加y轴
const yTick = 6; // y轴刻度数目
let yScale = d3.scaleLinear()
  .domain([0, d3.max(data, val => val.amount) + 5000])
  .range([yLength, 0])
let yAxis = d3.axisLeft(yScale).ticks(yTick);

gy.call(yAxis).attr('transform', `translate(-10, ${baseLine - yLength})`)

//更改y轴的刻度的样式
gy.selectAll('line')
  .attr('stroke', '#ccc')
  .attr('x2', xLength)
  .attr('stroke-width', 0.5);
gy.selectAll('path').attr('stroke', '');
gy.selectAll('text').attr('color', '#bebebe');


// 添加交互事件
rect
  .on("mousemove", throttle(moveEvent, 30))
  .on("mouseover", function () {
    d3.select(this)
      .transition()
      .duration(0)
      .attr("fill", "#f9d774");
  })
  .on("mouseout", function (d) {
    d3.select(".toolTip").style("display", "none");
    d3.select(this)
      .transition()
      .attr("fill", retColor(d.amount));
  });

function throttle (fn, duration) {
  let lastTime = 0;
  return function (params) {
    let now = new Date().getTime();
    if (now - lastTime > duration) {
      fn(params);
      lastTime = new Date().getTime();
    }
  };
}

//在矩形上移动产生的变化
function moveEvent (d) {
  let mouse = d3.event;
  let yPosition = mouse.pageY + 20;
  let xPosition = mouse.pageX + 20;
  let toolTip = d3
    .select(".toolTip")
    .style("left", xPosition + "px")
    .style("top", yPosition + "px")
    .style("display", "flex");
  d3.select(".country").text(d.name);
  d3.select(".amount").text(d.amount);
  d3.select(".icon").style("background", "red");
}

function address (data) {
  return data.reduce((total, curVal) => {
    total.push(curVal.name);
    return total;
  }, []);
}

function retColor (amount) {
  if (amount < 6000) {
    return "#f6b46c";
  } else if (amount < 12000) {
    return "#ea774d";
  } else {
    return "#d92121";
  }
}
