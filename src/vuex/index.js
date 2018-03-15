import Vue from 'vue';
import Vuex from 'vuex';
// import * as actions from './actions';
// import * as mutations from './mutations';
// import * as getters from './getters';
// import state from './rootState';
Vue.use(Vuex)
const mapGetters = Vuex.mapGetters
const mapMutations = Vuex.mapMutations

const store = new Vuex.Store({
        state: {
            mzth: [],
            wydd: [],
            zsej: []
        },

        mutations: {
            setCount(state, payload) {
                state.mzth = payload
            },
            setWy(state, payload) {
                state.wydd = payload

            },
            setzs(state, payload) {
                state.zsej = payload
            }
        },
        getters: {
            getmzth(state) {
                return state.mzth
            },
            getwydd(state) {
                return state.wydd
            },
            getzsej(state) {
                return state.zsej
            }
        }
        // ,
        // actions: {
        //     getcound(count) {
        //         axios.get('/api/posts')
        //             .then(function(res) {
        //                 count.commit('setCount', res.data)
        //                     // console.log(res)
        //             })
        //     }
        // }
    })
    // const store = new Vuex.Store({
    //     state,
    //     //   getters,
    //     actions,
    //     //   mutations
    // })
export default store;