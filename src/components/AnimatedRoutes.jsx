import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import AllTodos from '../pages/AllTodos';
import ActiveTodos from '../pages/ActiveTodos';
import CompletedTodos from '../pages/CompletedTodos';
import NotFound from '../pages/NotFound';

const pageVariants = {
  initial: { opacity: 0, x: -50 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 50 }
};

export default function AnimatedRoutes() {
  const location = useLocation();
  
  return (
    <motion.div
      key={location.key}
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
      transition={{ duration: 0.3 }}
    >
      <Routes location={location}>
        <Route path="/" element={<AllTodos />} />
        <Route path="/active" element={<ActiveTodos />} />
        <Route path="/completed" element={<CompletedTodos />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </motion.div>
  );
}