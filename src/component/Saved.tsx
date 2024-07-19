import {  useNavigate } from "react-router-dom"

const Saved : React.FC<any> = ({post}) => {
    const navigate = useNavigate()
    return (
        <li className="relative flex flex-col sm:flex-row xl:flex-col items-start shadow-md p-3">
        <div className="order-1 sm:ml-6 xl:ml-0">
            <h3 className="mb-1 text-slate-900 font-semibold">
              
                {post.title}
            </h3>
            <div className="prose prose-slate prose-sm text-slate-600">
            <p>{post.description.length > 10 ? post.description.substring(0, 10) + '...' : post.description}</p>

            </div><p
            onClick={()=>navigate(`/article/${post._id}`)}
                className="group inline-flex items-center h-9 rounded-full text-sm font-semibold whitespace-nowrap px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                >Learn
                more<span className="sr-only">, Seamless SVG background patterns by the makers of Tailwind CSS.</span>
                <svg className="overflow-visible ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></p>
        </div>
        <img src={post.image} alt="" className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full" width="1216" height="640"/>
    </li>
    )
}

export default Saved