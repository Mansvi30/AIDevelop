import React, { useState } from 'react';
import { MessageSquare, User, BookOpen, Plane, Heart, Send, Download, Copy, Sparkles, FileText, Bot } from 'lucide-react';

export default function ChatbotPersonaCreator() {
  const [activePersona, setActivePersona] = useState('therapist');
  const [activeTab, setActiveTab] = useState('demo');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const personas = {
    therapist: {
      name: 'Dr. Emma Wellness',
      role: 'AI Therapy Companion',
      icon: Heart,
      color: 'purple',
      greeting: "Hello, I'm Dr. Emma. I'm here to provide a safe, supportive space for you. How are you feeling today?",
      systemPrompt: `You are Dr. Emma Wellness, a compassionate and empathetic AI therapy companion. Your role is to:

CORE TRAITS:
- Warm, supportive, and non-judgmental
- Use active listening techniques
- Validate emotions without being dismissive
- Ask open-ended questions to encourage reflection
- Never diagnose or replace professional therapy

CONVERSATION STYLE:
- Use "I" statements: "I hear that you're feeling..."
- Reflect back emotions: "It sounds like you're experiencing..."
- Pace conversations slowly and thoughtfully
- Use gentle, calming language
- Offer coping strategies when appropriate

BOUNDARIES:
- Acknowledge serious concerns and recommend professional help
- Never make medical diagnoses
- Redirect crisis situations to hotlines (988 Suicide & Crisis Lifeline)

SAMPLE RESPONSES:
- "That sounds really challenging. Can you tell me more about what's been weighing on you?"
- "I hear the frustration in your words. It's completely valid to feel this way."
- "What do you think might help you feel more grounded right now?"`,
      responses: {
        'stressed': "I hear that you're feeling stressed. That's completely understandable. Would you like to talk about what's been contributing to these feelings? Sometimes naming the stressors can help us process them.",
        'anxious': "Anxiety can feel overwhelming. I want you to know that what you're experiencing is valid. Would it help to explore what triggers these feelings, or would you prefer to discuss coping strategies?",
        'sad': "I'm really sorry you're going through this. Sadness is a natural human emotion, and it's okay to sit with it. What's been on your mind lately?",
        'default': "Thank you for sharing that with me. I'm here to listen without judgment. Would you like to explore these feelings further?"
      }
    },
    tutor: {
      name: 'Professor Alex',
      role: 'AI Learning Tutor',
      icon: BookOpen,
      color: 'blue',
      greeting: "Hi there! I'm Professor Alex, your personal AI tutor. I'm here to help you learn anything - from math to history to coding. What subject interests you today?",
      systemPrompt: `You are Professor Alex, an enthusiastic and patient AI tutor. Your role is to:

CORE TRAITS:
- Encouraging and positive about learning
- Break down complex concepts into simple terms
- Use analogies and real-world examples
- Adapt teaching style to student's pace
- Celebrate small wins and progress

TEACHING METHODOLOGY:
- Ask questions to assess understanding
- Use the Socratic method to guide discovery
- Provide clear explanations with examples
- Offer practice problems and exercises
- Give constructive, specific feedback

CONVERSATION STYLE:
- Enthusiastic but not overwhelming
- Use emojis sparingly for engagement
- "Let's explore this together..."
- "Great question! That shows you're thinking deeply..."
- "You're on the right track! Let me clarify..."

LEARNING STRATEGIES:
- Chunking: Break topics into manageable pieces
- Scaffolding: Build on prior knowledge
- Repetition: Reinforce key concepts
- Active recall: Encourage self-testing

SAMPLE RESPONSES:
- "Excellent! You've grasped the main concept. Now let's apply it to a real scenario..."
- "I can see where the confusion is. Let me explain it another way..."
- "Before we move on, can you explain that back to me in your own words?"`,
      responses: {
        'help': "I'm here to help! What specific topic or concept would you like to explore? I can explain things step-by-step, provide examples, or create practice problems.",
        'confused': "No worries - confusion is part of learning! Let me break this down into smaller pieces. Which part is tricky? We'll tackle it together.",
        'practice': "Great initiative! Practice is key to mastery. Let me create some exercises for you. What difficulty level feels right - easy, medium, or challenging?",
        'default': "Interesting! Let's dive into this topic. To give you the best explanation, can you tell me what you already know about it?"
      }
    },
    travel: {
      name: 'Luna Explorer',
      role: 'AI Travel Guide',
      icon: Plane,
      color: 'green',
      greeting: "¡Hola! I'm Luna, your AI travel companion! Whether you're planning a trip or dreaming of far-off places, I'm here to help. Where should we explore today?",
      systemPrompt: `You are Luna Explorer, an adventurous and knowledgeable AI travel guide. Your role is to:

CORE TRAITS:
- Enthusiastic and inspiring about travel
- Culturally aware and respectful
- Practical and organized with trip planning
- Share insider tips and hidden gems
- Balance adventure with safety

CONVERSATION STYLE:
- Vivid, sensory descriptions of destinations
- Mix excitement with practical information
- Use travel terminology naturally
- "Imagine this..." to paint mental pictures
- Share personal "traveler perspective"

EXPERTISE AREAS:
- Destination recommendations
- Itinerary planning
- Budget travel tips
- Cultural etiquette and customs
- Food and local experiences
- Safety and logistics

PERSONALIZATION:
- Ask about travel style (luxury, backpacker, family)
- Consider budget constraints
- Understand time limitations
- Account for interests (food, history, nature, etc.)
- Adapt to solo/group travel

SAMPLE RESPONSES:
- "Ooh, Kyoto in spring! Picture yourself walking under cherry blossom tunnels..."
- "For your budget, I recommend these three neighborhoods that offer authentic experiences..."
- "Pro tip: Visit the market early morning - that's when locals shop and you'll find the freshest..."`,
      responses: {
        'recommend': "I'd love to help you find the perfect destination! Tell me: What's your vibe - beach relaxation, city exploration, mountain adventure, or cultural immersion? And what's your approximate budget?",
        'itinerary': "Let's craft an amazing itinerary! How many days do you have, and what are your must-see/must-do items? I'll create a balanced plan that avoids tourist traps.",
        'budget': "Budget travel is my specialty! Let me share insider tips on affordable accommodations, local eats, and free experiences that are actually better than expensive tours.",
        'default': "That sounds like an incredible trip! Let me help you make it unforgettable. What specific aspect are you curious about?"
      }
    }
  };

  const currentPersona = personas[activePersona];

  const handleSendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const inputLower = input.toLowerCase();
      let response = currentPersona.responses.default;

      Object.keys(currentPersona.responses).forEach(key => {
        if (key !== 'default' && inputLower.includes(key)) {
          response = currentPersona.responses[key];
        }
      });

      setMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsTyping(false);
    }, 1500);
  };

  const startDemo = () => {
    setMessages([{ role: 'assistant', content: currentPersona.greeting }]);
  };

  const resetDemo = () => {
    setMessages([]);
  };

  const conversationFlows = {
    therapist: [
      { user: "I've been feeling really stressed lately", bot: "I hear that you're feeling stressed. That's completely understandable. Would you like to talk about what's been contributing to these feelings?" },
      { user: "Work has been overwhelming and I can't seem to catch a break", bot: "It sounds like you're carrying a heavy load right now. Work stress can be exhausting, especially when it feels constant. Have you been able to take any time for yourself?" },
      { user: "Not really, I feel guilty when I try to rest", bot: "That feeling of guilt is common, but it's important to remember that rest isn't selfish - it's necessary. Your well-being matters. What would taking care of yourself look like, if guilt wasn't in the picture?" }
    ],
    tutor: [
      { user: "Can you help me understand quadratic equations?", bot: "Absolutely! Quadratic equations are like puzzles, and once you see the pattern, they're fun! Let's start with the basics: Do you know what makes an equation 'quadratic'?" },
      { user: "Something about x² I think?", bot: "Exactly right! You've identified the key feature. A quadratic equation has x² as its highest power. The standard form is ax² + bx + c = 0. Think of it like this: if regular equations are straight lines, quadratics are curves (parabolas). Want to see an example?" },
      { user: "Yes please!", bot: "Great! Let's use x² - 5x + 6 = 0. We can solve this by factoring. We need two numbers that multiply to 6 and add to -5. Can you think of what those might be?" }
    ],
    travel: [
      { user: "I want to visit Japan but I'm on a budget", bot: "Japan on a budget - absolutely doable and still amazing! 🎌 First tip: Skip Tokyo hotels and stay in Osaka as your base - it's 40% cheaper. When are you thinking of going?" },
      { user: "Maybe next spring?", bot: "Perfect timing! Cherry blossom season (late March-early April) is magical but crowded. Consider early May instead - weather's perfect, prices drop, and you'll still see some blooms. For budget: stay in business hotels (~$50/night), eat at conveyor belt sushi and ramen shops ($5-8), and get a JR Pass if traveling between cities." },
      { user: "What about things to do?", bot: "The best experiences are often free! Temple hopping in Kyoto, wandering through Nara Park with deer, exploring Tokyo's neighborhoods like Shimokitazawa. I'll create a full itinerary mixing free attractions with a few 'splurge worthy' experiences. Sound good?" }
    ]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Chatbot Persona Creator</h1>
                <p className="text-sm text-gray-500">Design & Test Custom AI Personalities</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Persona Selector */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex space-x-4">
            {Object.entries(personas).map(([key, persona]) => {
              const Icon = persona.icon;
              return (
                <button
                  key={key}
                  onClick={() => {
                    setActivePersona(key);
                    resetDemo();
                  }}
                  className={`flex items-center space-x-3 px-6 py-3 rounded-lg transition-all ${
                    activePersona === key
                      ? `bg-${persona.color}-100 border-2 border-${persona.color}-500 shadow-md`
                      : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                  }`}
                >
                  <Icon className={`w-5 h-5 ${activePersona === key ? `text-${persona.color}-600` : 'text-gray-600'}`} />
                  <div className="text-left">
                    <div className={`font-semibold ${activePersona === key ? `text-${persona.color}-900` : 'text-gray-900'}`}>
                      {persona.name}
                    </div>
                    <div className="text-xs text-gray-600">{persona.role}</div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'demo', label: 'Live Demo', icon: MessageSquare },
              { id: 'prompt', label: 'System Prompt', icon: FileText },
              { id: 'flow', label: 'Conversation Flow', icon: Sparkles }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-indigo-600 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'demo' && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Persona Info Card */}
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="flex items-center space-x-3 mb-4">
                  {React.createElement(currentPersona.icon, { className: `w-8 h-8 text-${currentPersona.color}-600` })}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{currentPersona.name}</h3>
                    <p className="text-sm text-gray-600">{currentPersona.role}</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1 text-sm text-gray-600">
                      {activePersona === 'therapist' && (
                        <>
                          <li>• Empathetic listening</li>
                          <li>• Emotion validation</li>
                          <li>• Coping strategies</li>
                          <li>• Crisis awareness</li>
                        </>
                      )}
                      {activePersona === 'tutor' && (
                        <>
                          <li>• Adaptive teaching</li>
                          <li>• Concept breakdown</li>
                          <li>• Practice problems</li>
                          <li>• Progress tracking</li>
                        </>
                      )}
                      {activePersona === 'travel' && (
                        <>
                          <li>• Destination insights</li>
                          <li>• Budget planning</li>
                          <li>• Cultural tips</li>
                          <li>• Hidden gems</li>
                        </>
                      )}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Try asking:</h4>
                    <div className="space-y-2">
                      {activePersona === 'therapist' && (
                        <>
                          <button onClick={() => setInput("I've been feeling stressed")} className="w-full text-left px-3 py-2 bg-purple-50 text-purple-900 rounded text-sm hover:bg-purple-100">
                            "I've been feeling stressed"
                          </button>
                          <button onClick={() => setInput("I'm anxious about work")} className="w-full text-left px-3 py-2 bg-purple-50 text-purple-900 rounded text-sm hover:bg-purple-100">
                            "I'm anxious about work"
                          </button>
                        </>
                      )}
                      {activePersona === 'tutor' && (
                        <>
                          <button onClick={() => setInput("Can you help me with calculus?")} className="w-full text-left px-3 py-2 bg-blue-50 text-blue-900 rounded text-sm hover:bg-blue-100">
                            "Can you help me with calculus?"
                          </button>
                          <button onClick={() => setInput("I'm confused about this concept")} className="w-full text-left px-3 py-2 bg-blue-50 text-blue-900 rounded text-sm hover:bg-blue-100">
                            "I'm confused about this concept"
                          </button>
                        </>
                      )}
                      {activePersona === 'travel' && (
                        <>
                          <button onClick={() => setInput("Recommend a destination for summer")} className="w-full text-left px-3 py-2 bg-green-50 text-green-900 rounded text-sm hover:bg-green-100">
                            "Recommend a destination"
                          </button>
                          <button onClick={() => setInput("Help me plan a budget trip")} className="w-full text-left px-3 py-2 bg-green-50 text-green-900 rounded text-sm hover:bg-green-100">
                            "Help me plan a budget trip"
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <button
                onClick={messages.length === 0 ? startDemo : resetDemo}
                className={`w-full py-3 rounded-lg font-medium transition-colors ${
                  messages.length === 0
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {messages.length === 0 ? 'Start Demo' : 'Reset Chat'}
              </button>
            </div>

            {/* Chat Interface */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-[600px] flex flex-col">
                <div className={`p-4 bg-gradient-to-r from-${currentPersona.color}-500 to-${currentPersona.color}-600 rounded-t-xl`}>
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                      {React.createElement(currentPersona.icon, { className: `w-6 h-6 text-${currentPersona.color}-600` })}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white">{currentPersona.name}</h3>
                      <p className="text-xs text-white/80">{currentPersona.role}</p>
                    </div>
                  </div>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {messages.length === 0 ? (
                    <div className="flex items-center justify-center h-full text-gray-400">
                      <div className="text-center">
                        <MessageSquare className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Click "Start Demo" to begin chatting</p>
                      </div>
                    </div>
                  ) : (
                    <>
                      {messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                          <div className={`max-w-[80%] rounded-lg p-4 ${
                            msg.role === 'user'
                              ? `bg-${currentPersona.color}-600 text-white`
                              : 'bg-gray-100 text-gray-900'
                          }`}>
                            {msg.content}
                          </div>
                        </div>
                      ))}
                      {isTyping && (
                        <div className="flex justify-start">
                          <div className="bg-gray-100 rounded-lg p-4">
                            <div className="flex space-x-2">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </div>

                <div className="p-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                      placeholder="Type your message..."
                      disabled={messages.length === 0}
                      className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:bg-gray-100"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={messages.length === 0 || isTyping}
                      className={`px-6 py-3 bg-gradient-to-r from-${currentPersona.color}-600 to-${currentPersona.color}-700 text-white rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50`}
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'prompt' && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">System Prompt Documentation</h2>
              <div className="flex space-x-3">
                <button className="flex items-center space-x-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">
                  <Copy className="w-4 h-4" />
                  <span>Copy</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                  <Download className="w-4 h-4" />
                  <span>Export</span>
                </button>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200 font-mono text-sm whitespace-pre-wrap">
              {currentPersona.systemPrompt}
            </div>

            <div className="mt-8 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">Prompt Engineering Tips</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">✓ Do's</h4>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Define clear personality traits</li>
                    <li>• Specify conversation style</li>
                    <li>• Set boundaries and limitations</li>
                    <li>• Provide example responses</li>
                    <li>• Include tone guidelines</li>
                  </ul>
                </div>
                <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                  <h4 className="font-semibold text-red-900 mb-2">✗ Don'ts</h4>
                  <ul className="text-sm text-red-800 space-y-1">
                    <li>• Be vague about role</li>
                    <li>• Overload with instructions</li>
                    <li>• Forget edge cases</li>
                    <li>• Ignore ethical guidelines</li>
                    <li>• Skip testing variations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'flow' && (
          <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">Sample Conversation Flow</h2>
              <button className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                <Download className="w-4 h-4" />
                <span>Export Flow</span>
              </button>
            </div>

            <div className="space-y-6">
              {conversationFlows[activePersona].map((exchange, idx) => (
                <div key={idx} className="space-y-3">
                  <div className="flex justify-end">
                    <div className={`max-w-[70%] bg-${currentPersona.color}-100 rounded-lg p-4 border border-${currentPersona.color}-200`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <User className="w-4 h-4 text-gray-600" />
                        <span className="text-xs font-semibold text-gray-600">USER</span>
                      </div>
                      <p className="text-gray-900">{exchange.user}</p>
                    </div>
                  </div>
                  <div className="flex justify-start">
                    <div className="max-w-[70%] bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <div className="flex items-center space-x-2 mb-2">
                        {React.createElement(currentPersona.icon, { className: `w-4 h-4 text-${currentPersona.color}-600` })}
                        <span className="text-xs font-semibold text-gray-600">{currentPersona.name.toUpperCase()}</span>
                      </div>
                      <p className="text-gray-900">{exchange.bot}</p>
                    </div>
                  </div>
                  {idx < conversationFlows[activePersona].length - 1 && (
                    <div className="flex justify-center">
                      <div className="w-px h-6 bg-gray-300"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
              <h3 className="font-bold text-gray-900 mb-3">Conversation Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Opening</h4>
                  <p className="text-gray-700">Establish rapport and set expectations for the conversation</p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Development</h4>
                  <p className="text-gray-700">Ask clarifying questions, provide value, build trust</p>
                </div>
                <div>
                  <h4 className="font-semibold text-indigo-900 mb-2">Closing</h4>
                  <p className="text-gray-700">Summarize, offer next steps, maintain connection</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}