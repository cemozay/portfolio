"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLocale } from "next-intl";
import Button from "@/components/ui/Button";

export default function NotFound() {
  const locale = useLocale();

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Game Over Style */}
          <motion.div
            className="mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="font-pixel text-6xl sm:text-8xl text-retro-primary dark:text-retro-text-dark mb-4">
              404
            </div>
            <div className="font-pixel text-2xl sm:text-3xl text-retro-primary dark:text-retro-text-dark">
              GAME OVER
            </div>
          </motion.div>

          {/* Error Message */}
          <motion.p
            className="font-mono text-lg text-retro-text dark:text-retro-text-dark mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            The page you're looking for doesn't exist in this dimension.
            <br />
            Maybe it got lost in the pixel void?
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Link href={`/${locale}`}>
              <Button size="lg" variant="primary">
                Return to Base
              </Button>
            </Link>
            <Link href={`/${locale}/projects`}>
              <Button size="lg" variant="outline">
                Explore Projects
              </Button>
            </Link>
          </motion.div>

          {/* Retro ASCII Art */}
          <motion.div
            className="mt-12 font-mono text-xs text-retro-primary dark:text-retro-text-dark opacity-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <pre>{`
    ██████╗  ██████╗  ██████╗ 
    ██╔══██╗██╔═══██╗██╔═══██╗
    ██████╔╝██║   ██║██║   ██║
    ██╔══██╗██║   ██║██║   ██║
    ██║  ██║╚██████╔╝╚██████╔╝
    ╚═╝  ╚═╝ ╚═════╝  ╚═════╝ 
            `}</pre>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
