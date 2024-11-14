interface Album {
    title: string;
    author: String;
    image: string;
}

export default function Album({post} : {post: Album}) {
    return (
        <div className="text-white w-40 mb-4">
            <img src={post.image} alt={post.title} />
            <h1 className="text-lg font-bold mt-2">{post.title}</h1>
            <p className="text-lg  mt-2">{post.author}</p>
        </div>
    )
}