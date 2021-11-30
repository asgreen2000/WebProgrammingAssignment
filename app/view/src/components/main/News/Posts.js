import Post from "./Post"
import "./Posts.css"

export default function Posts() {

    const arr = [1, 2, 3, 4, 5, 6];

    return (
        <div className="posts row m-0 p-0">
            
            {
                arr.map(item => {

                    return  <div className='col-4 p-5'>
                        <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
                    </div>
                })
            }
           
            <div className='col-4 p-5'>
             <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </div>
            <div className='col-4 p-5'>
             <Post img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
            </div>
        </div>
    )
}