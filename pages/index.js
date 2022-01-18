import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import Image from "next/image";
import ImgSlider from "../components/imgSlider.js";
import imgLogo from "../public/images/icons/logo-b.png";
import imgIcon from "../public/images/icons/1.png";
import img0 from "../public/images/hogene/0.png";
import img1 from "../public/images/hogene/1.png";
import img2 from "../public/images/hogene/2.png";
import img30 from "../public/images/hogene/3-0.png";
import img31 from "../public/images/hogene/3-1.png";
import img4 from "../public/images/hogene/4.png";
import img40 from "../public/images/hogene/4-0.png";

import img5 from "../public/images/hogene/5.png";
import img50 from "../public/images/hogene/5-0.png";

import img60 from "../public/images/hogene/6-0.png";
import img61 from "../public/images/hogene/6-1.png";

import img7 from "../public/images/hogene/7.png";
import img70 from "../public/images/hogene/7-0.png";

import img20 from "../public/images/hogene/2-0.png";
import iconLogo from "../public/images/icons/logo.png";
import icon2 from "../public/images/icons/2.png";
import icons17 from "../public/images/icons/17.png";
import icons18 from "../public/images/icons/18.png";
import logob from "../public/images/icons/logo-b.png";

import img8 from "../public/images/hogene/8.png";
import { useState } from "react";

