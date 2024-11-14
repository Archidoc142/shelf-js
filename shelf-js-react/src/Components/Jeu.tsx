interface Jeu {
    title: string;
    image: string;
}

export default function Jeu({post} : {post: Jeu}) {
    return (
        <div className="text-white w-60">
            <img className="h-80" src={post.image} alt={post.title} />
            <h1 className="text-lg font-bold mt-2">{post.title}</h1>
        </div>
    )
}