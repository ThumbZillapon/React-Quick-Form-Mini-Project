const TextField = ({ 
  label, 
  type = "text", 
  value, 
  onChange, 
  error, 
  required = false,
  placeholder = ""
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-semibold text-gray-800 text-base">
        {label} {required && <span className="text-red-500 ml-1">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`px-4 py-3 border-2 border-gray-200 rounded-[10px] text-base transition-all duration-300 bg-gray-50 font-inherit text-black placeholder-gray-400 focus:outline-none focus:border-[#667eea] focus:bg-white focus:shadow-[0_0_0_3px_rgba(102,126,234,0.1)] ${error ? 'border-red-500 bg-red-50' : ''}`}
      />
      {error && <div className="text-red-500 text-sm mt-1 animate-shake">{error}</div>}
    </div>
  );
};

export default TextField;
