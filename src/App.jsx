import { useState } from 'react';
import { movies } from './constants/movies';
import { validateForm } from './utils/validation';
import SurveyForm from './components/SurveyForm';
import SurveyResult from './components/SurveyResult';

function App() {
  // Form data state - related data grouped together
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    selectedMovie: '',
    comment: ''
  });

  // UI state - separated from data state
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const handleMovieSelect = (movieTitle) => {
    setFormData(prev => ({
      ...prev,
      selectedMovie: movieTitle
    }));
    
    // Clear error when user selects a movie
    if (errors.selectedMovie) {
      setErrors(prev => ({
        ...prev,
        selectedMovie: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const trimmedData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      selectedMovie: formData.selectedMovie,
      comment: formData.comment.trim()
    };

    const validationErrors = validateForm(trimmedData);
    
    if (Object.keys(validationErrors).length === 0) {
      setFormData(trimmedData);
      setIsSubmitted(true);
      setErrors({});
    } else {
      setErrors(validationErrors);
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      selectedMovie: '',
      comment: ''
    });
    setErrors({});
  };

  const handleStartNew = () => {
    setIsSubmitted(false);
    handleReset();
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-5 sm:p-2.5">
      {!isSubmitted ? (
        <SurveyForm
          formData={formData}
          errors={errors}
          movies={movies}
          onInputChange={handleInputChange}
          onMovieSelect={handleMovieSelect}
          onSubmit={handleSubmit}
          onReset={handleReset}
        />
      ) : (
        <SurveyResult
          surveyData={formData}
          onStartNew={handleStartNew}
        />
      )}
    </div>
  );
}

export default App;
