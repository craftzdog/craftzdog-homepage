import Image from 'next/image'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <div className="w-full text-center">
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <Image
        src={thumbnail}
        alt={title}
        className="rounded-xl object-cover w-full h-auto aspect-video"
        placeholder="blur"
        loading="lazy"
      />
      <p className="mt-2">{title}</p>
      <p className="text-sm">{children}</p>
    </a>
  </div>
)

export const WorkGridItem = ({
  children,
  _category = 'projects',
  _id,
  title,
  thumbnail,
  onClick
}) => (
  <div className="w-full text-center">
    <div className="cursor-pointer" onClick={onClick}>
      <div className="overflow-hidden rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <Image
          src={thumbnail}
          alt={title}
          className="rounded-xl object-cover w-full h-auto aspect-video"
          width={400}
          height={225}
          style={{ objectFit: 'cover' }}
        />
      </div>
      <p className="mt-2 text-xl">{title}</p>
      <p className="text-sm">{children}</p>
    </div>
  </div>
)
