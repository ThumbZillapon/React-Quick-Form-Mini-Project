const RadioGroup = ({ 
  label, 
  options, 
  selectedValue, 
  onChange, 
  error, 
  required = false 
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-800 text-base">
        {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex flex-col gap-3 mt-2">
        {options.map((option) => (
          <label key={option.title} className="flex items-center gap-3 px-4 py-3 sm:px-3 sm:py-2.5 border-2 border-gray-200 rounded-[10px] cursor-pointer transition-all duration-300 bg-gray-50 hover:border-[#667eea] hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            <input
              type="radio"
              name="movie"
              value={option.title}
              checked={selectedValue === option.title}
              onChange={onChange}
              className="w-[18px] h-[18px] accent-[#667eea] cursor-pointer"
            />
            <span className="text-base sm:text-sm text-gray-800 flex-1">
              {option.title} ({option.year}) - {option.director}
            </span>
          </label>
        ))}
      </div>
      {error && <div className="text-red-500 text-sm mt-1 animate-shake">{error}</div>}
    </div>
  );
};

export default RadioGroup;
