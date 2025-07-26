import { motion } from 'framer-motion';
import { Routes, Route, useLocation } from 'react-router-dom';
import AllTodos from '../pages/AllTodos';
import ActiveTodos from '../pages/ActiveTodos';
import CompletedTodos from '../pages/CompletedTodos';
import NotFound from '../pages/NotFound';
import ProtectedRoute from './ProtectedRoute';
import Login from '../pages/Login';

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
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute>
            <AllTodos />
          </ProtectedRoute>
          } />
        <Route path="/active" element={
          <ProtectedRoute>
            <ActiveTodos />
          </ProtectedRoute>
        } />
        <Route path="/completed" element={
          <ProtectedRoute>
            <CompletedTodos />
          </ProtectedRoute>
        } />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </motion.div>
  );
}