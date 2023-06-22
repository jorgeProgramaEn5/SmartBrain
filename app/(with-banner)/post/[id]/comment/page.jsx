import { resolve } from "styled-jsx/css";

const fetchComments = async (id)=>{
    await new Promise(resolve => setTimeout(resolve, 3000))

    // para forzar el error hay que descomentar la linea que sigue
    // y comentar de la linea 10 a la linea 15
    // throw new Error('Error al cargar los comentarios');

    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
        next: {
            revalidate: 60
        }
    })
    .then(res => res.json())
}

export default async function comments({params}) {
    const { id } = params
    const comments = await fetchComments(id);
    
    return (
        <ul className=" mt-1 p-3 w-100 bg-primary-400">
            {comments.map(comment =>(
                <li key={comment.id}>
                    <h2 className=" pb-2 text-sm uppercase">{comment.name}</h2>
                    <p className='pb-1 text-xs'>{comment.body}</p>
                </li>
            ))}
        </ul>
    )
}