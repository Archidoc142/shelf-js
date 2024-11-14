interface Post {
  title: string;
  image: string;
  author: string
}

export default function Post( {post} : {post: Post} ) {
  return (
    <div className="text-white w-36 h-72 bg-gray-700">
        <h1 className="text-lg">{post.title}</h1>
        <p className="text-sm">by {post.author}</p>
        <img height={64} src={post.image} alt={post.title} />
    </div>
  )
}
