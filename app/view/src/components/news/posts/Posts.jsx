import Post from "../post/Post"
import "./posts.css"

function posts() {

    const displayData = () => {
        var displayData = "true";
        $.ajax({
            url: "php/a.php",
            type: 'post',
            data: {
                displaySend: displayData
            },
            success: function (data, status) {
                $('#displayDataTable').html(data);
            }
        });
    };

    return (
        <div className="posts">
            <Post
                img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                topic="Life"
                title="Lorem ipsum dolor sit amet"
                time="1 hour ago"
                content=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?"
            />


        </div>
    )
}

export default posts;
