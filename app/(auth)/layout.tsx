import { SparklesCore } from "@/components/ui/sparkles";

const Layout = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex items-center justify-center min-h-screen w-full bg-primary-50 bg-dotted-pattern bg-cover bg-fixed bg-center">
			{/* <div className="w-full absolute inset-0 h-screen">
				<SparklesCore
					id="tsparticlesfullpage"
					background="transparent"
					minSize={0.6}
					maxSize={1.4}
					particleDensity={100}
					className="w-full h-full"
					particleColor="#104F19"
				/>
			</div> */}
			{children}
		</div>
	);
};

export default Layout;
