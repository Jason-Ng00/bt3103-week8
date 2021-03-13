// Import the components you want to define routes for.
import Home from './components/PageContent.vue'
import Order from './components/Orders.vue'
import Modify from './components/Modify.vue'
import Dashboard from './components/Dashboard.vue'

export default [
  { path: '/', component: Home },
  { path: '/orders', component: Order },
  { name:"Modify", path: '/modify', component: Modify },
  { name:"Dashboard", path: '/dashboard', component: Dashboard },

]