import Vue from 'vue';
import Vuex from 'vuex';
// import * as actions from './actions';
// import * as mutations from './mutations';
// import * as getters from './getters';
// import state from './rootState';
Vue.use(Vuex)
const mapGetters = Vuex.mapGetters
const mapMutations = Vuex.mapMutations
const mapState = Vuex.mapState

const store = new Vuex.Store({
        state: {
            mzth: [],
            wydd: [],
            zsej: [],
            zz: []
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
            },
            setzz(state, payload) {
                state.zz = payload

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
            },
            getzz(state) {
                return state.zz
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