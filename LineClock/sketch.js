let scX;
let scY;
let largerScX;
let largerScY;
let startMinute; // 用于记录当前的实际分钟数
let startHour; // 用于记录当前的实际小时数
let startSecond;

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER, CENTER);  // 使数字显示居中
  
  // 获取当前的实际时间（分钟和小时）
  startSecond = second(); 
  startMinute = minute(); // 初始化时记录现实世界的分钟数
  startHour = hour(); // 初始化时记录现实世界的小时数
}

function draw() {
  // 创建渐变背景
  for (let i = 0; i <= height; i++) {
    let inter = map(i, 0, height, 0, 1);
    let c = lerpColor(color(100), color(240), inter); // 从灰色到白色的渐变
    stroke(c);
    line(0, i, width, i);
  }
  
  translate(width / 2, height / 2);

  // 计算当前的秒数
  let seconds = frameCount % 3600 / 60; // 每60帧代表1秒
  let currentSecond = (startSecond + floor(frameCount / 60)) % 60; // 每60帧增加1秒，基于现实秒数

  // 大曲线的锚点和控制点坐标
  let xa = -550;
  let ya = -300;
  let xb = 130;
  let yb = -220;
  let xc = 130;
  let yc = 150;
  let xd = -450;
  let yd = 190;

  // 绘制大曲线，设置为中等粗度
  noFill();
  strokeWeight(4);  // 大圆弧的线宽
  stroke(20);
  curve(xa, ya, xb, yb, xc, yc, xd, yd);

  // 计算大曲线上大圆的当前位置
  let t1 = 0.5 * sin(frameCount * (TWO_PI / 3600)) + 0.5; // 大圆缓慢沿大曲线运动，1分钟周期
  scX = curvePoint(xa, xb, xc, xd, t1);
  scY = curvePoint(ya, yb, yc, yd, t1);

  // 小曲线的锚点和控制点坐标
  let x1 = scX + 5;
  let y1 = scY + -9;
  let x2 = scX + 73;
  let y2 = scY + -11;
  let x3 = scX + 73;
  let y3 = scY + 26;
  let x4 = scX + 15;
  let y4 = scY + 26;

  // 绘制小曲线
  noFill();
  strokeWeight(1);  // 小圆弧的线宽
  stroke(1);
  curve(x1, y1, x2, y2, x3, y3, x4, y4);

  // 计算小曲线上小圆的当前位置
  let t = 0.5 * sin(frameCount * (TWO_PI / 60)) + 0.5; // 小圆1秒钟沿小曲线运动
  let x = curvePoint(x1, x2, x3, x4, t);
  let y = curvePoint(y1, y2, y3, y4, t);

  // 绘制小圆
  fill(255);
  noStroke();  // 去掉小圆的描边
  circle(x, y, 7); // 小圆

  // 绘制大圆
  fill(255);
  noStroke();
  circle(scX, scY, 15); // 大圆

  // 计算当前的分钟数（基于现实世界时间）
  let currentMinute = (startMinute + floor(frameCount / 3600)) % 60; // 实际时间的分钟数，每60秒增加1

  // 显示秒数 (小圆旁边的数字)
  fill(40);  // 设置文本颜色为灰色
  textSize(18);  // 设置字体大小
  text(currentSecond, x - 20, y);  // 显示秒数，数字在小圆左边

  // 显示现实时间的分钟数 (大圆旁边的数字)
  textSize(38);  // 设置字体大小
  text(currentMinute, scX - 40, scY);  // 显示现实分钟数，数字在大圆左边

  // 计算更大的圆弧和大圆的锚点和控制点坐标
  let xa2 = -800; // 更大圆弧的锚点在左边
  let ya2 = -370;
  let xb2 = -130; // 向右调整，使其与大圆弧相对
  let yb2 = -290;
  let xc2 = -130;
  let yc2 = 230;
  let xd2 = -750; // 向左调整
  let yd2 = 270;

  // 绘制更大的曲线，设置为更粗的线宽
  noFill();
  strokeWeight(6);  // 更大圆弧的线宽
  stroke(40);
  curve(xa2, ya2, xb2, yb2, xc2, yc2, xd2, yd2);

  // 计算更大圆弧上更大圆的当前位置
  let t2 = 0.5 * sin(frameCount * (TWO_PI / 216000)) + 0.5; // 更大圆运动周期为1小时
  largerScX = curvePoint(xa2, xb2, xc2, xd2, t2);
  largerScY = curvePoint(ya2, yb2, yc2, yd2, t2);

  // 绘制更大的圆
  fill(255);
  noStroke();
  circle(largerScX, largerScY, 30); // 更大的圆

  // 计算当前小时数（基于现实世界时间）
  let currentHour = startHour; // 现实世界的小时数

  // 显示现实时间的小时数 (更大的圆旁边的数字)
  fill(20);  // 设置文本颜色为灰色
  stroke(20);
  textSize(108);  // 设置字体大小
  text(currentHour, largerScX - 100, largerScY);  // 显示现实小时数，数字在更大圆左边
}
