import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { animation } from '@/utils/animationConfig';

interface ImageViewerProps {
  src: string;
  srcLight?: string;
  alt: string;
  children: React.ReactNode;
}

export const ImageViewer = ({ src, srcLight, alt, children }: ImageViewerProps) => {
  const [open, setOpen] = useState(false);
  const { motionAllowed } = useReducedMotion();

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>{children}</DialogPrimitive.Trigger>

      <DialogPrimitive.Portal forceMount>
        <AnimatePresence>
          {open && (
            <>
              <DialogPrimitive.Overlay asChild forceMount>
                <motion.div
                  className="fixed inset-0 z-50 bg-white/90 dark:bg-black/90"
                  initial={motionAllowed ? { opacity: 0 } : false}
                  animate={{ opacity: 1 }}
                  exit={motionAllowed ? { opacity: 0 } : undefined}
                  transition={{ duration: animation.duration.enter, ease: animation.ease.out }}
                />
              </DialogPrimitive.Overlay>

              <DialogPrimitive.Content asChild forceMount>
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 focus:outline-none">
                  <DialogPrimitive.Title className="sr-only">{alt}</DialogPrimitive.Title>

                  <DialogPrimitive.Close
                    aria-label="Close"
                    className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white transition-opacity can-hover:hover:opacity-80 dark:bg-white/20 md:right-6 md:top-6"
                  >
                    <X className="h-5 w-5" />
                  </DialogPrimitive.Close>

                  <motion.div
                    initial={motionAllowed ? { opacity: 0, scale: 0.96 } : false}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={motionAllowed ? { opacity: 0, scale: 0.96 } : undefined}
                    transition={{ duration: animation.duration.enter, ease: animation.ease.out }}
                  >
                    {srcLight ? (
                      <div className="relative">
                        <img
                          src={srcLight}
                          alt={alt}
                          className="max-h-[85dvh] max-w-[90vw] rounded-md object-contain opacity-100 dark:opacity-0"
                        />
                        <img
                          src={src}
                          alt={alt}
                          className="absolute inset-0 max-h-[85dvh] max-w-[90vw] rounded-md object-contain opacity-0 dark:opacity-100"
                        />
                      </div>
                    ) : (
                      <img
                        src={src}
                        alt={alt}
                        className="max-h-[85dvh] max-w-[90vw] rounded-md object-contain"
                      />
                    )}
                  </motion.div>
                </div>
              </DialogPrimitive.Content>
            </>
          )}
        </AnimatePresence>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
