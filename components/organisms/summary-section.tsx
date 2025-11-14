"use client";
import ScrollingGallery from './ScrollingGallery';
import InfiniteGallery from './ScrollingGallery';

interface SummarySectionProps {
  className?: string;
}

export default function Summary({ className }: SummarySectionProps = {}) {
	const sampleImages = [
		{ src: '/images/forest-goblins.png', alt: 'Image 1' },
		{ src: '/images/fiery-skeletons.png', alt: 'Image 2' },
		{ src: '/images/forest-goblins.png', alt: 'Image 3' },
		{ src: '/images/fiery-skeletons.png', alt: 'Image 4' },
		{ src: '/images/forest-goblins.png', alt: 'Image 5' },
		{ src: '/images/fiery-skeletons.png', alt: 'Image 6' },
		{ src: '/images/forest-goblins.png', alt: 'Image 7' },
		{ src: '/images/fiery-skeletons.png', alt: 'Image 8' },
	];

	return (
		<div className={`h-screen relative overflow-hidden bg-black ${className}`}>
			<ScrollingGallery
				images={sampleImages}
				speed={1.2}
				zSpacing={3}
				visibleCount={12}
				falloff={{ near: 0.8, far: 14 }}
				className="h-screen w-full rounded-lg overflow-hidden"
			/>
			<div className="absolute h-screen inset-0 pointer-events-none flex items-center justify-center text-center px-3 mix-blend-exclusion text-white z-2">
				<h1 className="text-4xl md:text-7xl tracking-tight">
					<span className="italic">I create;</span> therefore I am
				</h1>
			</div>

			<div className="text-center absolute bottom-10 left-0 right-0 font-mono uppercase text-[11px] font-semibold">
				<p>Use mouse wheel, arrow keys, or touch to navigate</p>
				<p className=" opacity-60">
					Auto-play resumes after 3 seconds of inactivity
				</p>
			</div>
		</div>
	);
}
