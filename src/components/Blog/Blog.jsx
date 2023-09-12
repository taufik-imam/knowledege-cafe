// import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({blog,handleAddToBookmark}) => {
    const {cover,title,author_image,author,posted_date,reading_time_hours,hashtags} =blog
    return (
        <div className='space-y-5 mb-20'>
            <img className='' src={cover} alt="" />
            <div>
                <div className='flex justify-between items-center'>
                    <div className='flex items-center gap-3'>
                        <div><img className='w-[60px] h-[60px]' src={author_image} alt="" /></div>
                        <div>
                        <h1>{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                    </div>

                    <div>
                        <span>{reading_time_hours} min read</span>
                        <button onClick={()=>handleAddToBookmark(blog)} className='ml-2 text-red-600 '><FaBookmark></FaBookmark></button>
                    </div>
                    

                </div>
            </div>
            <h1 className='font-bold text-4xl'>{title}</h1>
            <p>
            {
                    hashtags.map((hash,idx) => <span key={idx}><a href=''>#{hash}</a></span>)
                }
                
            </p>
            
        </div>
    );
};
// Blog.PropTypes={
//     blog:PropTypes.object.isRequired
//     handleAddToBookmark.
// }

export default Blog;