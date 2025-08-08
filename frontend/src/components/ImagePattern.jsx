const ImagePattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-base-200">
        <div className="max-w-md text-center">
            <div className="grid grid-cols-5 gap-3 mb-8">
                {[...Array(15)].map((_, i) => (
                <div
                    key={i}
                    className={`aspect-square rounded-xl bg-primary/30 ${
                    i % 2 === 1 ? "animate-pulse" : ""
                    }`}
                />
                ))}
            </div>
            <h2 className="text-2xl font-bold mb-4">{title}</h2>
            <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
};
  
export default ImagePattern;