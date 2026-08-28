import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FileText, X, ExternalLink, ZoomIn, ZoomOut } from 'lucide-react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const GOOGLE_DRIVE_FOLDER_URL = "https://drive.google.com/drive/folders/1dM8yDN-58bzSawGGlL5vdlrqLosaQage?usp=sharing";

interface ProjectConfig {
  id: number;
  title: string;
  pdf: string;
}

const projects: ProjectConfig[] = [
  { id: 1, title: "PROJECT 1", pdf: "/projects/project-1.pdf" },
  { id: 2, title: "PROJECT 2", pdf: "/projects/project-2.pdf" },
  { id: 3, title: "PROJECT 3", pdf: "/projects/project-3.pdf" },
  { id: 4, title: "PROJECT 4", pdf: "/projects/project-4.pdf" },
  { id: 5, title: "PROJECT 5", pdf: "/projects/project-5.pdf" },
  { id: 6, title: "PROJECT 6", pdf: "/projects/project-6.pdf" },
];

function usePdfLoader(url: string) {
  const [status, setStatus] = useState<'checking' | 'valid' | 'missing' | 'invalid'>('checking');
  const [diagnostic, setDiagnostic] = useState<{status?: number, contentType?: string | null, error?: any}>({});

  useEffect(() => {
    let mounted = true;
    setStatus('checking');
    
    async function checkPdf() {
      try {
        const response = await fetch(url, { method: 'HEAD' });
        
        if (!response.ok) {
           if (response.status === 404) {
              if (mounted) {
                 setStatus('missing');
                 setDiagnostic({ status: response.status });
              }
              console.warn("PDF LOAD WARNING (Missing):", { pdfUrl: url, status: response.status });
              return;
           }
           if (mounted) {
              setStatus('invalid');
              setDiagnostic({ status: response.status });
           }
           console.warn("PDF LOAD WARNING (HTTP Error):", { pdfUrl: url, status: response.status });
           return;
        }
        
        const contentType = response.headers.get('content-type');
        if (!contentType || !contentType.toLowerCase().includes('pdf')) {
           const isHtml = contentType?.toLowerCase().includes('text/html');
           if (mounted) {
             setStatus(isHtml ? 'missing' : 'invalid');
             setDiagnostic({ status: response.status, contentType });
           }
           console.warn(`PDF LOAD WARNING (${isHtml ? 'Missing/SPA Fallback' : 'Invalid Content-Type'}):`, { pdfUrl: url, status: response.status, contentType });
           return;
        }

        if (mounted) {
           setStatus('valid');
           setDiagnostic({ status: response.status, contentType });
        }
      } catch (err) {
         if (mounted) {
           setStatus('invalid');
           setDiagnostic({ error: String(err) });
         }
         console.warn("PDF LOAD WARNING (Network/Fetch):", { pdfUrl: url, error: err });
      }
    }
    
    checkPdf();
    
    return () => { mounted = false; };
  }, [url]);

  return { status, diagnostic };
}

function PdfThumbnail({ file }: { file: string }) {
  const { status } = usePdfLoader(file);
  if (status !== 'valid') return null;

  return (
    <Document file={file} loading={null} error={null}>
      <Page 
        pageNumber={1} 
        width={600} 
        renderTextLayer={false} 
        renderAnnotationLayer={false} 
      />
    </Document>
  );
}

