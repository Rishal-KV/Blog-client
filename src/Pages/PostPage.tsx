import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import Layout from "../Layout/Layout";
const PostPage = () => {
  return (
    <Layout>
      <div className="min-h-screen md:px-10 py-5  md:py-10">
        <div className="flex flex-wrap  min-h-full gap-3 lg:gap-4 px-10   ">
          <div className="md:w-[32%] w-full ">
            
            <Card>
              <CardHeader>
                <AspectRatio ratio={16 / 9}>
                  <img
                    src="https://plus.unsplash.com/premium_photo-1661339265887-be15949790ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmxvZ3xlbnwwfHwwfHx8MA%3D%3D"
                    alt=""
                  />
                </AspectRatio>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="md:w-[32%] ">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="md:w-[32%] ">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
          <div className="md:w-[32%]">
            <Card>
              <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>Card Description</CardDescription>
              </CardHeader>
              <CardContent>
                <p>Card Content</p>
              </CardContent>
              <CardFooter>
                <Button>Read More</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostPage;