const features = ["重力转向 防侧翻", "车杆座椅 毫米级调节", "座椅可拆折叠", "200斤超强承重", "TPR材质 安全环保", "加宽车轮 不震荡"];
const features2 = ["高景观、大视野", "双向推行，双向脚踏", "环形设计，360度透气", "3档可调，单手可推", "秒折叠 真便携", "金字塔结构、稳固不震荡"];

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <header className="h-[74px] md:h-[100px] lg:h-[124px] bg-[#164c9f] overflow-hidden relative text-center align-middle">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 md:scale-75  lg:scale-100">
          <Image src={imgLogo} />
        </div>
        <div className="absolute -top-32 left-[10%] scale-50 md:scale-75  lg:scale-100">
          <Image src={imgIcon} />
        </div>
        <div className="absolute -bottom-[85px] right-[10%] scale-50 md:scale-75 lg:scale-100">
          <Image src={imgIcon} />
        </div>
      </header>
      <main className="bg-[#fafaf9]">
        <Image src={img0} />
        <div className="px-[6%] m-auto max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 items-start py-20">
            <div className="self-stretch flex flex-col justify-between items-center mb-6 sm:mb-0 sm:items-start pl-8 min-h-[400px]">
              <Image src={iconLogo} />
              <h1 className="text-4xl font-black">出趣玩耍吧</h1>
              <p className="text-lg leading-8 whitespace-nowrap">
                出趣玩耍吧！不要让孩子隔着屏幕看世界。
                <br />
                以自然为师，以草木为友，大自然会给
                <br />
                孩子一个更为广阔辽远的世界，
                <br />
                看过世界的孩子更强大
              </p>
              <div className="relative">
                <div className=" absolute -top-9 -right-10">
                  <Image src={icon2} />
                </div>
                <button className="appearance-none w-[180px] h-[50px] text-white bg-blue-800 hover:bg-blue-700 rounded-full text-lg">了解更多</button>
              </div>
            </div>
            <Image src={img1} />
          </div>
          <div className="relative">
            <div className=" absolute top-20 left-20 z-10">
              <Image src={img20} />
            </div>
            <Image src={img2} />
          </div>
          {/* --- */}
          <h1 className="text-center text-3xl font-black text-yellow-500 tracking-wider my-10">
            <span className="text-[#164fa2]">儿童成长型</span>滑板车
          </h1>
          <div className="grid grid-cols-2 px-16">
            <div className="flex flex-col items-start">
              <div className="pb-2 relative">
                <div className="absolute z-10 top-[30%] -right-16">
                  <Image width={150} height={(150 * 79) / 205} src={icons17} />
                </div>
                <Image width={400} height={(316 * 400) / 484} src={img30} />
              </div>
              <div>
                <Image width={400} height={(341 * 400) / 499} src={img31} />
              </div>
            </div>
            <div className="text-right pl-16">
              <h2 className="text-2xl font-bold py-4">亮点</h2>
              <ul className="text-xl font-400 divide-y divide-[#eac887] mb-10">
                {features.map((item) => (
                  <li
                    key={item}
                    className="py-2 md:py-4 after:content-[''] after:inline-block after:w-2 after:h-2 after:bg-blue-800 after:ml-8 after:align-middle after:relative after:-top-1 after:rounded-full"
                  >
                    {item}
                  </li>
                ))}
                <div></div>
              </ul>
              <button className="appearance-none w-[160px] h-[40px] text-white bg-blue-800 hover:bg-blue-700 rounded-full text-base">点击购买</button>
            </div>
          </div>
          {/* --- */}
          <div className="relative py-4">
            <div className=" absolute top-20 left-20 z-10">
              <Image src={img40} />
            </div>
            <Image src={img4} />
          </div>
          {/* --- */}
          <h1 className="text-center text-3xl font-black text-yellow-500 tracking-wider my-10">
            <span className="text-[#164fa2]">关注孩子</span>不“关住”孩子
          </h1>
          <ImgSlider />
          <div className="relative pt-12">
            <div className=" absolute top-20 left-20 z-10">
              <Image src={img50} />
            </div>
            <Image src={img5} />
          </div>

          {/* --- */}
          <h1 className="text-center text-3xl font-black text-yellow-500 tracking-wider my-10">
            <span className="text-[#164fa2]">高颜值 . </span>溜娃神器
          </h1>
          <div className="grid grid-cols-2 px-16">
            <div className="flex flex-col items-start">
              <div className="pb-2 relative">
                <div className="absolute z-10 top-[30%] -right-16">
                  <Image width={150} height={(150 * 79) / 205} src={icons18} />
                </div>
                <Image width={400} height={(316 * 400) / 484} src={img60} />
              </div>
              <div>
                <Image width={400} height={(341 * 400) / 499} src={img61} />
              </div>
            </div>
            <div className="text-right pl-16">
              <h2 className="text-2xl font-bold py-4">亮点</h2>
              <ul className="text-xl font-400 divide-y divide-[#eac887] mb-10">
                {features.map((item) => (
                  <li
                    key={item}
                    className="py-2 md:py-4 after:content-[''] after:inline-block after:w-2 after:h-2 after:bg-blue-800 after:ml-8 after:align-middle after:relative after:-top-1 after:rounded-full"
                  >
                    {item}
                  </li>
                ))}
                <div></div>
              </ul>
              <button className="appearance-none w-[160px] h-[40px] text-white bg-blue-800 hover:bg-blue-700 rounded-full text-base">点击购买</button>
            </div>
          </div>
          <div className="relative pt-12">
            <div className=" absolute top-20 left-20 z-10">
              <Image src={img70} />
            </div>
            <Image src={img7} />
          </div>
          <div className="relative pt-12 text-center">
            <h1 className="text-center text-3xl font-black text-green-800 tracking-wider my-10">
              <span className="text-[#164fa2]">天生快乐HO+ </span>GENE自然基因
            </h1>
            <Image src={img8} />
            <p className="py-6">
              走出“城市水泥盒子”，带着孩子去亲近自然，到户外去感受世界，从而培养孩子的好奇心，
              <br />
              独立，社交力，勇气，得到心灵的收获与成长，变得更加强大
            </p>
            <button className="appearance-none w-[180px] h-[50px] text-white bg-blue-800 hover:bg-blue-700 rounded-full text-lg">了解详情</button>
          </div>
        </div>
        {/* footer */}
        <div className="bg-blue-800 h-80 mt-9 grid grid-cols-4 text-white text-center items-center">
          <div className="grid grid-rows-4 grid-flow-col gap-8">
            <span>趣发现</span>
            <span>趣尝试</span>
            <span>趣握手</span>
            <span>趣挑战</span>
          </div>
          <div className="col-span-2">
            <div>
              <Image src={logob} />
            </div>
            <h1 className="text-2xl my-6">出趣玩耍吧，看过世界的孩子更强大！</h1>
            <h2 className="text-lg">欣赏更多故事</h2>
          </div>
          <div className="grid grid-rows-3 grid-flow-col gap-8">
            <span>关于我们</span>
            <span>产品</span>
            <span>联系我们</span>
          </div>
        </div>
      </main>
    </Layout>
  );
}
