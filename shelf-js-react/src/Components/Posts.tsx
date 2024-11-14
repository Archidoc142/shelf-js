import { useState } from 'react';
import Post from './Post';
import Jeu from './Jeu';
import Album from './Album';
import Musique from './Musique';

export default function Posts({posts, type} : {posts:Array<Object>, type:string}) {
    
    return (
        <div className='mt-8 justify-center flex flex-wrap w-full gap-2 text-center'>
            {posts.map((post:any, i : number) => 
                type == "jeux" ? 
                    <Jeu post={post} key={i} /> : 
                type == "albums" ?
                    <Album post={post} key={i} /> : 
                type == "musiques" ?
                    <Musique post={post} key={i} /> : 
                type == "films" || type == "livres" ?
                    <Post post={post} key={i} /> : 
                    null
            )}
        </div>
    )
}