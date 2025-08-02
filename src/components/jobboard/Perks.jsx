const Perks = ({ icon, header, content }) => {
  return (
    <section
      className="flex flex-col items-center text-center px-5 sm:px-8"
      aria-labelledby={`perk-${header.replace(/\s+/g, "-").toLowerCase()}`}
    >
      <div className="text-[#AAD468] mb-2" aria-hidden="true">
        {icon}
      </div>

      <h3
        id={`perk-${header.replace(/\s+/g, "-").toLowerCase()}`}
        className="underline text-2xl md:text-3xl font-bold"
      >
        {header}
      </h3>

      <p className="mt-4 text-base md:text-xl font-normal max-w-md text-[#E4FADC]">
        {content}
      </p>
    </section>
  );
};

export default Perks;
