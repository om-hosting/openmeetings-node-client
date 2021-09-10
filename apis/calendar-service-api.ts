/* tslint:disable */
/* eslint-disable */
/**
 * Apache OpenMeetings API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
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
import { AppointmentDTO } from '../models';
import { CalendarBody } from '../models';
import { ServiceResult } from '../models';
/**
 * CalendarServiceApi - axios parameter creator
 * @export
 */
export const CalendarServiceApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Delete a calendar event   If the given sid is from an Administrator or Web-Service USER, the USER  can delete any appointment.  If the sid is assigned to a regular USER, he can only delete appointments  where he is also the owner/creator of the appointment
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} id the id to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        _delete: async (sid: string, id: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling _delete.');
            }
            // verify required parameter 'id' is not null or undefined
            if (id === null || id === undefined) {
                throw new RequiredError('id','Required parameter id was null or undefined when calling _delete.');
            }
            const localVarPath = `/calendar/{id}`
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
         * Load a calendar event by its room id
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} roomid id of appointment special room
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByRoom: async (sid: string, roomid: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling getByRoom.');
            }
            // verify required parameter 'roomid' is not null or undefined
            if (roomid === null || roomid === undefined) {
                throw new RequiredError('roomid','Required parameter roomid was null or undefined when calling getByRoom.');
            }
            const localVarPath = `/calendar/room/{roomid}`
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
         * Search a calendar event for the current SID
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {string} title the search string
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByTitle: async (sid: string, title: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling getByTitle.');
            }
            // verify required parameter 'title' is not null or undefined
            if (title === null || title === undefined) {
                throw new RequiredError('title','Required parameter title was null or undefined when calling getByTitle.');
            }
            const localVarPath = `/calendar/title/{title}`
                .replace(`{${"title"}}`, encodeURIComponent(String(title)));
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
         * Get the next Calendar event for the current USER of the SID
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        next: async (sid: string, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling next.');
            }
            const localVarPath = `/calendar/next`;
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
         * Get the next Calendar event for userId
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} userid the userId the calendar events should be loaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nextForUser: async (sid: string, userid: number, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling nextForUser.');
            }
            // verify required parameter 'userid' is not null or undefined
            if (userid === null || userid === undefined) {
                throw new RequiredError('userid','Required parameter userid was null or undefined when calling nextForUser.');
            }
            const localVarPath = `/calendar/next/{userid}`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)));
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
         * Load appointments by a start / end range for the current SID
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {Date} start start time
         * @param {Date} end end time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        range: async (sid: string, start: Date, end: Date, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling range.');
            }
            // verify required parameter 'start' is not null or undefined
            if (start === null || start === undefined) {
                throw new RequiredError('start','Required parameter start was null or undefined when calling range.');
            }
            // verify required parameter 'end' is not null or undefined
            if (end === null || end === undefined) {
                throw new RequiredError('end','Required parameter end was null or undefined when calling range.');
            }
            const localVarPath = `/calendar/{start}/{end}`
                .replace(`{${"start"}}`, encodeURIComponent(String(start)))
                .replace(`{${"end"}}`, encodeURIComponent(String(end)));
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
         * Load appointments by a start / end range for the userId
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} userid the userId the calendar events should be loaded
         * @param {Date} start start time
         * @param {Date} end end time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rangeForUser: async (sid: string, userid: number, start: Date, end: Date, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling rangeForUser.');
            }
            // verify required parameter 'userid' is not null or undefined
            if (userid === null || userid === undefined) {
                throw new RequiredError('userid','Required parameter userid was null or undefined when calling rangeForUser.');
            }
            // verify required parameter 'start' is not null or undefined
            if (start === null || start === undefined) {
                throw new RequiredError('start','Required parameter start was null or undefined when calling rangeForUser.');
            }
            // verify required parameter 'end' is not null or undefined
            if (end === null || end === undefined) {
                throw new RequiredError('end','Required parameter end was null or undefined when calling rangeForUser.');
            }
            const localVarPath = `/calendar/{userid}/{start}/{end}`
                .replace(`{${"userid"}}`, encodeURIComponent(String(userid)))
                .replace(`{${"start"}}`, encodeURIComponent(String(start)))
                .replace(`{${"end"}}`, encodeURIComponent(String(end)));
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
         * Create an appointment
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {CalendarBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        save: async (sid: string, body?: CalendarBody, options: any = {}): Promise<RequestArgs> => {
            // verify required parameter 'sid' is not null or undefined
            if (sid === null || sid === undefined) {
                throw new RequiredError('sid','Required parameter sid was null or undefined when calling save.');
            }
            const localVarPath = `/calendar`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, 'https://example.com');
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }
            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            if (sid !== undefined) {
                localVarQueryParameter['sid'] = sid;
            }

            localVarHeaderParameter['Content-Type'] = '*/*';

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
            const needsSerialization = (typeof body !== "string") || localVarRequestOptions.headers['Content-Type'] === 'application/json';
            localVarRequestOptions.data =  needsSerialization ? JSON.stringify(body !== undefined ? body : {}) : (body || "");

            return {
                url: localVarUrlObj.pathname + localVarUrlObj.search + localVarUrlObj.hash,
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * CalendarServiceApi - functional programming interface
 * @export
 */
export const CalendarServiceApiFp = function(configuration?: Configuration) {
    return {
        /**
         * Delete a calendar event   If the given sid is from an Administrator or Web-Service USER, the USER  can delete any appointment.  If the sid is assigned to a regular USER, he can only delete appointments  where he is also the owner/creator of the appointment
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} id the id to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async _delete(sid: string, id: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ServiceResult>> {
            const localVarAxiosArgs = await CalendarServiceApiAxiosParamCreator(configuration)._delete(sid, id, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Load a calendar event by its room id
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} roomid id of appointment special room
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getByRoom(sid: string, roomid: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppointmentDTO>> {
            const localVarAxiosArgs = await CalendarServiceApiAxiosParamCreator(configuration).getByRoom(sid, roomid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Search a calendar event for the current SID
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {string} title the search string
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getByTitle(sid: string, title: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AppointmentDTO>>> {
            const localVarAxiosArgs = await CalendarServiceApiAxiosParamCreator(configuration).getByTitle(sid, title, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get the next Calendar event for the current USER of the SID
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async next(sid: string, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppointmentDTO>> {
            const localVarAxiosArgs = await CalendarServiceApiAxiosParamCreator(configuration).next(sid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Get the next Calendar event for userId
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} userid the userId the calendar events should be loaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async nextForUser(sid: string, userid: number, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppointmentDTO>> {
            const localVarAxiosArgs = await CalendarServiceApiAxiosParamCreator(configuration).nextForUser(sid, userid, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Load appointments by a start / end range for the current SID
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {Date} start start time
         * @param {Date} end end time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async range(sid: string, start: Date, end: Date, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AppointmentDTO>>> {
            const localVarAxiosArgs = await CalendarServiceApiAxiosParamCreator(configuration).range(sid, start, end, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Load appointments by a start / end range for the userId
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} userid the userId the calendar events should be loaded
         * @param {Date} start start time
         * @param {Date} end end time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async rangeForUser(sid: string, userid: number, start: Date, end: Date, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<AppointmentDTO>>> {
            const localVarAxiosArgs = await CalendarServiceApiAxiosParamCreator(configuration).rangeForUser(sid, userid, start, end, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
        /**
         * Create an appointment
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {CalendarBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async save(sid: string, body?: CalendarBody, options?: any): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<AppointmentDTO>> {
            const localVarAxiosArgs = await CalendarServiceApiAxiosParamCreator(configuration).save(sid, body, options);
            return (axios: AxiosInstance = globalAxios, basePath: string = BASE_PATH) => {
                const axiosRequestArgs = {...localVarAxiosArgs.options, url: basePath + localVarAxiosArgs.url};
                return axios.request(axiosRequestArgs);
            };
        },
    }
};

/**
 * CalendarServiceApi - factory interface
 * @export
 */
export const CalendarServiceApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    return {
        /**
         * Delete a calendar event   If the given sid is from an Administrator or Web-Service USER, the USER  can delete any appointment.  If the sid is assigned to a regular USER, he can only delete appointments  where he is also the owner/creator of the appointment
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} id the id to delete
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        _delete(sid: string, id: number, options?: any): AxiosPromise<ServiceResult> {
            return CalendarServiceApiFp(configuration)._delete(sid, id, options).then((request) => request(axios, basePath));
        },
        /**
         * Load a calendar event by its room id
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} roomid id of appointment special room
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByRoom(sid: string, roomid: number, options?: any): AxiosPromise<AppointmentDTO> {
            return CalendarServiceApiFp(configuration).getByRoom(sid, roomid, options).then((request) => request(axios, basePath));
        },
        /**
         * Search a calendar event for the current SID
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {string} title the search string
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getByTitle(sid: string, title: string, options?: any): AxiosPromise<Array<AppointmentDTO>> {
            return CalendarServiceApiFp(configuration).getByTitle(sid, title, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the next Calendar event for the current USER of the SID
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        next(sid: string, options?: any): AxiosPromise<AppointmentDTO> {
            return CalendarServiceApiFp(configuration).next(sid, options).then((request) => request(axios, basePath));
        },
        /**
         * Get the next Calendar event for userId
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} userid the userId the calendar events should be loaded
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        nextForUser(sid: string, userid: number, options?: any): AxiosPromise<AppointmentDTO> {
            return CalendarServiceApiFp(configuration).nextForUser(sid, userid, options).then((request) => request(axios, basePath));
        },
        /**
         * Load appointments by a start / end range for the current SID
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {Date} start start time
         * @param {Date} end end time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        range(sid: string, start: Date, end: Date, options?: any): AxiosPromise<Array<AppointmentDTO>> {
            return CalendarServiceApiFp(configuration).range(sid, start, end, options).then((request) => request(axios, basePath));
        },
        /**
         * Load appointments by a start / end range for the userId
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {number} userid the userId the calendar events should be loaded
         * @param {Date} start start time
         * @param {Date} end end time
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        rangeForUser(sid: string, userid: number, start: Date, end: Date, options?: any): AxiosPromise<Array<AppointmentDTO>> {
            return CalendarServiceApiFp(configuration).rangeForUser(sid, userid, start, end, options).then((request) => request(axios, basePath));
        },
        /**
         * Create an appointment
         * @param {string} sid The SID of the User. This SID must be marked as Loggedin
         * @param {CalendarBody} [body] 
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        save(sid: string, body?: CalendarBody, options?: any): AxiosPromise<AppointmentDTO> {
            return CalendarServiceApiFp(configuration).save(sid, body, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * CalendarServiceApi - object-oriented interface
 * @export
 * @class CalendarServiceApi
 * @extends {BaseAPI}
 */
export class CalendarServiceApi extends BaseAPI {
    /**
     * Delete a calendar event   If the given sid is from an Administrator or Web-Service USER, the USER  can delete any appointment.  If the sid is assigned to a regular USER, he can only delete appointments  where he is also the owner/creator of the appointment
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {number} id the id to delete
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarServiceApi
     */
    public _delete(sid: string, id: number, options?: any) {
        return CalendarServiceApiFp(this.configuration)._delete(sid, id, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Load a calendar event by its room id
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {number} roomid id of appointment special room
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarServiceApi
     */
    public getByRoom(sid: string, roomid: number, options?: any) {
        return CalendarServiceApiFp(this.configuration).getByRoom(sid, roomid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Search a calendar event for the current SID
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {string} title the search string
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarServiceApi
     */
    public getByTitle(sid: string, title: string, options?: any) {
        return CalendarServiceApiFp(this.configuration).getByTitle(sid, title, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the next Calendar event for the current USER of the SID
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarServiceApi
     */
    public next(sid: string, options?: any) {
        return CalendarServiceApiFp(this.configuration).next(sid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Get the next Calendar event for userId
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {number} userid the userId the calendar events should be loaded
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarServiceApi
     */
    public nextForUser(sid: string, userid: number, options?: any) {
        return CalendarServiceApiFp(this.configuration).nextForUser(sid, userid, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Load appointments by a start / end range for the current SID
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {Date} start start time
     * @param {Date} end end time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarServiceApi
     */
    public range(sid: string, start: Date, end: Date, options?: any) {
        return CalendarServiceApiFp(this.configuration).range(sid, start, end, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Load appointments by a start / end range for the userId
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {number} userid the userId the calendar events should be loaded
     * @param {Date} start start time
     * @param {Date} end end time
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarServiceApi
     */
    public rangeForUser(sid: string, userid: number, start: Date, end: Date, options?: any) {
        return CalendarServiceApiFp(this.configuration).rangeForUser(sid, userid, start, end, options).then((request) => request(this.axios, this.basePath));
    }
    /**
     * Create an appointment
     * @param {string} sid The SID of the User. This SID must be marked as Loggedin
     * @param {CalendarBody} [body] 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CalendarServiceApi
     */
    public save(sid: string, body?: CalendarBody, options?: any) {
        return CalendarServiceApiFp(this.configuration).save(sid, body, options).then((request) => request(this.axios, this.basePath));
    }
}