## OpenMeetings Client for Node

This library is a client in TypeScript/Javascript for connecting to https://openmeetings.apache.org/ and using the Rest API in order to login and access the Web Conference Room

Most of the the APIs exposed are meant to be for server to server integration!

## In order to user this client

TypeScript example:
```bash
npm install openmeetings-node-client
```

In your project TypeScript file, eg assuming you are using the Express framework:
```javascript
const express = require('express')
const app = express()
const port = 3000

import {UserServiceApi, Configuration} from "openmeetings-node-client"

const config: Configuration = new Configuration({
    basePath: "http://localhost:5080/openmeetings/services"
})

app.get('/', async (req, res) => {
    const userService: UserServiceApi = new UserServiceApi(config);
    const { data } = await userService.login("admin", "!HansHans")
    res.send('Login result: ' + data + JSON.stringify(data))
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
```

See also the sample project at: https://github.com/om-hosting/openmeetings-node-sample-project

## Available APIs 

This is based on the OpenMeetings-7.0.0 Rest API

Available APIs are:
* https://openmeetings.apache.org/swagger/#/UserService
* https://openmeetings.apache.org/swagger/#/RoomService
* https://openmeetings.apache.org/swagger/#/FileService
* https://openmeetings.apache.org/swagger/#/WbService
* https://openmeetings.apache.org/swagger/#/CalendarService
* https://openmeetings.apache.org/swagger/#/GroupService
* https://openmeetings.apache.org/swagger/#/NetTestService
* https://openmeetings.apache.org/swagger/#/RecordingService
* https://openmeetings.apache.org/swagger/#/InfoService
* https://openmeetings.apache.org/swagger/#/ErrorService

See also: https://openmeetings.apache.org/swagger/

## Package information

Some models have been updated post generation to have correct types.

This generator creates TypeScript/JavaScript client that utilizes [axios](https://github.com/axios/axios). The generated Node module can be used in the following environments:

Environment
* Node.js
* Webpack
* Browserify

Language level
* ES5 - you must have a Promises/A+ library installed
* ES6

Module system
* CommonJS
* ES6 module system

It can be used in both TypeScript and JavaScript. In TypeScript, the definition should be automatically resolved via `package.json`. ([Reference](http://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html))

### Building

To build and compile the typescript sources to javascript use:
```
npm install
npm run build
```

### Publishing

First build the package then run ```npm publish```

### Consuming

navigate to the folder of your consuming project and run one of the following commands.

_published:_

```
npm install @ --save
```

_unPublished (not recommended):_

```
npm install PATH_TO_GENERATED_PACKAGE --save