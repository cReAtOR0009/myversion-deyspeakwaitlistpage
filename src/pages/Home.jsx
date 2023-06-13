import '../App.css'
import Navbar from "../components/navbar"
import Main from "../components/Main"
import Footer from "../components/Footer"
import { Outlet } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <Main />
      <Footer />
    </>
  )
}

