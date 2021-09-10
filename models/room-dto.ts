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
/**
 * 
 * @export
 * @interface RoomDTO
 */
export interface RoomDTO {
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    allowRecording?: any;
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    allowUserQuestions?: any;
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    appointment?: any;
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    audioOnly?: any;
    /**
     * 
     * @type {number}
     * @memberof RoomDTO
     */
    capacity?: any;
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    closed?: any;
    /**
     * 
     * @type {string}
     * @memberof RoomDTO
     */
    comment?: any;
    /**
     * 
     * @type {string}
     * @memberof RoomDTO
     */
    confno?: any;
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    demo?: any;
    /**
     * 
     * @type {number}
     * @memberof RoomDTO
     */
    demoTime?: any;
    /**
     * 
     * @type {string}
     * @memberof RoomDTO
     */
    externalId?: any;
    /**
     * 
     * @type {string}
     * @memberof RoomDTO
     */
    externalType?: any;
    /**
     * 
     * @type {Array&lt;RoomFileDTO&gt;}
     * @memberof RoomDTO
     */
    files?: any;
    /**
     * 
     * @type {Array&lt;string&gt;}
     * @memberof RoomDTO
     */
    hiddenElements?: Array<RoomDTOHiddenElementsEnum>;
    /**
     * 
     * @type {number}
     * @memberof RoomDTO
     */
    id?: any;
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    moderated?: any;
    /**
     * 
     * @type {string}
     * @memberof RoomDTO
     */
    name?: any;
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    _public?: any;
    /**
     * 
     * @type {string}
     * @memberof RoomDTO
     */
    redirectUrl?: any;
    /**
     * 
     * @type {string}
     * @memberof RoomDTO
     */
    tag?: any;
    /**
     * 
     * @type {string}
     * @memberof RoomDTO
     */
    type?: RoomDTOTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    waitModerator?: any;
    /**
     * 
     * @type {boolean}
     * @memberof RoomDTO
     */
    waitRecording?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum RoomDTOHiddenElementsEnum {
    TOPBAR = 'TOP_BAR',
    CHAT = 'CHAT',
    ACTIVITIES = 'ACTIVITIES',
    FILES = 'FILES',
    ACTIONMENU = 'ACTION_MENU',
    POLLMENU = 'POLL_MENU',
    SCREENSHARING = 'SCREEN_SHARING',
    WHITEBOARD = 'WHITEBOARD',
    MICROPHONESTATUS = 'MICROPHONE_STATUS',
    USERCOUNT = 'USER_COUNT'
}
/**
    * @export
    * @enum {string}
    */
export enum RoomDTOTypeEnum {
    CONFERENCE = 'CONFERENCE',
    PRESENTATION = 'PRESENTATION',
    INTERVIEW = 'INTERVIEW'
}
