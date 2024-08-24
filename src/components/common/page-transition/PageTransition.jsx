import { AnimatePresence, motion } from 'framer-motion'
import { useLocation } from 'react-router-dom'

const PageTransition = ({ children }) => {
  /*routing dependencies */
  const pathLocation = useLocation()
  /*routing dependencies */

  return (
    <AnimatePresence>
      <div key={pathLocation.pathname}>
        <motion.div
          initial={{ opacity: 1 }}
          animate={{
            opacity: 0,
            transition: { delay: 1, duration: 0.4, ease: 'easeInOut' }
          }}
          className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
        />
        {children}
      </div>
    </AnimatePresence>
  )
}

export default PageTransition
