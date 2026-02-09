import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { editImageWithGemini } from '../services/geminiService';
import { LoadingState } from '../types';

interface ImageEditorProps {
  onClose: () => void;
}

export const ImageEditor: React.FC<ImageEditorProps> = ({ onClose }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [generatedImage, setGeneratedImage] = useState<string | null>(null);
  const [prompt, setPrompt] = useState('');
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result as string;
        setSelectedImage(base64);
        setGeneratedImage(null);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleGenerate = async () => {
    if (!selectedImage || !prompt) return;

    setStatus(LoadingState.LOADING);
    try {
      const result = await editImageWithGemini(selectedImage, prompt);
      setGeneratedImage(result);
      setStatus(LoadingState.SUCCESS);
    } catch (error) {
      console.error(error);
      setStatus(LoadingState.ERROR);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
      <div className="bg-brand-800 border border-brand-700 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-brand-700 bg-brand-900">
          <div>
            <h2 className="text-xl font-semibold text-white">Vantage Studio</h2>
            <p className="text-brand-400 text-sm">Enhance your thought leadership visuals with AI.</p>
          </div>
          <button onClick={onClose} className="text-brand-400 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col md:flex-row gap-6">
          
          {/* Controls Side */}
          <div className="w-full md:w-1/3 flex flex-col gap-6">
            
            {/* Upload */}
            <div className="bg-brand-900/50 p-4 rounded-lg border border-brand-700 border-dashed text-center">
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileChange} 
                className="hidden" 
                accept="image/*"
              />
              <div className="flex flex-col items-center justify-center gap-2 py-4">
                <div className="h-10 w-10 rounded-full bg-brand-700 flex items-center justify-center">
                   <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-brand-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <button onClick={triggerFileInput} className="text-sm font-medium text-brand-200 hover:text-white underline">
                  Upload an image
                </button>
                <p className="text-xs text-brand-500">PNG, JPG up to 5MB</p>
              </div>
            </div>

            {/* Prompt */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-brand-300">Edit Instructions</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="e.g. Add a retro filter, make it professional, remove background clutter..."
                className="w-full bg-brand-900 border border-brand-600 rounded-md p-3 text-sm text-white focus:ring-1 focus:ring-brand-400 focus:border-brand-400 placeholder-brand-600 h-32 resize-none"
              />
            </div>

            <Button 
              onClick={handleGenerate} 
              disabled={!selectedImage || !prompt || status === LoadingState.LOADING}
              fullWidth
            >
              {status === LoadingState.LOADING ? 'Processing...' : 'Generate Edit'}
            </Button>
            
            {status === LoadingState.ERROR && (
              <p className="text-red-400 text-xs mt-2 text-center">Something went wrong. Please try again.</p>
            )}

          </div>

          {/* Preview Side */}
          <div className="w-full md:w-2/3 bg-brand-900 rounded-lg border border-brand-700 flex flex-col items-center justify-center p-4 min-h-[400px]">
            {generatedImage ? (
               <div className="relative w-full h-full flex flex-col items-center">
                  <span className="absolute top-2 left-2 bg-black/50 text-xs px-2 py-1 rounded text-white">Edited Result</span>
                  <img src={generatedImage} alt="Edited result" className="max-h-full max-w-full object-contain rounded" />
               </div>
            ) : selectedImage ? (
              <div className="relative w-full h-full flex flex-col items-center">
                 <span className="absolute top-2 left-2 bg-black/50 text-xs px-2 py-1 rounded text-white">Original</span>
                 <img src={selectedImage} alt="Original upload" className="max-h-full max-w-full object-contain rounded" />
              </div>
            ) : (
              <div className="text-brand-600 flex flex-col items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mb-4 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
                <p>Upload an image to start editing</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

