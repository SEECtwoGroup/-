import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import home from '@/view/home'
import index from '@/view/index'
import cart from '@/view/cart'
import course from '@/view/course'
import my from '@/view/my'
import trends from '@/lu/trends'
import order from '@/lu/order'
import preferential from '@/lu/preferential'
import contact from '@/lu/contact'
import v1 from '@/lu/orderone/v1'
import v2 from '@/lu/orderone/v2'
import v3 from '@/lu/orderone/v3'
import v4 from '@/lu/orderone/v4'
import dianimg from '@/lu/dianimg'
import youhuixiang from '@/lu/youhuixiang'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },{
    	path:'/',
    	name:'home',
    	component:home,
    	redirect:'/index',
    	children:[
    		{
    			path:'index',
		    	name:'index',
		    	component:index,
    		},{
    			path:'cart',
		    	name:'cart',
		    	component:cart
    		},{
    			path:'course',
		    	name:'course',
		    	component:course
    		},{
    			path:'my',
		    	name:'my',
		    	component:my
    		},
    		{
    			path:'trends',
		    	name:'trends',
		    	component:trends,
    		},
    		{
    			path:'order',
		    	name:'order',
		    	component:order,
    		},
    		{
    			path:'preferential',
		    	name:'preferential',
		    	component:preferential,
    		},
    		{
    			path:'contact',
		    	name:'contact',
		    	component:contact,
    		},
    		{
    			path:'dianimg',
		    	name:'dianimg',
		    	component:dianimg,
    		},
    		{
    			path:'youhuixiang',
		    	name:'youhuixiang',
		    	component:youhuixiang,
    		},
    	]
    }
  ]
})
