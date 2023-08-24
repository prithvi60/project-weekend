import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";
import Bridge from "../components/Icons/Bridge";
import { InstagramEmbed } from "react-social-media-embed";
import Modal from "../components/Modal";
import cloudinary from "../utils/cloudinary";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import type { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import Banner from "../components/Banner";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const router = useRouter();
  const { photoId } = router.query;
  const [lastViewedPhoto, setLastViewedPhoto] = useLastViewedPhoto();

  const lastViewedPhotoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // This effect keeps track of the last viewed photo in the modal to keep the index page in sync when the user navigates back
    if (lastViewedPhoto && !photoId) {
      lastViewedPhotoRef.current.scrollIntoView({ block: "center" });
      setLastViewedPhoto(null);
    }
  }, [photoId, lastViewedPhoto, setLastViewedPhoto]);
  const socials = [
    {
      url: "https://www.instagram.com/p/CsYXskYr0vC/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      url: "https://www.instagram.com/reel/Cq8UNZAI_tp/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      url: "https://www.instagram.com/p/CwKufqayqhq/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      url: "    https://www.instagram.com/p/CwFSMNYS61w/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      url: "     https://www.instagram.com/p/CwUXo9jyJXq/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
    {
      url: "      https://www.instagram.com/reel/CvglO54P9gh/?utm_source=ig_web_copy_link&igshid=MzRlODBiNWFlZA==",
    },
  ];
  return (
    <>
      <Head>
        <title>Chennai's Upcoming events</title>
        <meta
          property="og:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
        <meta
          name="twitter:image"
          content="https://nextjsconf-pics.vercel.app/og-image.png"
        />
      </Head>
      <main className="p-4 pb-0 md:mx-auto  ">
        {photoId && (
          <Modal
            images={images}
            onClose={() => {
              setLastViewedPhoto(photoId);
            }}
          />
        )}
        <Banner />
        <div className="flex-row-reverse justify-end gap-4 pt-3 md:flex md:overflow-hidden md:px-2"
        style={{height:"100%"}}>
          <div
            className=" scrollbar md:w-2/3 
              "
            style={{
              overflowY: "auto",
              height: "100%",
              maxHeight: "85vh",
              width:"100%"
            }}
          >
            <div
              className=" columns-1 gap-4 px-2 sm:columns-2 xl:columns-2 2xl:columns-3
                  "
            >
              {/* {images.map(({ id, public_id, format, blurDataUrl }) => (
                <Link
                  key={id}
                  href={`/?photoId=${id}`}
                  as={`/p/${id}`}
                  ref={
                    id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
                  }
                  shallow
                  className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                >
                  <Image
                    alt="Next.js Conf photo"
                    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                    style={{ transform: "translate3d(0, 0, 0)" }}
                    placeholder="blur"
                    blurDataURL={blurDataUrl}
                    src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.${format}`}
                    width={720}
                    height={480}
                    sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                  />
                </Link>
              ))} */}
              {socials.map((links, idx) => (
                <div
                  key={idx}
                  // href={`/?photoId=${id}`}
                  // as={`/p/${id}`}
                  // ref={
                  //   id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
                  // }
                  // shallow
                  className="py-2"
                  // className="after:content group relative mx-2 mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                >
                  <InstagramEmbed url={links.url} width={328} 
                  // height={480} 
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="after:content relativemd:pb-4 relative mb-2 flex max-h-full max-w-[340px]  flex-col items-center justify-start gap-4 overflow-hidden rounded-lg bg-white/10 px-6  pt-64 text-center text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0  md:w-1/3 ">
            {/* <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex  max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div> */}
            <h1 className="pt-8 text-base font-bold uppercase tracking-widest">
              Vaara Irudhi
            </h1>
            <h1 className="mb-4 mt-2 text-base font-bold uppercase tracking-widest">
              Community run latest events page happening in Chennai.
            </h1>
            <p className="max-w-[40ch] text-white/75 sm:max-w-[32ch]">
              We cover all the latest events in Chennai
            </p>
            <a
              className="pointer z-10 mt-2 rounded-lg border border-white bg-white px-3 py-2 text-sm font-semibold text-black transition hover:bg-white/10 hover:text-white md:mt-2"
              href="https://vercel.com/new/clone?repository-url=https://github.com/vercel/next.js/tree/canary/examples/with-cloudinary&project-name=nextjs-image-gallery&repository-name=with-cloudinary&env=NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,CLOUDINARY_API_KEY,CLOUDINARY_API_SECRET,CLOUDINARY_FOLDER&envDescription=API%20Keys%20from%20Cloudinary%20needed%20to%20run%20this%20application"
              target="_blank"
              rel="noreferrer"
            >
              Subscribe for updates
            </a>
            <div className="absolute bottom-6  px-2 text-center text-white/80">
              Powered by{" "}
              <div className="text-sm">
                <a
                  href="https://webibee.com/"
                  target="_blank"
                  className="pr-2 font-semibold hover:text-white"
                  rel="noreferrer"
                >
                  Webibee
                </a>
                |
                <a
                  href="https://webibee.com/"
                  target="_blank"
                  className="pl-2 font-semibold hover:text-white"
                  rel="noreferrer"
                >
                  SolveforX
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </main>
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();
  let reducedResults: ImageProps[] = [];

  let i = 0;
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    });
    i++;
  }

  const blurImagePromises = results.resources.map((image: ImageProps) => {
    return getBase64ImageUrl(image);
  });
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises);

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i];
  }

  return {
    props: {
      images: reducedResults,
    },
  };
}
