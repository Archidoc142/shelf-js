interface Musique {
    title: string;
    image: string;
}

export default function Musique({post} : {post: Musique}) {
    return (
        <div className="text-white w-40 mb-4">
            <img src={post.image} alt={post.title} />
            <h1 className="text-lg font-bold mt-2">{post.title}</h1>
        </div>
    )
}