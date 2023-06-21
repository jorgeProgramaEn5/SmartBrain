import { ListOfPost } from "./ListOfPost"

const fetchPost = ()=> {
  return fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
}

export default async function PostPages({params}) {
  const posts = await fetchPost()

  return (
    <section className="flex flex-col justify-center items-center flex-1">
      <ListOfPost />
    </section>
  )
}