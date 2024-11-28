interface Post {
  title: string;
  image: string;
  author: string;
}

export default function Post( {post} : {post: Post} ) {
  return (
    <div className="text-white max-w-60">
      <img className="h-80 mx-auto" src={post.image} alt={post.title} />
      <h1 className="text-lg font-bold mt-2">{post.title}</h1>
      <h2 className="mt-2">{post.author}</h2>
  </div>
  )
}
