import IRoute from '@interfaces/IRoute'
// import Counter from '../views/counter'
import HomePage from '@components/homepage'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true,
    },
]

export default routes
