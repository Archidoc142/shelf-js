interface Post {
  title: string;
  image: string;
  author: string
}

export default function Post( {post, key} : {post: Post, key: number} ) {
  console.log(post)
  return (
    <div className="text-white" key={key}>
        <h1 className="text-lg">{post.title}</h1>
        <p className="text-sm">by {post.author}</p>
        <img height={64} src={post.image} alt={post.title} />
    </div>
  )
}
