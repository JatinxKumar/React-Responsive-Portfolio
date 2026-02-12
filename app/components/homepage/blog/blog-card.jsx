// // @flow strict
// import { timeConverter } from '@/utils/time-converter';
// import Image from 'next/image';
// import Link from 'next/link';
// import { BsHeartFill } from 'react-icons/bs';
// import { FaCommentAlt } from 'react-icons/fa';

// function BlogCard({ blog }) {

//   return (
//     <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group"
//     >
//       <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
//         module.exports = {
//           images: {
//             domains: [
//               'www.shutterstock.com',
//               // ...agar aur bhi domains hain toh unko bhi yahan add karein
//             ],
//           },
//         };
//         <Image
//           src="https://www.shutterstock.com/shutterstock/photos/2613689231/display_1500/stock-photo-i-m-looking-for-a-image-that-would-be-used-in-our-hero-banner-for-the-blogging-section-of-our-2613689231.jpg"
//           alt ="Blog Cover Image"
//           height={1080}
//           width={1920}
//           className='h-full w-full group-hover:scale-110 transition-all duration-300'
//         />
//       </div>
//       <div className="p-2 sm:p-3 flex flex-col">
//         <div className="flex justify-between items-center text-[#16f2b3] text-sm">
//           <p>{timeConverter(blog.published_at)}</p>
//           <div className="flex items-center gap-3">
//             <p className="flex items-center gap-1">
//               <BsHeartFill />
//               <span>{blog.public_reactions_count}</span>
//             </p>
//             {blog.comments_count > 0 &&
//               <p className="flex items-center gap-1">
//                 <FaCommentAlt />
//                 <span>{blog.comments_count}</span>
//               </p>
//             }
//           </div>
//         </div>
//         {/* <Link target='_blank' href={blog.url}>
//           <p className='my-2 lg:my-3 cursor-pointer text-lg text-white sm:text-xl font-medium hover:text-violet-500'>
//             {blog.title}
//           </p>
//         </Link> */}
//         <p className='mb-2 text-sm text-[#16f2b3]'>
//           {`${blog.reading_time_minutes} Min Read`}
//         </p>
//         <p className='text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3'>
//           {blog.description}
//         </p>
//         {/* <div className="">
//           <Link target='_blank' href={blog.url}>
//             <button className='bg-violet-500 text-white px-3 py-1.5 rounded-full text-xs'>
//               Read More
//             </button>
//           </Link>
//         </div> */}
//       </div>
//     </div>
//   );
// };

// export default BlogCard;


// import { timeConverter } from '@/utils/time-converter';
// import Image from 'next/image';
// import { BsHeartFill } from 'react-icons/bs';
// import { FaCommentAlt } from 'react-icons/fa';

// function BlogCard({ blog }) {
//   return (
//     <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
//       <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
//         <Image
//           src="https://www.shutterstock.com/shutterstock/photos/2613689231/display_1500/stock-photo-i-m-looking-for-a-image-that-would-be-used-in-our-hero-banner-for-the-blogging-section-of-our-2613689231.jpg"
//           alt="Blog Cover Image"
//           height={1080}
//           width={1920}
//           className="h-full w-full group-hover:scale-110 transition-all duration-300"
//         />
//       </div>
//       <div className="p-2 sm:p-3 flex flex-col">
//         <div className="flex justify-between items-center text-[#16f2b3] text-sm">
//           <p>{timeConverter(blog.published_at)}</p>
//           <div className="flex items-center gap-3">
//             <p className="flex items-center gap-1">
//               <BsHeartFill />
//               <span>{blog.public_reactions_count}</span>
//             </p>
//             {blog.comments_count > 0 && (
//               <p className="flex items-center gap-1">
//                 <FaCommentAlt />
//                 <span>{blog.comments_count}</span>
//               </p>
//             )}
//           </div>
//         </div>
//         <p className="my-2 lg:my-3 text-lg text-white sm:text-xl font-medium">
//           {blog.title}
//         </p>
//         <p className="mb-2 text-sm text-[#16f2b3]">
//           {`${blog.reading_time_minutes} Min Read`}
//         </p>
//         <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
//           {blog.description}
//         </p>
//       </div>
//     </div>
//   );
// }

// export default BlogCard;


import { timeConverter } from '@/utils/time-converter';
import Image from 'next/image';
import { BsHeartFill } from 'react-icons/bs';
import { FaCommentAlt } from 'react-icons/fa';

function BlogCard({ blog }) {
  return (
    <div className="border border-[#1d293a] hover:border-[#464c6a] transition-all duration-500 bg-[#1b203e] rounded-lg relative group">
      <div className="h-44 lg:h-52 w-auto cursor-pointer overflow-hidden rounded-t-lg">
        <Image
          src={blog.cover_image}
          alt="Blog Cover Image"
          height={300}
          width={600}
          className="h-full w-full object-cover group-hover:scale-110 transition-all duration-300"
        />
      </div>
      <div className="p-2 sm:p-3 flex flex-col">
        <div className="flex justify-between items-center text-[#16f2b3] text-sm">
          <p>{timeConverter(blog.published_at)}</p>
          <div className="flex items-center gap-3">
            <p className="flex items-center gap-1">
              <BsHeartFill />
              <span>{blog.public_reactions_count}</span>
            </p>
            {blog.comments_count > 0 && (
              <p className="flex items-center gap-1">
                <FaCommentAlt />
                <span>{blog.comments_count}</span>
              </p>
            )}
          </div>
        </div>
        <p className="my-2 lg:my-3 text-lg text-white sm:text-xl font-medium">
          {blog.title}
        </p>
        <p className="mb-2 text-sm text-[#16f2b3]">
          {`${blog.reading_time_minutes} Min Read`}
        </p>
        <p className="text-sm lg:text-base text-[#d3d8e8] pb-3 lg:pb-6 line-clamp-3">
          {blog.description}
        </p>
      </div>
    </div>
  );
}

export default BlogCard;