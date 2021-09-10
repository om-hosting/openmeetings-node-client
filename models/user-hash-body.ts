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
import {ExternalUserDTO} from "./external-user-dto";
import {RoomOptionsDTO} from "./room-options-dto";

/**
 * 
 * @export
 * @interface UserHashBody
 */
export interface UserHashBody {
    /**
     *
     * @type {ExternalUserDTO}
     * @memberof UserHashBody
     */
    user: ExternalUserDTO;
    /**
     * 
     * @type {RoomOptionsDTO}
     * @memberof UserHashBody
     */
    options: RoomOptionsDTO;
}