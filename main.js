import Vue from 'vue'
import App from './App'
// import util from './util/api.js'

Vue.config.productionTip = false
// Vue.prototype.$myRuquest = util.myRequest

Vue.filter('formatDate',(date)=>{
	const nDate = new Date(date)
	const year = nDate.getFullYear()
	const month = nDate.getMonth().toString().padStart(2,0)
	const day = nDate.getDay().toString().padStart(2,0)
	return year+'-'+month+'-'+day
})

Vue.filter('formatSex',(gender)=>{
	
	if(gender===1){
		return "man"
	}else if(gender ===2){
		return "woman"
	}
	
	
	// const nDate = new Date(date)
	// const year = nDate.getFullYear()
	// const month = nDate.getMonth().toString().padStart(2,0)
	// const day = nDate.getDay().toString().padStart(2,0)
	// return year+'-'+month+'-'+day
})

App.mpType = 'app'

// 引入全局uView
import uView from 'uview-ui'
Vue.use(uView);

const app = new Vue({
    ...App
})
app.$mount()
