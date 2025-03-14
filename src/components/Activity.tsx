import React from 'react';
import { Github, GitBranch, GitCommit, GitPullRequest, Code, Trophy, Star, Target } from 'lucide-react';

const Activity = () => {
  // Sample GitHub stats - replace with your actual stats
  const githubStats = {
    repos: 25,
    stars: 48,
    contributions: 782,
    commits: 1243,
    pullRequests: 87,
    issues: 42,
    streak: 32,
  };

  // Sample LeetCode stats - replace with your actual stats
  const leetcodeStats = {
    ranking: 116537,
    totalSolved: 534,
    easySolved: 119,
    mediumSolved: 349,
    hardSolved: 66,
    contestRating: 1656,
    badges: 4,
    streak: 115,
  };

  return (
    <section id="coding-activity" className="bg-white dark:bg-gray-900">
      <div className="section-container">
        <h2 className="section-title dark:text-white">Coding Activity</h2>
        <p className="section-subtitle dark:text-gray-300">
          A snapshot of my coding activity across different platforms.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {/* GitHub Stats Card */}
          <div className="card p-6 dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <Github size={28} className="text-portfolio-primary dark:text-white mr-3" />
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white">GitHub Stats</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-portfolio-secondary/30 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-portfolio-secondary dark:bg-gray-700 mr-3">
                    <GitBranch size={16} className="text-portfolio-primary dark:text-white" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Repositories</span>
                </div>
                <p className="text-2xl font-bold text-portfolio-primary dark:text-white">{githubStats.repos}</p>
              </div>
              
              <div className="p-4 bg-portfolio-secondary/30 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-portfolio-secondary dark:bg-gray-700 mr-3">
                    <GitCommit size={16} className="text-portfolio-primary dark:text-white" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Commits</span>
                </div>
                <p className="text-2xl font-bold text-portfolio-primary dark:text-white">{githubStats.commits}</p>
              </div>
              
              <div className="p-4 bg-portfolio-secondary/30 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-portfolio-secondary dark:bg-gray-700 mr-3">
                    <GitPullRequest size={16} className="text-portfolio-primary dark:text-white" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Pull Requests</span>
                </div>
                <p className="text-2xl font-bold text-portfolio-primary dark:text-white">{githubStats.pullRequests}</p>
              </div>
              
              <div className="p-4 bg-portfolio-secondary/30 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-portfolio-secondary dark:bg-gray-700 mr-3">
                    <Star size={16} className="text-portfolio-primary dark:text-white" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Stars Earned</span>
                </div>
                <p className="text-2xl font-bold text-portfolio-primary dark:text-white">{githubStats.stars}</p>
              </div>
            </div>
            
            <a 
              href="https://github.com/rajput-tarun" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full p-3 flex items-center justify-center bg-portfolio-primary hover:bg-portfolio-primary/90 text-white transition-colors dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg"
            >
              <Github size={18} className="mr-2" />
              <span className="font-medium">View GitHub Profile</span>
            </a>
          </div>
          
          {/* LeetCode Stats Card */}
          <div className="card p-6 dark:bg-gray-800">
            <div className="flex items-center mb-6">
              <Code size={28} className="text-portfolio-primary dark:text-white mr-3" />
              <h3 className="text-xl font-bold text-portfolio-primary dark:text-white">LeetCode Stats</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-portfolio-secondary/30 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-portfolio-secondary dark:bg-gray-700 mr-3">
                    <Trophy size={16} className="text-portfolio-primary dark:text-white" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Ranking</span>
                </div>
                <p className="text-2xl font-bold text-portfolio-primary dark:text-white">{leetcodeStats.ranking}</p>
              </div>
              
              <div className="p-4 bg-portfolio-secondary/30 dark:bg-gray-700/50 rounded-lg">
                <div className="flex items-center mb-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-portfolio-secondary dark:bg-gray-700 mr-3">
                    <Target size={16} className="text-portfolio-primary dark:text-white" />
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">Problems Solved</span>
                </div>
                <p className="text-2xl font-bold text-portfolio-primary dark:text-white">{leetcodeStats.totalSolved}</p>
              </div>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">Problems by Difficulty</h4>
              <div className="flex items-center mb-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-green-500 h-2.5 rounded-full" style={{ width: `${(leetcodeStats.easySolved / leetcodeStats.totalSolved) * 100}%` }}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{leetcodeStats.easySolved} Easy</span>
              </div>
              <div className="flex items-center mb-2">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: `${(leetcodeStats.mediumSolved / leetcodeStats.totalSolved) * 100}%` }}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{leetcodeStats.mediumSolved} Medium</span>
              </div>
              <div className="flex items-center">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${(leetcodeStats.hardSolved / leetcodeStats.totalSolved) * 100}%` }}></div>
                </div>
                <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">{leetcodeStats.hardSolved} Hard</span>
              </div>
            </div>
            
            <a 
              href="https://leetcode.com/u/singhtarun9162/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full p-3 flex items-center justify-center bg-portfolio-primary hover:bg-portfolio-primary/90 text-white transition-colors dark:bg-blue-600 dark:hover:bg-blue-700 rounded-lg"
            >
              <Code size={18} className="mr-2" />
              <span className="font-medium">View LeetCode Profile</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Activity; 