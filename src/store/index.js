import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
const axios = Vue.axios;
export default new Vuex.Store({
  state: {
    country: {}
  },
  mutations: {
    ADD_COUNTRY(state, country) {
      const { altSpellings, callingCodes, currencies, flag, capital, region, subregion, name, latlng } = country
      state.country = { altSpellings, callingCodes, currencies, flag, capital, region, subregion, name, latlng }
    },
    ADD_CURRENCY_COUNTRIES(state, countries) {
      state.country.currencyCountries = countries
    },
    ADD_CALLCODE_COUNTRIES(state, countries) {
      state.country.callcodeCountries = countries
    }
  },
  actions: {
    //eslint-disable-next-line
    async getCountryData({ commit }, countryName) {
      try {
        const { data } = await axios.get(`/name/${countryName}`)
        commit("ADD_COUNTRY", data[0])
        const currency = await axios.get(`/currency/${data[0].currencies[0].code}`)
        const currencyCountries = currency.data.map(country => country.name)
        commit('ADD_CURRENCY_COUNTRIES', currencyCountries)
        const callCode = await axios.get(`/callingcode/${data[0].callingCodes[0]}`)
        const callCodeCountries = callCode.data.map(country => country.name)
        commit('ADD_CALLCODE_COUNTRIES', callCodeCountries)
        return data[0]
      } catch ({ response }) {
        throw response.data
      }
    }
  },
  modules: {},
});
