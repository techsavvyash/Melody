import Head from 'next/head'
//import Image from 'next/image'
import GradientLayout from '../components/gradientLayout'
import styles from '../styles/Home.module.css'
import prisma from "../lib/prisma"
import { artistsData } from '../prisma/songsData'
import { Text, Box, Flex } from '@chakra-ui/layout'
import { Image } from '@chakra-ui/react'

const Home = ({artists}) => {
  return (
    <GradientLayout color="purple" subtitle="profile" title ="Yash Mittal" description ="15 public playlists" roundImage
    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzEWAgI0lRb2AKHZ6noIb6iMoAKYYO2-0xjyxtWVxKBh0SiCXc_wrustmY11CYC3RTSU&usqp=CAU"}>
      <Box color = "white" paddingX ="40px">
        <Box marginBottom = "40px">
        <Text fontSize ="2xl" fontWeight = "bold">
          Top artists this month</Text>
        <Text fontSize ="md">only visible to you</Text>
        </Box>
      </Box>
      <Flex>
        {artists.map((artist) => (
          <Box paddingX = "10px" width="20%">
          <Box bg ="gray.900" borderRadius="4px" padding ="15px" key={artist.name}>
             <Image src= "https://placekitten.com/300/300" borderRadius="100%" />
          <Box marginTop="20px">
            <Text color="white" fontSize="large"> {artist.name} </Text>
            <Text color="white" fontSize="x-small"> Artist </Text>
          </Box>
          </Box>
          </Box>
        ))}
      </Flex>
    </GradientLayout>
  )
}



export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany({
  })

  console.log(artists)

  return {
    props: { artists },
  }
}

export default Home;



