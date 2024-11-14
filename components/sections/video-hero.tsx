"use client"

import { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Play, Pause } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoHero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleLoadedData = () => {
      setIsReady(true)
    }

    video.addEventListener('loadeddata', handleLoadedData)

    return () => {
      video.removeEventListener('loadeddata', handleLoadedData)
    }
  }, [])

  const togglePlay = async () => {
    if (!videoRef.current || !isReady) return

    try {
      if (isPlaying) {
        await videoRef.current.pause()
      } else {
        await videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    } catch (error) {
      console.error('Error toggling video playback:', error)
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleEnded = () => {
      setIsPlaying(false)
    }

    const handlePause = () => {
      setIsPlaying(false)
    }

    const handlePlay = () => {
      setIsPlaying(true)
    }

    video.addEventListener('ended', handleEnded)
    video.addEventListener('pause', handlePause)
    video.addEventListener('play', handlePlay)

    return () => {
      video.removeEventListener('ended', handleEnded)
      video.removeEventListener('pause', handlePause)
      video.removeEventListener('play', handlePlay)
    }
  }, [])

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative py-24 bg-black"
    >
      <div className="container mx-auto px-6">
        <div className="relative rounded-2xl overflow-hidden">
          <video
            ref={videoRef}
            className="w-full h-[600px] object-cover rounded-2xl"
            poster="https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&q=80"
            loop
            muted
            playsInline
          >
            <source src="https://player.vimeo.com/external/459389137.sd.mp4?s=956afb3c3f35fa5f4ee0b340c3f1a334be374ff4&profile_id=164&oauth2_token_id=57447761" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Button
                size="lg"
                variant="outline"
                className="rounded-full w-16 h-16 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20"
                onClick={togglePlay}
                disabled={!isReady}
              >
                {isPlaying ? (
                  <Pause className="h-8 w-8 text-white" />
                ) : (
                  <Play className="h-8 w-8 text-white ml-1" />
                )}
              </Button>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute bottom-0 left-0 right-0 p-8"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Experience the Future of Business
            </h2>
            <p className="text-lg text-gray-200 max-w-2xl">
              Watch how our platform transforms the way companies operate and grow in the digital age.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.section>
  )
}