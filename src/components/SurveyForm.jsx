
import TextField from './TextField';
import TextArea from './TextArea';
import RadioGroup from './RadioGroup';

const SurveyForm = ({ 
  formData, 
  errors, 
  movies, 
  onInputChange, 
  onMovieSelect, 
  onSubmit, 
  onReset 
}) => {
  return (
    <div className="bg-white rounded-[20px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] p-10 md:p-8 sm:p-5 max-w-[600px] w-full animate-slide-up mx-2.5">
      <h1 className="text-center text-gray-700 mb-8 text-3xl md:text-2xl sm:text-xl font-semibold">แบบสำรวจความชอบภาพยนตร์</h1>
      
      <form onSubmit={onSubmit} noValidate className="flex flex-col gap-6">
        <TextField
          label="ชื่อ"
          id="name"
          value={formData.name}
          onChange={(e) => onInputChange('name', e.target.value)}
          error={errors.name}
          required={true}
          placeholder="กรุณาใส่ชื่อของคุณ"
        />

        <TextField
          label="อีเมล"
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => onInputChange('email', e.target.value)}
          error={errors.email}
          required={true}
          placeholder="example@email.com"
        />

        <RadioGroup
          label="เลือกหนังที่คุณชอบ"
          options={movies}
          selectedValue={formData.selectedMovie}
          onChange={(e) => onMovieSelect(e.target.value)}
          error={errors.selectedMovie}
          required={true}
          name="movie"
        />

        <TextArea
          label="ความคิดเห็น"
          id="comment"
          value={formData.comment}
          onChange={(e) => onInputChange('comment', e.target.value)}
          placeholder="บอกความคิดเห็นของคุณเกี่ยวกับหนังที่เลือก..."
        />

        <div className="flex gap-4 mt-5 sm:flex-col">
          <button type="submit" className="flex-1 py-3 px-6 rounded-[10px] text-base font-semibold cursor-pointer transition-all duration-300 bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(102,126,234,0.3)]">
            ส่งแบบสำรวจ
          </button>
          <button type="button" onClick={onReset} className="flex-1 py-3 px-6 rounded-[10px] text-base font-semibold cursor-pointer transition-all duration-300 bg-gray-200 text-gray-700 hover:bg-gray-300 hover:-translate-y-0.5 hover:shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
            รีเซ็ต
          </button>
        </div>
      </form>
    </div>
  );
};

export default SurveyForm;
//export default

