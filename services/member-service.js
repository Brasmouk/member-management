/**
 * loadMember
 * @param {*} $axios 
 */
export function loadMember($axios) {
    return $axios.get('./data/member.json');
}




/**
 * update a member
 * @param {*} $axios 
 * @param {*} member 
 */
export function update($axios, member) {
    const baseURL = $axios.defaults.baseURL;
    return $axios({
        method: 'put',
        url: baseURL + 'members/' + member.id,
        data: member
    })
}