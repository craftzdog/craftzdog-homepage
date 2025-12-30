import NextLink from 'next/link'

const NotFound = () => {
  return (
    <div className="max-w-3xl mx-auto px-4">
      <h1 className="text-4xl font-bold">Not found</h1>
      <p className="mt-2">The page you&apos;re looking for was not found.</p>
      <hr className="my-6 border-gray-300" />
      <div className="my-6 text-center">
        <NextLink
          href="/"
          className="inline-block px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded transition-colors"
        >
          Return to home
        </NextLink>
      </div>
    </div>
  )
}

export default NotFound
