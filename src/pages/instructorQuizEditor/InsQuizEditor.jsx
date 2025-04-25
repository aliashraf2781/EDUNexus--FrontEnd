import InsQuizHeader from '../../components/instructorQuiz/InsQuizHeader';
import InsQuizCard from '../../components/instructorQuiz/InsQuizCard';
import InsQuizFooter from '../../components/instructorQuiz/InsQuizFooter';
import InsQuizLeaderboardToggle from '../../components/instructorQuiz/InsQuizLeaderboardToggle';
import InsQuizSearchBar from '../../components/instructorQuiz/InsQuizSearchBar';
import InsQuizStatsCard from '../../components/instructorQuiz/InsQuizStatsCard';

export default function InsQuizEditor() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <InsQuizHeader />
      <div className="container mx-auto px-4 py-6">
        <InsQuizSearchBar />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <InsQuizStatsCard title="Quiz Performance" value="89%" />
          <InsQuizStatsCard title="Completed Quiz" value="50" />
          <InsQuizLeaderboardToggle />
        </div>

        <div className="flex justify-between items-center mt-10 mb-4">
          <h2 className="text-lg font-semibold text-[#FF6636]">Recent Quizzes</h2>
          <button className="text-orange-500 hover:underline">View All</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array(6).fill().map((_, i) => (
            <InsQuizCard key={i} />
          ))}
        </div>
      </div>
      <InsQuizFooter />
    </div>
  );
}
