'use client'

import Link from 'next/link';

const singleFetchPost = (id)=>{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function Post({children, params}) {
    const { id } = params
    const post = await singleFetchPost(id);
    


    return (
        <article className=" p-3 w-2/4 bg-primary-200">
            <h1 className=" pb-2 text-white text-xl uppercase">{post.title}</h1>
            <p className='pb-1'>{post.body}</p>
            <Link href={`/post/${id}/comment`} >Ver comentarios</Link>
            {children}
        </article>
    )
}
