import { Carousel, Typography } from "@material-tailwind/react"
import Witness1 from '@/assets/witness1.jpg';
import Witness2 from '@/assets/witness2.jpg';
import Witness3 from '@/assets/witness3.jpg';
import Image from "next/image";

export const Reviews = () => {
  return (
    <div id="testemunhos" className="h-[100vh]">
    <Carousel loop autoplay autoplayDelay={20000}>
      <div className="relative h-full w-full">
        <Image
          src={Witness1}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center lg:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus hendrerit diam, sed rhoncus ipsum dictum at. Duis id aliquam nisl. Sed placerat, nisl ac fringilla finibus, dui ante iaculis magna, accumsan porta nibh nibh vel nunc. Praesent euismod neque varius arcu ultricies congue. Suspendisse posuere erat quis ornare lacinia. Proin condimentum turpis sed enim mattis ultricies. Sed vel scelerisque ligula.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={Witness2}
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center lg:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus hendrerit diam, sed rhoncus ipsum dictum at. Duis id aliquam nisl. Sed placerat, nisl ac fringilla finibus, dui ante iaculis magna, accumsan porta nibh nibh vel nunc. Praesent euismod neque varius arcu ultricies congue. Suspendisse posuere erat quis ornare lacinia. Proin condimentum turpis sed enim mattis ultricies. Sed vel scelerisque ligula.
            </Typography>
          </div>
        </div>
      </div>
      <div className="relative h-full w-full">
        <Image
          src={Witness3}
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center lg:w-2/4">
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed faucibus hendrerit diam, sed rhoncus ipsum dictum at. Duis id aliquam nisl. Sed placerat, nisl ac fringilla finibus, dui ante iaculis magna, accumsan porta nibh nibh vel nunc. Praesent euismod neque varius arcu ultricies congue. Suspendisse posuere erat quis ornare lacinia. Proin condimentum turpis sed enim mattis ultricies. Sed vel scelerisque ligula.
            </Typography>
          </div>
        </div>
      </div>
    </Carousel>
  </div>
  )
}
