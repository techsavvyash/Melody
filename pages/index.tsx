import Head from 'next/head'
import Image from 'next/image'
import GradientLayout from '../components/gradientLayout'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <GradientLayout color="green" subtitle="profile" title ="Yash Mittal" description ="15 public playlists" roundImage
    image={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyzEWAgI0lRb2AKHZ6noIb6iMoAKYYO2-0xjyxtWVxKBh0SiCXc_wrustmY11CYC3RTSU&usqp=CAU"}>
      <div>HOME PAGE</div>Home page
    </GradientLayout>
  )
}

export default Home;



