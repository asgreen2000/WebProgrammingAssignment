
import AdminProduct from './components/admin/ManageProduct/ManageProduct'
import AdminNews from './components/admin/ManageNews/ManageNews'
// eslint-disable-next-line import/no-anonymous-default-export
export default  [



    {
        path: '/product',
        exact: true,
        public: true,
        component: <AdminProduct />

    },
    
    {
        path: '/news',
        exact: true,
        public: true,
        component: <AdminNews />
        
    }

];
