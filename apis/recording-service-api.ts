/* tslint:disable */
/* eslint-disable */
/**
 * Apache OpenMeetings API
 * Integration API enables to connect to an OpenMeetings instance, eg for generating users, create links to directly access conference rooms.<br/><br/>         <b>It is mainly designed for Server2Server integration, for example to integrate into your website, CMS or 3rd party application</b><br/><br/>         For examples how to use the Rest API see <a href=\"https://openmeetings.apache.org/RestAPISample.html\" target=\"_BLANK\">https://openmeetings.apache.org/RestAPISample.html</a>.<br/><br/>         Community contributed modules for using this API include for example:         <ul>          <li><a href=\"https://openmeetings.apache.org/RestAPISample.html#how-to-integrate-using-nodejs\" target=\"_BLANK\"> Node.js module for using API</a></li>         </ul>         Other community plugins using this API for Moodle, SugarCRM, Drupal, Joomla can be found in the Configuration>Plugins section at <a href=\"https://openmeetings.apache.org\" target=\"_BLANK\">https://openmeetings.apache.org</a>
 *
 * OpenAPI spec version: 7.0.0-SNAPSHOT
 * Contact: dev@openmeetings.apache.org
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import globalAxios, { AxiosPromise, AxiosInstance } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
import { RecordingDTOListWrapper } from '../models';
import { ServiceResultWrapper } from '../models';
/**
 * RecordingServiceApi - axios parameter creator
 * @export
 */
