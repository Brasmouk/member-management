import * as memberProxy from "~/proxy/member-proxy";
import { Member } from "~/models/member-model";

export const state = () => ({
    member: new Member()
})

export const mutations = {
    UPDATE_MEMBER(state, member) {
        const updateMember = new Member();
        updateMember.update(member);
        state.member = updateMember;
    }
}

export const actions = {
    updateMember({ commit }, member) {
        commit('UPDATE_MEMBER', member);
    },

    async loadMember({ commit }, $axios) {
        memberProxy.loadMember($axios, this)
            .then(response => {
                const member = response.data;
                commit('UPDATE_MEMBER', member);
            }).catch(error => {
                throw error;
            });
    },


}


export const getters = {

}