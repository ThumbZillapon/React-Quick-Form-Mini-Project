const SurveyResult = ({ surveyData, onStartNew }) => {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-10 md:p-8 sm:p-5 max-w-[600px] w-full text-center animate-slide-up mx-2.5">
      <h1 className="text-gray-700 mb-8 text-3xl md:text-2xl sm:text-xl font-semibold">ผลการสำรวจ</h1>
      
      <div className="bg-gray-50 rounded-[15px] p-8 mb-8 text-left">
        <div className="py-3 border-b border-gray-200 text-lg">
          <strong className="text-gray-800 mr-2">ชื่อ:</strong> {surveyData.name}
        </div>
        
        <div className="py-3 border-b border-gray-200 text-lg">
          <strong className="text-gray-800 mr-2">อีเมล:</strong> {surveyData.email}
        </div>
        
        <div className="py-3 border-b border-gray-200 text-lg">
          <strong className="text-gray-800 mr-2">ภาพยนตร์ที่เลือก:</strong> {surveyData.selectedMovie}
        </div>
        
        {surveyData.comment && (
          <div className="py-3 text-lg">
            <strong className="text-gray-800 mr-2">ความคิดเห็น:</strong> {surveyData.comment}
          </div>
        )}
      </div>
      
      <button onClick={onStartNew} className="py-3 px-6 rounded-[10px] text-base font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(102,126,234,0.3)]">
        เริ่มทำแบบสำรวจใหม่
      </button>
    </div>
  );
};

export default SurveyResult;
