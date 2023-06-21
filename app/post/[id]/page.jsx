export default function post({ params }) {
    const {id} = params;
    
    return (
        <div>este es el post {id}</div>
    )
}
