import React from 'react'
import MySlider from '../components/Slider'
import Hero from '../components/Hero'
import ServicesGrid from '../components/Services'
import JoinUs from '../components/JoinUs'
import Courses from '../components/Courses'
import NearestCenter from '../components/NearestCenter'
import ServiceSelection from '../components/ServiceSelection'


export default function MyHome() {
  return (
    <>
    <MySlider/>
    <Hero />
    <ServicesGrid />
    <ServiceSelection />
    <JoinUs />
    <Courses />
    <NearestCenter />
    </>
  )
}