export const RecordingServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Deletes a recording
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} id the id of the recording
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete3: async (sid: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling delete3.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling delete3.');
            }
            const localVarPath = `/record/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'DELETE', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (sid !== undefined) {
                localVarQueryParameter['sid'] = sid;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a list of recordings created by particular external USER
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {string} externaltype the externalUserId
         * @param {string} externalid the externalUserType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExternal: async (sid: string, externaltype: string, externalid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling getExternal.');
            }
            // verify required parameter 'externaltype' is not null or undefined
            if (externaltype === null || externaltype === undefined) {
                throw new RequiredError('externaltype','Required parameter externaltype was null or undefined when calling getExternal.');
            }
            // verify required parameter 'externalid' is not null or undefined
            if (externalid === null || externalid === undefined) {
                throw new RequiredError('externalid','Required parameter externalid was null or undefined when calling getExternal.');
            }
            const localVarPath = `/record/{externaltype}/{externalid}`
                .replace(`{${"externaltype"}}`, encodeURIComponent(String(externaltype)))
                .replace(`{${"externalid"}}`, encodeURIComponent(String(externalid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (sid !== undefined) {
                localVarQueryParameter['sid'] = sid;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a list of recordings
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} roomid the room id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExternalByRoom: async (sid: string, roomid: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling getExternalByRoom.');
            }
            // verify required parameter 'roomid' is not null or undefined
            if (roomid === null || roomid === undefined) {
                throw new RequiredError('roomid','Required parameter roomid was null or undefined when calling getExternalByRoom.');
            }
            const localVarPath = `/record/room/{roomid}`
                .replace(`{${"roomid"}}`, encodeURIComponent(String(roomid)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (sid !== undefined) {
                localVarQueryParameter['sid'] = sid;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
        /**
         * Gets a list of recordings
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {string} externaltype externalType specified when creating the room
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExternalByType: async (sid: string, externaltype: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling getExternalByType.');
            }
            // verify required parameter 'externaltype' is not null or undefined
            if (externaltype === null || externaltype === undefined) {
                throw new RequiredError('externaltype','Required parameter externaltype was null or undefined when calling getExternalByType.');
            }
            const localVarPath = `/record/{externaltype}`
                .replace(`{${"externaltype"}}`, encodeURIComponent(String(externaltype)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (sid !== undefined) {
                localVarQueryParameter['sid'] = sid;
            }

            const query = new URLSearchParams(localVarUrlObj.search);
            for (const key in localVarQueryParameter) {
                query.set(key, localVarQueryParameter[key]);
            }
            for (const key in options.query) {
                query.set(key, options.query[key]);
            }
            localVarUrlObj.search = (new URLSearchParams(query)).toString();
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * RecordingServiceApi - functional programming interface
 * @export
 */
export const RecordingServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Deletes a recording
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} id the id of the recording
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async delete3(sid: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceResultWrapper>> {
            const localVarAxiosArgs = await RecordingServiceApiAxiosParamCreator(configuration).delete3(sid, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a list of recordings created by particular external USER
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {string} externaltype the externalUserId
         * @param {string} externalid the externalUserType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExternal(sid: string, externaltype: string, externalid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecordingDTOListWrapper>> {
            const localVarAxiosArgs = await RecordingServiceApiAxiosParamCreator(configuration).getExternal(sid, externaltype, externalid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a list of recordings
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} roomid the room id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExternalByRoom(sid: string, roomid: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecordingDTOListWrapper>> {
            const localVarAxiosArgs = await RecordingServiceApiAxiosParamCreator(configuration).getExternalByRoom(sid, roomid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Gets a list of recordings
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {string} externaltype externalType specified when creating the room
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getExternalByType(sid: string, externaltype: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<RecordingDTOListWrapper>> {
            const localVarAxiosArgs = await RecordingServiceApiAxiosParamCreator(configuration).getExternalByType(sid, externaltype, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * RecordingServiceApi - factory interface
 * @export
 */
export const RecordingServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Deletes a recording
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} id the id of the recording
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        delete3(sid: string, id: number, options?: any): AxiosPromise<ServiceResultWrapper> {
            return RecordingServiceApiFp(configuration).delete3(sid, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of recordings created by particular external USER
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {string} externaltype the externalUserId
         * @param {string} externalid the externalUserType
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExternal(sid: string, externaltype: string, externalid: string, options?: any): AxiosPromise<RecordingDTOListWrapper> {
            return RecordingServiceApiFp(configuration).getExternal(sid, externaltype, externalid, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of recordings
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} roomid the room id
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExternalByRoom(sid: string, roomid: number, options?: any): AxiosPromise<RecordingDTOListWrapper> {
            return RecordingServiceApiFp(configuration).getExternalByRoom(sid, roomid, options).then((request) => request(axios, basePath));
        },
        /**
         * Gets a list of recordings
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {string} externaltype externalType specified when creating the room
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getExternalByType(sid: string, externaltype: string, options?: any): AxiosPromise<RecordingDTOListWrapper> {
            return RecordingServiceApiFp(configuration).getExternalByType(sid, externaltype, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * RecordingServiceApi - object-oriented interface
 * @export
 * @class RecordingServiceApi
 * @extends {BaseAPI}
 */
export class RecordingServiceApi extends BaseAPI {
    /**
     * Deletes a recording
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {number} id the id of the recording
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordingServiceApi
     */
    public delete3(sid: string, id: number, options?: any) {
        return RecordingServiceApiFp(this.configuration).delete3(sid, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets a list of recordings created by particular external USER
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {string} externaltype the externalUserId
     * @param {string} externalid the externalUserType
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordingServiceApi
     */
    public getExternal(sid: string, externaltype: string, externalid: string, options?: any) {
        return RecordingServiceApiFp(this.configuration).getExternal(sid, externaltype, externalid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets a list of recordings
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {number} roomid the room id
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordingServiceApi
     */
    public getExternalByRoom(sid: string, roomid: number, options?: any) {
        return RecordingServiceApiFp(this.configuration).getExternalByRoom(sid, roomid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Gets a list of recordings
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {string} externaltype externalType specified when creating the room
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof RecordingServiceApi
     */
    public getExternalByType(sid: string, externaltype: string, options?: any) {
        return RecordingServiceApiFp(this.configuration).getExternalByType(sid, externaltype, options).then((request) => request(this.axios, this.basePath));
    }
}
