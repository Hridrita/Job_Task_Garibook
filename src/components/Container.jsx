
const Container = ({ children, className = "" }) => {
  return (
    <div className="px-6 md:px-12">
      <div className={`max-w-350 mx-auto ${className}`}>
        {children}
      </div>
    </div>
  );
};

export default Container;