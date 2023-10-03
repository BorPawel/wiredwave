import Banner from '@/components/banner/Banner'
import HeadingText from '@/components/heading/HeadingText'
import React from 'react'
import {client} from '../sanity/lib/client'
const Home = ({bannerData}) => {
  console.log(bannerData)
  return (
    <>
      <HeadingText/>
      <Banner banner={bannerData[0]}/>
    </>
  )
}

export const getServerSideProps = async () => {

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);
 
  return{
    props: {
     bannerData
    }
  }
}
export default Home