import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function PostHome() {
  const payload = await getPayload({
    config: configPromise,
  })

  const data = await payload.find({
    collection: 'posts',
  })

  return (
    <div>
      <h1>all posts</h1>
      {data.docs.map((post) => (
        <div key={post.id}>
          <h1>{post.title}</h1>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  )
}
