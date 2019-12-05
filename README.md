## 项目名称
```
研究生信息管理系统

```

## 功能实现
```
1.注册:已完成,学校学生管理系统账号由管理员统一注册后分发给学生与教工。因此后台实现注册功能，但未提供给前台。

2.登录:已完成,使用账号、密码、随机验证码进行登录

3.密码找回功能:已完成,使用学号、身份证号，在未登录状态下进行密码找回

4.登录密码修改:已完成,使用学号、身份证号，在已登录状态下进行密码修改

5.头像上传功能:已完成

6.学业师生互选:已完成,学生选择系统中的5位导师,进行提交。导师登录系统查看，在选择该老师的学生中选择一位学生，进行提交。从而完成导师与学生之间的互选。

7.师生互动:待完成,实现原理与'学业师生互选'模块类似，不再耗费时间。

8.个人基本信息查看:已完成

9.个人基本信息修改:已完成

10.公共信息查看、通知公告、课表、学业警告等模块:待完成,由于没有相关数据，因此不再完成该相关模块。

```

## 安装要求
```
vue-cli+express+node.js+MongoDB

```

### 前台启动
```
npm run serve

```

### 后台启动
```
npm start

```

### Mongoose数据库
```
表1.users
	储存老师与学生的信息
表2.mail
	用于学业导师与学生互选功能
	
```

### 图片示例

```
登录
```

![Image text](https://github.com/Sunzkszk/Information-Management-System/blob/master/info/public/example/login.PNG)

```
忘记密码
```

![Image text](https://github.com/Sunzkszk/Information-Management-System/blob/master/info/public/example/passwordforget.PNG)

```
主页
```

![Image text](https://github.com/Sunzkszk/Information-Management-System/blob/master/info/public/example/home.PNG)

```
个人基本信息
```

![Image text](https://github.com/Sunzkszk/Information-Management-System/blob/master/info/public/example/baseinfo.PNG)

```
个人基本信息修改
```

![Image text](https://github.com/Sunzkszk/Information-Management-System/blob/master/info/public/example/infochange.PNG)

```
密码修改
```

![Image text](https://github.com/Sunzkszk/Information-Management-System/blob/master/info/public/example/passwordchange.PNG)

```
导师选择
```

![Image text](https://github.com/Sunzkszk/Information-Management-System/blob/master/info/public/example/teacherChoose.PNG)


### 作者
```
Github:Sunzkszk

CSDN:szkszk77

微博:szkszk77

个人简介:中国石油大学（北京）一名非计算机相关专业的在读研究生。前端纯自学,有错误或建议之处,劳烦各位前辈与我联系。

```
