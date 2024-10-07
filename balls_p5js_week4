let numSpheres = 30; // 球体数量
let spheres = []; // 存储球体位置、颜色、大小和速度

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL); // WEBGL是调用渲染模式的参数，否则默认为2D
  for (let i = 0; i < numSpheres; i++) {
    let position = createVector(random(-width / 2, width / 2), random(-height / 2, height / 2), random(-200, 200));
    let r = random(80, 230); 
    let g = random(30, 190);
    let b = random(200, 240);
    let colorValue = color(r, g, b); // 随机生成颜色
    let size = random(10, 100); // 随机生成大小
    let velocity = createVector(random(-2, 2), random(-2, 2), random(-2, 2)); // 随机生成速度
    spheres.push({ position: position, color: colorValue, size: size, velocity: velocity }); // 修正拼写错误
  }
}

function draw() {
  background(255);
  orbitControl();
  
  for (let sphereData of spheres) {
    // 更新球体的位置
    sphereData.position.add(sphereData.velocity); // 修正拼写错误
    // 碰撞与反弹
    checkBoundaryCollision(sphereData);
    checkSphereCollision(sphereData);

    push(); // 保存当前坐标系状态
    translate(sphereData.position.x, sphereData.position.y, sphereData.position.z);
    fill(sphereData.color);
    stroke(255, 70);
    sphere(sphereData.size); // 使用随机大小
    pop(); // 恢复之前的坐标系状态
  }
}

// 检查球体与边界的碰撞
function checkBoundaryCollision(sphereData) {
  // 检查与X轴边界
  if (sphereData.position.x > width / 2 - sphereData.size || sphereData.position.x < -width / 2 + sphereData.size) {
    sphereData.velocity.x *= -1; // 反转X轴速度
  }
  // 检查与Y轴边界
  if (sphereData.position.y > height / 2 - sphereData.size || sphereData.position.y < -height / 2 + sphereData.size) {
    sphereData.velocity.y *= -1; // 反转Y轴速度
  }
  // 检查与Z轴边界
  if (sphereData.position.z > 200 - sphereData.size || sphereData.position.z < -200 + sphereData.size) {
    sphereData.velocity.z *= -1; // 反转Z轴速度（修正）
  }
}

// 检查球体之间的碰撞
function checkSphereCollision(sphereData) {
  for (let otherSphere of spheres) {
    if (sphereData !== otherSphere) {
      let distance = sphereData.position.dist(otherSphere.position);
      if (distance < (sphereData.size + otherSphere.size) / 2) {
        // 碰撞发生，简单处理反弹
        sphereData.velocity.mult(-1);
        otherSphere.velocity.mult(-1);
      }
    }
  }
}
