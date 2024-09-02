import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Layout from "../Layout/Layout";
const ArticlePage = () => {
  return (
<Layout>
  <div className="min-h-screen p-10 bg-gray-50">
    <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="relative">
        <AspectRatio ratio={16/5}>
        <img
          src="https://images.unsplash.com/photo-1505330622279-bf7d7fc918f4?w=1600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
          alt="Article Cover"
          className="w-full h-64 object-cover"
        />
        </AspectRatio>
    
        <div className="absolute bottom-0 left-0 bg-black bg-opacity-50 p-4 w-full text-white">
          <h1 className="text-3xl font-bold">Article Title</h1>
        </div>
      </div>
      
      {/* Article Meta */}
      <div className="p-4 bg-gray-100 flex justify-between items-center text-sm text-gray-600">
        <span>By Author Name</span>
        <span>Published on Date</span>
      </div>
      
      {/* Article Content */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          This is the introductory paragraph of the article. It should provide an overview of the topic discussed in the article.
        </p>
        
       
      
       
      </div>
    </div>
  </div>
</Layout>

  
  );
};

export default ArticlePage;
