import Head from 'next/head'

export const siteTitle = 'hogene滑板车 - 礼意久久品牌滑板车LiYi99'

export default function Layout({children}) {
    return (
        <div className="container mx-auto">
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="description" content="hogene是个礼意久久(liyi99)旗下高端儿童滑板车品牌, 1-3-6-8岁宝宝二合一多功能坐骑男女滑板车"/>
                <meta name="og:title" content={siteTitle}/>
                <meta name="twitter:card" content="summary_large_image"/>
            </Head>
            {children}
        </div>
    )
}
