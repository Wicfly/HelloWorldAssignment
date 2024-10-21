const int potPin = A0;  // 滑动电位器连接到A0引脚

void setup() {
  Serial.begin(9600);  // 初始化串口通信
}

void loop() {
  int potValue = analogRead(potPin);  // 读取电位器的值
            // 发送电位器数据到串口
  delay(100);                         // 每0.1秒读取一次
}
Serial.println(potValue); 