
import posts from '../assets/Data/Post.json'
import Post from './Post'
const Posts = () => {
  return (
    <div>
        <div className="mt-5">
      {posts.map((post) => (
        <Post name={post.name} img={post.img} key={post.id} />

      ))}
    </div>
        
      
    </div>
  )
}

export default Posts
