import React, { useState } from 'react';

// interface Answer {
//   id: string;
//   text: string;
// }

interface Question {
    id: number;
    question: string;
    answer: string;
}

interface QuestionsAccordionProps {
  questions: Question[];
  handleEdit: (question: Question) => void;
  handleDelete: (id: number) => void;
}

const QuestionAccordion: React.FC<QuestionsAccordionProps> = ({ 
  questions, 
  handleEdit, 
  handleDelete 
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      {questions.length > 0 && (
        <div className="border-t pt-6">
          {/* <h3 className="text-lg font-semibold mb-4">Previous Questions</h3> */}
          <div className="space-y-2">
            {questions.map((question, index) => (
              <div 
                key={question.id} 
                className="border border-gray-100 shadow-md rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full bg-white p-4 flex justify-between items-center hover:bg-gray-100 transition-colors"
                  type="button"
                  aria-expanded={openIndex === index}
                >
                  <h4 className="font-medium flex gap-2 items-center text-[#003366] text-[0.8rem] text-left">
                    <span>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_11271_37738)">
                            <path d="M12 0C5.37262 0 0 5.37244 0 12C0 18.6276 5.37262 24 12 24C18.6274 24 24 18.6276 24 12C24 5.37244 18.6274 0 12 0ZM9.73491 17.756C9.73491 16.9304 10.4043 16.261 11.2299 16.261C12.0548 16.261 12.7243 16.9304 12.7243 17.756C12.7243 18.5807 12.0548 19.2505 11.2299 19.2505C10.4043 19.2505 9.73491 18.5807 9.73491 17.756ZM16.1074 10.2587C15.9389 10.7177 15.6948 11.116 15.4186 11.4472C14.8633 12.1104 14.2051 12.5122 13.6635 12.8085C13.3017 13.0042 12.9823 13.1549 12.7837 13.2665C12.6475 13.3417 12.5738 13.4047 12.5373 13.4458C12.5013 13.4892 12.4891 13.507 12.4672 13.5783C12.4544 13.6256 12.441 13.7007 12.441 13.8169C12.441 14.1389 12.441 14.4034 12.441 14.4034C12.441 14.7068 12.195 14.9532 11.8915 14.9532H10.5672C10.2637 14.9532 10.0173 14.7068 10.0173 14.4034C10.0173 14.4034 10.0173 14.1388 10.0173 13.8169C10.0173 13.5151 10.0525 13.2195 10.13 12.9368C10.2067 12.6551 10.3276 12.3875 10.482 12.1542C10.7913 11.6816 11.2105 11.3666 11.6062 11.1473C11.9531 10.9564 12.2963 10.7979 12.6148 10.6185C12.933 10.4408 13.2168 10.2478 13.4258 10.0386C13.5659 9.89916 13.6747 9.75502 13.758 9.59236C13.8675 9.37542 13.9434 9.12047 13.9451 8.73038C13.9457 8.61492 13.9124 8.46309 13.8218 8.28952C13.7315 8.11673 13.5843 7.92886 13.3875 7.7603C12.9914 7.42055 12.4105 7.17225 11.7443 7.17338C10.981 7.17609 10.47 7.35506 10.0762 7.57744C9.68433 7.80131 9.55922 8.0272 9.55922 8.0272C9.35916 8.20148 9.0622 8.20767 8.85492 8.04192L7.83727 7.22644C7.70981 7.12458 7.63467 6.97153 7.6312 6.80803C7.62825 6.64495 7.698 6.48881 7.82156 6.38152C7.82156 6.38152 8.13867 5.89261 8.87395 5.47308C9.60614 5.05158 10.5765 4.74708 11.7444 4.74984C12.692 4.74984 13.565 5.01056 14.2882 5.43708C15.0117 5.86589 15.5959 6.45633 15.9687 7.16564C16.2163 7.63786 16.3683 8.17017 16.3687 8.73033C16.3693 9.28322 16.2773 9.79959 16.1074 10.2587Z" fill="#003366"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_11271_37738">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>
                    </span>
                    Question {index + 1}
                </h4>
                  <div className="flex gap-2 ml-4">
                        <button
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            handleEdit(question);
                            // Additional scroll behavior for cases where window.scrollTo might not work
                            document.body.scrollIntoView({ 
                              behavior: 'smooth',
                              block: 'start'
                            });
                          }}
                          className="text-[#1B3664] hover:text-blue-800"
                          title='edit question'
                          type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M21.276 6.40005L11.736 15.94C10.786 16.89 7.96597 17.33 7.33597 16.7C6.70597 16.07 7.13597 13.25 8.08597 12.3L17.636 2.75002C17.8715 2.49308 18.1566 2.28654 18.4742 2.14284C18.7917 1.99914 19.1351 1.92124 19.4836 1.9139C19.832 1.90657 20.1784 1.96991 20.5017 2.10012C20.825 2.23033 21.1186 2.42473 21.3647 2.67153C21.6108 2.91833 21.8044 3.21243 21.9337 3.53609C22.063 3.85976 22.1255 4.20626 22.1172 4.55471C22.1089 4.90316 22.03 5.24635 21.8855 5.5635C21.7409 5.88065 21.5336 6.16524 21.276 6.40005Z" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13" stroke="#003366" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </  svg>

                        </button>
                        <button
                          onClick={(e: React.MouseEvent) => {
                            e.stopPropagation();
                            handleDelete(question.id);
                          }}
                          className="text-red-600 hover:text-red-800"
                          title='delete question'
                          type="button"
                        >
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M10 12V17" stroke="#D90000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M14 12V17" stroke="#D90000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M4 7H20" stroke="#D90000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 10V18C6 19.6569 7.34315 21 9 21H15C16.6569 21 18 19.6569 18 18V10" stroke="#D90000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M9 5C9 3.89543 9.89543 3 11 3H13C14.1046 3 15 3.89543 15 5V7H9V5Z" stroke="#D90000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>

                        </button>
                  </div>
                </button>
                
                <div
                  className={`transition-all duration-200 ease-in-out ${
                    openIndex === index
                      ? 'max-h-96 opacity-100'
                      : 'max-h-0 opacity-0 overflow-hidden'
                  }`}
                  role="region"
                  aria-labelledby={`question-${index}`}
                >
                  <div className="p-4 bg-white">
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-gray-700 text-[0.75rem]">{question.question}</p>

                    </div>
                    <div className="space-y-1">
                      {/* {question.answers.map((answer, ansIndex) => (
                        <div key={ansIndex} className="flex items-center gap-2  text-[0.88rem]">
                          <div className="w-4 h-4 flex-shrink-0">
                            {question.correctAnswers.includes(ansIndex) && (
                              <svg
                                className="w-4 h-4 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                            )}
                          </div>
                          <span
                            className={
                              question.correctAnswers.includes(ansIndex)
                                ? "font-medium"
                                : "text-gray-600"
                            }
                          >
                          </span>
                        </div>
                      ))} */}
                      {question.answer}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default QuestionAccordion;