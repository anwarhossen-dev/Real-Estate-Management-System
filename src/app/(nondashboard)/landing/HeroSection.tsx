"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div className="relative h-screen">
      
      <Image
        src="/landing-call-to-action.jpg"
        alt="Rentiful Rental platform hero section"
        fill
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        >
          <div className="max-w-4xl mx-5xl">
            <h1 className="text-5xl font-bold text-white text-center mb-4">
              Find Your Perfect Rental
            </h1>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection