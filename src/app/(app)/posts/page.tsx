import { getPayload } from 'payload'
import configPromise from '@payload-config'

export default async function PostHome() {
  // const payload = await getPayload({
  //   config: configPromise,
  // })

  // const posts = await payload.find({
  //   collection: 'posts',
  // })

  // const authors = await payload.find({
  //   collection: 'authors',
  // })

  return (
    <div>
      <h1 className="text-xl font-medium">all posts</h1>
      {/* {posts
        ? posts.docs.map((post) => (
            <div key={post.id} className="p-4 bg-blue-200">
              <h1 className="text-lg">{post.title}</h1>
              <p className="text-center">{JSON.stringify(post.content)}</p>
            </div>
          ))
        : null}

      <h1 className="text-xl font-medium">all authors</h1>
      {authors
        ? authors.docs.map((author) => (
            <div key={author.id} className="p-4 bg-blue-200">
              <h1 className="text-lg">{author.name}</h1>
              <p className="text-center">{JSON.stringify(author.bio)}</p>
            </div>
          ))
        : null} */}
    </div>
  )
}
