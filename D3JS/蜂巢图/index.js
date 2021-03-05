let width = document.body.clientWidth / 2;
let height = width / 2.2;
let svg = d3.select('body')
  .append('svg')
  .attr('width', width)
  .attr('height', height)
  .style('background', '#000')
  .append("g");

var a = d3.rgb(255, 255, 255);	//红色
var b = d3.rgb(123, 211, 231);	//
//定义一个线性渐变
var defs = svg.append("defs");

var linearGradient = defs.append("linearGradient")
  .attr("id", "linearColor")
  .attr("x1", "0%")
  .attr("y1", "0%")
  .attr("x2", "100%")
  .attr("y2", "0%");

var stop1 = linearGradient.append("stop")
  .attr("offset", "0%")
  .style("stop-color", a.toString());

var stop2 = linearGradient.append("stop")
  .attr("offset", "100%")
  .style("stop-color", b.toString());

let points = [
  [width / 2, height / 2],
  [width / 2 - 100, height / 2],
  [width / 2 + 200, height / 2],
];

var hexbin = d3.hexbin()
  .size([width, height])
  .radius(40);

svg.append("clipPath")
  .attr("id", "clip")
  .append("rect")
  .attr("class", "mesh")
  .attr("width", width)
  .attr("height", height);

svg.append("g")
  .attr("clip-path", "url(#clip)")
  .selectAll(".hexagon")
  .data(hexbin(points))
  .enter().append("path")
  .attr("class", "hexagon")
  .attr("d", hexbin.hexagon())
  .attr("transform", function (d) {
    return "translate(" + d.x + "," + d.y + "),rotate(30)";
  })
  .style("fill", "url(#" + linearGradient.attr("id") + ")");
d3.select('svg').append('g')
  .selectAll("text")
  .data(hexbin(points))
  .enter()
  .append("text")
  .text('压盘')
  .attr("class", 'forceText')
  .style('fill', '#fff')
  .attr("transform", function (d) {
    return "translate(" + (d.x) + "," + (d.y + 5) + ")";
  })