function PdfModalViewer({ file, title }: { file: string, title: string }) {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [scale, setScale] = useState<number>(1.0);
  const [error, setError] = useState<boolean>(false);
  const { status, diagnostic } = usePdfLoader(file);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
    setError(false);
  }

  const prevPage = () => setPageNumber(p => Math.max(1, p - 1));
  const nextPage = () => setPageNumber(p => Math.min(numPages || 1, p + 1));

  if (status === 'checking') {
     return (
       <div className="flex-1 flex items-center justify-center bg-[#323639]">
         <div className="text-white/50 text-sm animate-pulse font-bold tracking-widest uppercase">Checking Document...</div>
       </div>
     );
  }

  if (status === 'missing') {
     return (
       <div className="flex-1 flex flex-col items-center justify-center bg-[#323639] text-center p-6">
         <FileText className="w-16 h-16 mb-6 opacity-30 text-white" />
         <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">PDF NOT FOUND</h3>
         <p className="text-electric-blue font-bold tracking-widest text-sm mb-4">{title}</p>
         <p className="text-slate-400 max-w-md mx-auto mb-8">The PDF file for this project has not been added yet.</p>
         {/* Dev Diagnostic */}
         {(import.meta as any).env?.DEV && (
           <div className="mt-8 p-4 bg-navy-950 border border-red-500/30 rounded-xl text-left text-xs font-mono text-slate-300 max-w-lg w-full">
             <div className="text-red-400 font-bold mb-2">DEVELOPMENT DIAGNOSTIC</div>
             <div>PDF URL: {file}</div>
             <div>Status: {diagnostic.status || 'Unknown'}</div>
           </div>
         )}
       </div>
     );
  }

  if (status === 'invalid') {
     return (
       <div className="flex-1 flex flex-col items-center justify-center bg-[#323639] text-center p-6">
         <X className="w-16 h-16 mb-6 opacity-30 text-white" />
         <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">INVALID PDF</h3>
         <p className="text-slate-400 max-w-md mx-auto mb-8">This project file could not be read.</p>
         <a href={file} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-white/5 border border-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest hover:bg-white/10 transition-colors">
           Try opening the raw file
         </a>
         {/* Dev Diagnostic */}
         {(import.meta as any).env?.DEV && (
           <div className="mt-8 p-4 bg-navy-950 border border-orange-500/30 rounded-xl text-left text-xs font-mono text-slate-300 max-w-lg w-full">
             <div className="text-orange-400 font-bold mb-2">DEVELOPMENT DIAGNOSTIC</div>
             <div>PDF URL: {file}</div>
             <div>Status: {diagnostic.status || 'Unknown'}</div>
             <div>Content-Type: {diagnostic.contentType || 'Unknown'}</div>
             {diagnostic.error && <div>Error: {diagnostic.error}</div>}
           </div>
         )}
       </div>
     );
  }

  return (
     <div className="flex-1 w-full flex flex-col relative bg-[#323639] overflow-hidden">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-4 px-4 py-3 bg-navy-950 border-b border-white/10 z-10 shrink-0">
           
           <div className="flex items-center gap-2">
             <button 
               onClick={prevPage} 
               disabled={pageNumber <= 1}
               className="px-3 py-1.5 text-xs font-bold tracking-widest text-white/70 hover:text-white rounded hover:bg-white/10 transition-colors disabled:opacity-30 uppercase"
             >
               Prev
             </button>
             <span className="text-xs font-medium text-slate-300 tracking-widest uppercase w-24 text-center">
                {numPages ? `Page ${pageNumber} / ${numPages}` : (error ? 'ERROR' : 'LOADING')}
             </span>
             <button 
               onClick={nextPage} 
               disabled={pageNumber >= (numPages || 1)}
               className="px-3 py-1.5 text-xs font-bold tracking-widest text-white/70 hover:text-white rounded hover:bg-white/10 transition-colors disabled:opacity-30 uppercase"
             >
               Next
             </button>
           </div>

           <div className="flex items-center gap-2 ml-auto">
              <button onClick={() => setScale(s => Math.max(0.5, s - 0.2))} className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors" aria-label="Zoom Out">
                 <ZoomOut className="w-4 h-4" />
              </button>
              <span className="text-xs font-bold text-white/80 w-12 text-center tracking-wider">{Math.round(scale * 100)}%</span>
              <button onClick={() => setScale(s => Math.min(3, s + 0.2))} className="p-2 text-white/70 hover:text-white rounded-lg hover:bg-white/10 transition-colors" aria-label="Zoom In">
                 <ZoomIn className="w-4 h-4" />
              </button>
           </div>
        </div>

        {/* PDF Area */}
        <div className="flex-1 overflow-auto flex flex-col items-center p-4 md:p-8 bg-[#323639]">
           <Document
             file={file}
             onLoadSuccess={onDocumentLoadSuccess}
             onLoadError={() => setError(true)}
             loading={<div className="text-white/50 text-sm mt-20 animate-pulse font-bold tracking-widest uppercase">Loading Document...</div>}
             error={
                <div className="flex flex-col items-center justify-center text-slate-400 mt-20 text-center">
                   <FileText className="w-12 h-12 mb-4 opacity-50" />
                   <h3 className="text-xl font-bold text-white mb-2 uppercase tracking-widest">INVALID PDF</h3>
                   <p className="mb-6 text-sm">This project file could not be read.</p>
                   <a href={file} target="_blank" rel="noopener noreferrer" className="px-6 py-3 bg-electric-blue/10 border border-electric-blue/20 rounded-full text-xs font-bold text-electric-blue uppercase tracking-widest hover:bg-electric-blue hover:text-navy-900 transition-colors">
                     Try opening the PDF in a new tab
                   </a>
                   {(import.meta as any).env?.DEV && (
                     <div className="mt-8 p-4 bg-navy-950 border border-orange-500/30 rounded-xl text-left text-xs font-mono text-slate-300 max-w-lg w-full">
                       <div className="text-orange-400 font-bold mb-2">DEVELOPMENT DIAGNOSTIC</div>
                       <div>PDF URL: {file}</div>
                       <div>Status: {diagnostic.status || 'Unknown'}</div>
                       <div>Content-Type: {diagnostic.contentType || 'Unknown'}</div>
                     </div>
                   )}
                </div>
             }
           >
             {!error && numPages && (
               <div className="relative group shadow-2xl">
                 <Page 
                   pageNumber={pageNumber} 
                   scale={scale} 
                   className="bg-white" 
                   renderTextLayer={true} 
                   renderAnnotationLayer={true}
                 />
               </div>
             )}
           </Document>
        </div>
     </div>
  );
}

