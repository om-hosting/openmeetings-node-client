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
 * @interface InvitationDTO
 */
export interface InvitationDTO {
    /**
     * 
     * @type {string}
     * @memberof InvitationDTO
     */
    email?: any;
    /**
     * 
     * @type {string}
     * @memberof InvitationDTO
     */
    firstname?: any;
    /**
     * 
     * @type {number}
     * @memberof InvitationDTO
     */
    languageId?: any;
    /**
     * 
     * @type {string}
     * @memberof InvitationDTO
     */
    lastname?: any;
    /**
     * 
     * @type {string}
     * @memberof InvitationDTO
     */
    message?: any;
    /**
     * 
     * @type {string}
     * @memberof InvitationDTO
     */
    password?: any;
    /**
     * 
     * @type {boolean}
     * @memberof InvitationDTO
     */
    passwordProtected?: any;
    /**
     * 
     * @type {number}
     * @memberof InvitationDTO
     */
    roomId?: any;
    /**
     * 
     * @type {string}
     * @memberof InvitationDTO
     */
    subject?: any;
    /**
     * 
     * @type {string}
     * @memberof InvitationDTO
     */
    valid?: InvitationDTOValidEnum;
    /**
     * 
     * @type {string}
     * @memberof InvitationDTO
     */
    validFrom?: any;
    /**
     * 
     * @type {string}
     * @memberof InvitationDTO
     */
    validTo?: any;
}

/**
    * @export
    * @enum {string}
    */
export enum InvitationDTOValidEnum {
    ONETIME = 'ONE_TIME',
    PERIOD = 'PERIOD',
    ENDLESS = 'ENDLESS'
}

