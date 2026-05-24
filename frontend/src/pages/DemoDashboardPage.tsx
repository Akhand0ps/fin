import React from 'react';
import { DashboardMockup } from '../components/DashboardMockup';
import { Button } from '../components/Button';
import { ArrowLeft, UserPlus, Info } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const DemoDashboardPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col items-center p-4 md:p-8 pt-8">
      {/* Top action bar */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-7xl flex flex-col sm:flex-row justify-between items-center mb-8 gap-4"
      >
        <Button variant="outline" onClick={() => navigate('/')} className="bg-white">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Website
        </Button>
        
        <div className="flex items-center gap-3 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-100 text-sm font-medium">
          <Info className="w-4 h-4" />
          Interactive Demo Sandbox (Read-Only)
        </div>

        <Button onClick={() => navigate('/register')} className="shadow-lg shadow-neutral-900/20">
          <UserPlus className="w-4 h-4 mr-2" />
          Create Free Account
        </Button>
      </motion.div>

      {/* The Demo Sandbox (Mockup stretched to fill more space) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="w-full max-w-7xl flex-1 flex flex-col min-h-[700px] drop-shadow-2xl"
      >
        {/* We use a wrapper to override the hardcoded height in DashboardMockup if needed, 
            but DashboardMockup handles its own layout gracefully. */}
        <div className="w-full h-full [&>div]:h-full [&>div]:min-h-[700px] [&>div]:rounded-3xl flex-1">
           <DashboardMockup />
        </div>
      </motion.div>
    </div>
  );
};
