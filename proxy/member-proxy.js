import * as memberService from "../services/member-service";



/**
 * update a member
 * @param {*} $axios 
 * @param {*} $store 
 * @param {*} member 
 */
export async function update($axios, $store, member) {
    return await memberService.update($axios, member)
}



/**
 * load a member
 * @param {*} $axios 
 * @param {*} $store 
 * @param {*} site 
 */
export async function loadMember($axios, $store) {
    return await memberService.loadMember($axios)
}