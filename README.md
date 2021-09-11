## OpenMeetings Client for Node

This library is a client in TypeScript/Javascript for connecting to https://openmeetings.apache.org/ and using the Rest API in order to login and access the Web Conference Room

**This library and most of the OpenMeetings API is intended for Server 2 Server integration and executed in NodeJS. Not for your browser directly integrating with OpenMeetings.**

The API requires a secure token that is shared between clients. Most commonly this token is shared between web-service calls. That is why storing the token on the client is not a good idea as it would be very easy for 3rd part to read the credentials.

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

## Using this library - TypeScript Example

Install the extension:
```bash
npm install openmeetings-node-client
```

Eg generate a unique hash to enter a conference room:
1. Login to service
2. Generate Hash for entering a conference room
3. Construct Login URL

Code example (see comments with step 1,2,3 in below script). In your project TypeScript file, eg assuming you are using the Express framework:
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
    // *****************
    // 1. Login to service
    const loginResult: ServiceResult = await userService.login("admin", "!HansHans").then(value => {
        return {
            // @ts-ignore
            message: value.data.serviceResult.message,
            // @ts-ignore
            type: value.data.serviceResult.type
        };
    }).catch(error => {
        console.log(error);
        return {
            message: 'Server Error',
            type: 'ERROR'
        };
    });
    if (loginResult.type !== 'SUCCESS') {
        res.send('Login failed, result: ' + JSON.stringify(loginResult))
        return
    }
    // *****************
    // 2. Generate Hash for entering a conference room
    const sessionId: string = loginResult.message;

    const hashResult: ServiceResult = await userService.getRoomHash(sessionId, {
        firstname: "John",
        lastname: "Doe",
        externalId: "uniqueId1",
        externalType: "myCMS",
        login: "john.doe",
        email: "john.doe@gmail.com"
    }, {
        roomId: 1,
        moderator: true
    }).then(value => {
        return {
            // @ts-ignore
            message: value.data.serviceResult.message,
            // @ts-ignore
            type: value.data.serviceResult.type
        };
    }).catch(error => {
        console.log(error.message);
        return {
            message: 'Server Error',
            type: 'ERROR'
        };
    });
    console.log("hashResult", hashResult);
    if (hashResult.type === "SUCCESS") {
        // *****************
        // 3. Construct Login URL
        const loginUrl: string = `${BASE_URL}/hash?secure=${hashResult.message}`
        res.send(`Click URL to login <a href="${loginUrl}">${loginUrl}`)
    } else {
        res.send("Error executing call" + hashResult.message)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
```

See also the sample project at: https://github.com/om-hosting/openmeetings-node-sample-project

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
