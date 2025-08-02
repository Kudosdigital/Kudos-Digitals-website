const AppLoader = ({ message = "Loading..." }) => {
  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center bg-[#001515] text-[#AAD468] px-6">
      <div className="w-full max-w-6xl space-y-4 animate-pulse">
        <div className="h-6 bg-[#aad46833] rounded w-1/2"></div>
        <div className="h-4 bg-[#aad46833] rounded w-1/3"></div>
        <div className="h-100 bg-[#aad46833] rounded"></div>
        <div className="h-4 bg-[#aad46833] rounded w-3/4"></div>
        <div className="h-4 bg-[#aad46833] rounded w-2/4"></div>
        <div className="h-4 bg-[#aad46833] rounded w-1/4"></div>
      </div>
      <p className="text-sm text-[#AAD468] opacity-70">{message}</p>
    </div>
  );
};

export default AppLoader;
