import React, { useState } from 'react';
import { 
  Bot, 
  User, 
  Send, 
  Sparkles, 
  ArrowRight, 
  CornerDownLeft, 
  CheckCircle2, 
  HelpCircle,
  Lightbulb
} from 'lucide-react';

export const AICareerAssistant: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      sender: 'user',
      text: 'Can I become a Data Analyst with my current skills?',
      time: '10:24 AM'
    },
    {
      sender: 'ai',
      text: "You're currently a 64% match for Data Analyst roles. Your strongest areas are Excel (92%) and Python (78%). Improving SQL and Power BI would significantly increase your readiness.",
      recommendation: "Recommended next step: Complete an intermediate SQL project on Window Functions.",
      time: '10:24 AM'
    }
  ]);

  const [inputVal, setInputVal] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const predefinedPrompts = [
    "How long will it take to reach 90% match?",
    "Which pays higher: Data Analyst or Business Analyst?",
    "Suggest a portfolio project for my SQL gap"
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user',
      text,
      time: '10:25 AM'
    };

    setMessages(prev => [...prev, userMsg]);
    setInputVal('');
    setIsTyping(true);

    setTimeout(() => {
      let aiReply = {
        sender: 'ai',
        text: '',
        recommendation: '',
        time: '10:25 AM'
      };

      if (text.includes("How long")) {
        aiReply.text = "At a 10 hours/week commitment, you can reach 84% readiness in ~4 weeks by completing SQL Window Functions and Power BI basics, and full 92% readiness in ~6 weeks.";
        aiReply.recommendation = "Recommended path: Start the 2-week SQL intensive track today.";
      } else if (text.includes("pays higher")) {
        aiReply.text = "In your current market (US/Remote), Business Analyst roles average $88k-$122k, while Data Analyst roles average $82k-$115k. However, Data Analyst roles offer faster transition to Machine Learning and Senior Analytics paths.";
        aiReply.recommendation = "Action: Review the dual-track roadmap to qualify for both.";
      } else if (text.includes("portfolio project")) {
        aiReply.text = "I recommend building an 'E-commerce Customer Retention & Cohort Pipeline'. It uses PostgreSQL to write CTEs and retention cohorts, analyzed in Python and surfaced in Power BI.";
        aiReply.recommendation = "Template: Project brief with dataset schema is available in your workspace.";
      } else {
        aiReply.text = `Analyzing your profile for "${text}"... Based on your high scores in Python and Excel, focusing on practical database optimization yields an immediate +8% jump in role eligibility.`;
        aiReply.recommendation = "Next step: Run the full skills assessment module.";
      }

      setMessages(prev => [...prev, aiReply]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <section className="py-24 relative overflow-hidden bg-[#070B14] border-t border-white/[0.05]">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[500px] bg-blue-600/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-semibold text-blue-400 mb-4">
            <Bot className="w-3.5 h-3.5" />
            24/7 AI Career Intelligence Copilot
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-6">
            Your AI career advisor,{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-violet-400">
              available anytime.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed">
            Get instant, context-aware answers regarding career switches, portfolio strategy, compensation benchmarks, and skill priorities.
          </p>
        </div>

        {/* Chat Console Container */}
        <div className="max-w-3xl mx-auto rounded-3xl p-6 sm:p-8 bg-gradient-to-b from-slate-900 to-[#0B1120] border border-white/[0.12] backdrop-blur-2xl shadow-2xl shadow-blue-950/40">
          
          {/* Top Chat Header */}
          <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Bot className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="font-bold text-white text-sm sm:text-base">CareerIQ Copilot</h3>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
                <p className="text-xs text-slate-400">Trained on 1.2M+ hiring outcomes & role taxonomies</p>
              </div>
            </div>
            <span className="text-[11px] font-semibold text-blue-400 bg-blue-500/10 px-2.5 py-1 rounded-full border border-blue-500/20">
              Interactive Live Demo
            </span>
          </div>

          {/* Chat Messages Log */}
          <div className="space-y-4 mb-6 min-h-[220px]">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={`flex gap-3 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender === 'ai' && (
                  <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}

                <div
                  className={`max-w-xl rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${
                    m.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-tr-none font-medium'
                      : 'bg-slate-950/70 border border-white/[0.08] text-slate-200 rounded-tl-none space-y-3'
                  }`}
                >
                  <p>{m.text}</p>

                  {m.recommendation && (
                    <div className="pt-3 border-t border-white/[0.08] flex items-start gap-2 text-xs text-blue-300 font-medium">
                      <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{m.recommendation}</span>
                    </div>
                  )}
                </div>

                {m.sender === 'user' && (
                  <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-slate-300 shrink-0">
                    <User className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-3 items-center text-xs text-slate-400">
                <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  <Sparkles className="w-4 h-4 animate-spin" />
                </div>
                <div className="p-3 rounded-2xl bg-slate-950/60 border border-white/[0.06] flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-bounce [animation-delay:0.4s]" />
                </div>
              </div>
            )}
          </div>

          {/* Quick Prompt Chips */}
          <div className="mb-4">
            <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider block mb-2">
              Try asking:
            </span>
            <div className="flex flex-wrap gap-2">
              {predefinedPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="text-xs px-3 py-1.5 rounded-xl bg-white/[0.03] hover:bg-blue-600/15 border border-white/[0.06] hover:border-blue-500/30 text-slate-300 hover:text-blue-200 transition-colors text-left"
                >
                  "{prompt}"
                </button>
              ))}
            </div>
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputVal);
            }}
            className="flex items-center gap-2 p-2 rounded-2xl bg-slate-950/80 border border-white/[0.08]"
          >
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Ask anything about your skills, careers, or roadmap..."
              className="flex-1 bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder:text-slate-500 focus:outline-none"
            />
            <button
              type="submit"
              disabled={!inputVal.trim()}
              className="p-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 disabled:opacity-40 disabled:cursor-not-allowed text-white transition-colors"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>

        </div>

      </div>
    </section>
  );
};
