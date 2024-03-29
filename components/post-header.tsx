import DateFormatter from './date-formatter'
import CoverImage from './cover-image'
import PostTitle from './post-title'
import type Author from '../interfaces/author'

type Props = {
  title: string
  coverImage: string
  date: string
  author: Author
}

const PostHeader = ({ title, coverImage, date, author }: Props) => {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <div className="mx-auto">
        <div className="mb-6 text-lg ml-6">
          <DateFormatter dateString={date} />
        </div>
      </div>
      <div className="hidden md:block md:mb-12">
      </div>
      <div className="mb-8 md:mb-16 sm:mb-0 mx-8">
        <CoverImage title={title} src={coverImage} />
      </div>
    </>
  )
}

export default PostHeader
