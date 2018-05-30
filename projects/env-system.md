---
title: Environment Monitoring System
sidebar: auto
sidebarDepth: 2
---

# Environment Monitoring System
This is a environment monitoring system with a 4-axis drone with sensors, and a web-based back-end server.

The project was initially cooperated by me, [Garfieid Wu](https://github.com/wjqzero), and [Covey Liu](https://github.com/Curton), and now it is limit maintained by me.

This project started in October 2014, and the first version participated in the 2016 Undergraduate Electronic Design Contest – 2016 Embedded System Design Invitational Contest (Intel Cup, ESDC in short) held in July.

After the contest, several improvements were applied to this system. In those improvements, not only the original participants, other classmates also joined.

## Basic System Structure

![System Structure](/env-system/structure.png)

The system follows a database-centered structure. The onboarded devices will directly write collected data to the database, and the client side will also directly read the database.

The structure is simple and easy to implement. Consider the situations at that particular moment, I can't say this structure is bad. But its shortages are obvious. Since there will always be time difference and handling cost, the system can never working at "realtime" data.

## The First Prototype

This was the only version that was putted to the contest.

In this version, some "bad" designs were applied in today's point of view, made the software extremely hard to understand and maintain. But anyway, it was this set of code helped us won the award.

![52766898848](/env-system/showcase.jpg)

### Compatibility Nightmare

In this contest, we were required to use the develop boards provided by Intel, which are [Genuino 101](https://ark.intel.com/products/92346/Genuino-101) and [Minnowboard Turbot](https://minnowboard.org/minnowboard-turbot/). Since Intel claimed the Genuino 101 compact with the Arduino standard library, we decided to migrate a open source flight controlling software to it. However, according to the teammate, it was impossible to migrate the project with only Arduino standard library, it was not enough to power the software.

Problems also appeared at data sending procedure. As Internet of Things developer, *serial port* is the most common connection method between controllers and sensors. But at that moment, we had a limit choices: the only programming language we familiar with is Java, but the serial port library in Java was out of maintenance for a long time and we need to use JDBC to upload data to the server.

At the last moment, we used a serial port reading software which can save the data in text files, then applied Java to read the text files, parse the data, then upload the data.

### "Framework" on Server Side

![env-system-realtime-screenshot](/env-system/realtime-screenshot.png)

The server side program was written in PHP cooperate by me, [Covey Liu](https://github.com/Curton), [Jason Yang](https://github.com/JiayuYANG), and [Alicia Wang](https://github.com/JEUDominic). The live demo (but it has some database errors) can be accessed [here](https://ws1.billzhonggz.com/php/project/) (use "admin" as both username and password).

We applied [CodeIgniter](https://www.codeigniter.com/) as the framework of this system. CI is a framework highly follows MVC design pattern. People always say that using framework can improve efficiency of development. However, we had difficulties much more than benefits when applying this framework at that moment. The cons of applying framework is learning cost. I think for those experienced professional developers, they can easily figure out the design philosophy of a framework. But for us, it might by too difficult, especially we don't know the phase "software engineering".

## Improvement: Data Uploading

After experiencing a complex procedure of sensor data collecting and uploading, we decided to use C# instead of Java to make a data collecting and uploading software. It was reasonable because our Minnowboard Turbot ran a standard Windows 10 desktop. The source code can be found on [GitHub](https://github.com/billzhonggz/SerialPortReadWinForm).

![](/env-system/csharp.png)

In this case, we applied out-of-box C# serial port library to read serial port data from the sensor, then the data string would be parsed according to our instructions. After that, we use a third-party MySQL library to upload directly to the database.

## Improvement: Android Mobile App



## Refactor: Server Side



## Future: Bidirectional Controls

