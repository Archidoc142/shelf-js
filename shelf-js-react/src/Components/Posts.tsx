import { useState } from 'react';
import Post from './Post';

export default function Posts({posts} : {posts:Array<Object>}) {
    
    return (
        <>
            {posts.map((post:any, i : number) => {
                <Post post={post} key={i}/>
            })}
        </>
    )
}