interface Post {
    title: string;
    image: string;
author: string
}
  
import Post from '../components/Post';

export default function Posts({posts} : {posts: Array<Post>}) {
    return (
        <div className='flex gap-1 flex-wrap'>
            {posts.map((post: Post, i : number) => 
                <Post post={post} key={i}/>
            )}
        </div>
    )
}