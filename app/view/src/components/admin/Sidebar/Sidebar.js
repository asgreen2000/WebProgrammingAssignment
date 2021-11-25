import {Data} from './Data';


const Sidebar = props => {


    return <div className='bg-main sidebar mt-0'>
        <ul className='h-100 list-group'>
        {Data.map((val, key) => {

           return <li key={key} className='bg-main text-white row p-0 m-0'>
                {" "}
                <div className='icon col-4'>
                    {val.icon}
                </div>
                {" "}
                <div className='title col-8'>
                    {val.title}
                </div>
            </li>
        })
        }
        </ul>
    </div>
}

export default Sidebar;