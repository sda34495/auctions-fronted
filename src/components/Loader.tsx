const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-5 backdrop-blur-sm">
            <img src="/loader.gif" alt="Loading..." className="w-24 h-24" />
        </div>
    );
};

export default Loader;