export default function ProjectPage() {
  const [selectedPdf, setSelectedPdf] = useState<ProjectConfig | null>(null);

  // Handle ESC key and body scroll lock
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedPdf(null);
      }
    };

    if (selectedPdf) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedPdf]);

  return (
    <div className="pt-32 pb-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px bg-electric-blue w-12" />
            <h2 className="text-electric-blue font-bold tracking-[0.2em] text-sm uppercase">Portfolio</h2>
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Projects
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed">
            A curated selection of my latest work. Click on any project to view the complete PDF documentation.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 mb-20">
          {projects.map((project, idx) => (
            <motion.button
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              onClick={() => setSelectedPdf(project)}
              className="group relative flex flex-col text-left rounded-3xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-electric-blue/30 transition-all overflow-hidden h-[300px] sm:h-[350px] md:h-[400px] focus:outline-none focus:ring-2 focus:ring-electric-blue"
              aria-label={`View ${project.title}`}
            >
              {/* PDF Preview Area */}
              <div className="relative flex-1 w-full bg-navy-950 overflow-hidden flex items-center justify-center">
                {/* Fallback state behind the iframe */}
                <div className="absolute inset-0 z-0 opacity-50 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-slate-600">
                  <FileText className="w-12 h-12 mb-4 opacity-50" />
                  <span className="text-xs font-bold tracking-widest uppercase text-center px-4">Preview Loading / Unavailable</span>
                </div>
                
                {/* Native PDF.js Thumbnail */}
                <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10 opacity-90 group-hover:opacity-100 transition-opacity bg-white overflow-hidden">
                  <PdfThumbnail file={project.pdf} />
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-navy-900/40 opacity-0 group-hover:opacity-100 transition-opacity z-20 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="flex items-center gap-2 text-electric-blue font-bold tracking-widest text-sm bg-navy-900/95 px-6 py-3 rounded-full border border-electric-blue/30 transform translate-y-4 group-hover:translate-y-0 transition-all shadow-xl">
                     <ZoomIn className="w-5 h-5" />
                     CLICK TO PREVIEW
                   </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 border-t border-white/10 bg-navy-900 z-30 relative shrink-0">
                 <div className="text-xs font-bold tracking-widest text-electric-blue mb-2 uppercase">Project {project.id}</div>
                 <h3 className="text-xl font-bold text-white group-hover:text-electric-blue transition-colors">{project.title}</h3>
              </div>
            </motion.button>
          ))}
        </div>

        {/* CTA Button */}
        <div className="flex justify-center">
          <a
            href={GOOGLE_DRIVE_FOLDER_URL}
            target="_self"
            className="group relative inline-flex items-center gap-4 px-10 py-5 bg-electric-blue text-navy-900 font-bold tracking-[0.2em] text-sm uppercase rounded-full overflow-hidden transition-all hover:bg-white hover:shadow-[0_0_40px_rgba(0,229,255,0.4)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-navy-900 focus:ring-white"
          >
            VIEW MORE PROJECTS
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
          </a>
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedPdf && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-0 md:p-8 bg-navy-950/95 backdrop-blur-xl"
            onClick={() => setSelectedPdf(null)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            {/* PDF Container */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              className="relative w-full h-full max-w-6xl bg-navy-900 md:rounded-2xl overflow-hidden border-x-0 md:border-x border-y border-white/10 shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-4 md:p-6 border-b border-white/10 bg-white/[0.02] shrink-0">
                <div className="flex flex-col gap-1 pr-4">
                  <h2 id="modal-title" className="text-base md:text-lg font-bold text-white tracking-widest line-clamp-1">{selectedPdf.title}</h2>
                  <a 
                    href={selectedPdf.pdf} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-[10px] md:text-xs font-bold tracking-widest text-electric-blue hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span>OPEN IN NEW TAB</span>
                    <ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
                  </a>
                </div>
                {/* Close Button */}
                <button
                  className="shrink-0 text-white/50 hover:text-white bg-white/5 hover:bg-white/10 p-2 md:p-3 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => setSelectedPdf(null)}
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 md:w-6 md:h-6" />
                </button>
              </div>

              {/* Native PDF.js Viewer */}
              <PdfModalViewer file={selectedPdf.pdf} title={selectedPdf.title} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
