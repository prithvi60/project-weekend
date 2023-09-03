import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Bridge from "../components/Icons/Bridge";
import { InstagramEmbed } from "react-social-media-embed";
import Modal from "../components/Modal";
import cloudinary from "../utils/cloudinary";
import getBase64ImageUrl from "../utils/generateBlurPlaceholder";
import type { ImageProps } from "../utils/types";
import { useLastViewedPhoto } from "../utils/useLastViewedPhoto";
import Banner from "../components/Banner";
import content from "../utils/instaposts.json";

const Home: NextPage = ({ images }: { images: ImageProps[] }) => {
  const socials = [
    { name: "classiculttheband" },
    { name: "samathmika_k" },
    { name: "idam_thespace" },
    { name: "euphoria.chennai" },
    { name: "uncalled_knacks" },
    { name: "hemamalini_mk" },
    { name: "praveez_musiq" },
    { name: "no mentions" },
    { name: "last 10 days" },
  ];
  // const socials = [
  //   { name: "classiculttheband" },
  //   { name: "All groups" },
  //   { name: "hangouts" },
  //   { name: "dates" },
  //   { name: "events" },
  //   { name: "office" },
  //   { name: "party" },
  // ];
  const area = [
    {
      name: "classiculttheband",
    },
    {
      name: "All areas",
    },
    {
      name: "Tondiarpet",
    },
    {
      name: "Manali",
    },
    {
      name: "Thirguvottiyur",
    },
    {
      name: "Ennore",
    },
    {
      name: "George Town",
    },
    {
      name: "Nungambakkam",
    },
    {
      name: "Royapettah",
    },
    {
      name: "Adyar",
    },
    {
      name: "Besant Nagar",
    },
    {
      name: "Kotturpuram",
    },
    {
      name: "Mylapore",
    },
    {
      name: "Velachery",
    },
    {
      name: "Taramani",
    },
    {
      name: "Perungudi",
    },
    {
      name: "Tambaram",
    },
    {
      name: "Sholinganallur",
    },
    {
      name: "Kelambakkam",
    },
  ];
  const [list, setList] = useState(socials[0]);
  const [listTwo, setListTwo] = useState(area[0]);

  const router = useRouter();
  const { photoId } = router.query;
  const today = new Date();

  //   console.log(days);
  // console.log("split",date.split("-")[1])
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
            // onClose={() => {
            //   setLastViewedPhoto(photoId);
            // }}
          />
        )}
        <Banner
          list={list}
          listTwo={listTwo}
          setList={setList}
          setListTwo={setListTwo}
          socials={socials}
          area={area}
        />
        <div
          className="flex-row-reverse justify-end gap-2 pt-3 md:flex md:overflow-hidden md:px-0"
          style={{ height: "100%" }}
        >
          <div
            className=" scrollbar md:w-2/3 
              "
            style={{
              overflowY: "auto",
              height: "100%",
              maxHeight: "85vh",
              width: "100%",
            }}
          >
            <div
              className=" columns-1 gap-1  sm:columns-2 xl:columns-3 2xl:columns-4
                  "
            >
              {/* filter based on states */}
              {content
                .filter((item) => {
                  const timestamp = new Date(item.timestamp);
                  // ignore ts isssue
                  const diff = today - timestamp;

                  const days = diff / (1000 * 60 * 60 * 24);

                  return list.name === "last 10 days"
                    ? days <= 10
                    : item.mentions[0] === list.name;
                })
                .map((item, idx) => (
                  <Link
                    key={idx}
                    href={item.url}
                    target="blank"
                    // as={`/p/${id}`}
                    // ref={
                    //   id === Number(lastViewedPhoto) ? lastViewedPhotoRef : null
                    // }
                    shallow
                    className="after:content group relative mb-5 block w-full cursor-pointer after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
                  >
                    {/* <img src={"https://scontent-atl3-2.cdninstagram.com/v/t51.2885-15/369762580_1946490639083941_2901534663185666869_n.jpg?stp=dst-jpg_e15&_nc_ht=scontent-atl3-2.cdninstagram.com&_nc_cat=101&_nc_ohc=Ek-MtV3hqKAAX9K4EA3&edm=AP_V10EBAAAA&ccb=7-5&oh=00_AfCOmRfmqzncGmnR_glifZ2Cv39n3MCfs21jO0ZGgY-jOA&oe=64EA1B8D&_nc_sid=2999b8"} alt={"posts"}
                    className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"

                   width={480}
                   height={480}
                /> */}
                    <Image
                      alt="posts"
                      className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
                      style={{ transform: "translate3d(0, 0, 0)" }}
                      placeholder="blur"
                      blurDataURL={
                        "data:image/jpeg;base64,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"
                      }
                      // item.displayurl has cdn cors
                      loader={() => "/mockposter.jpg"}
                      src={"/mockposter.jpg"}
                      width={480}
                      height={480}
                      sizes="(max-width: 640px) 100vw,
                  (max-width: 1280px) 50vw,
                  (max-width: 1536px) 33vw,
                  25vw"
                    />
                    <div className="absolute right-8 top-2 text-sm text-white">
                      {item.mentions[0]}
                    </div>
                  </Link>
                  // <div
                  //   key={idx}
                  //   className="relative cursor-pointer rounded-md mx-2"
                  //   style={
                  //     {
                  //       // maxHeight:"800px"
                  //     }
                  //   }
                  // >
                  //   <div
                  //     style={
                  //       {
                  //         // scale:"0.9"
                  //       }
                  //     }
                  //   >
                  //     <InstagramEmbed
                  //       url={item.url}
                  //       width="100%"
                  //       height={"inherit"}
                  //     />
                  //   </div>
                  // </div>
                ))}
              {/* {socials.map((links, idx) => (
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
              ))} */}
            </div>
          </div>
          <div className="after:content relative relative mb-2 hidden max-h-full max-w-[340px] flex-col items-center  justify-start gap-4 overflow-hidden rounded-lg bg-white/10 px-0 pt-64 text-center  text-white shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight md:flex md:w-1/3 md:pb-4  lg:pt-0 ">
            {/* <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex  max-w-full items-center justify-center">
                <Bridge />
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div> */}
            <h1 className="pt-8 text-base font-bold uppercase tracking-widest">
              Vaara Irudhi
            </h1>
            <h1 className="mb-4 mt-2  text-sm font-semibold uppercase tracking-widest">
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
                  SolveforCulture
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
