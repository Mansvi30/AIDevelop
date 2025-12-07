import React, { useState } from 'react';
import { Sparkles, MessageSquare, Wand2, Zap, Globe, Layout, User, CheckCircle } from 'lucide-react';

export default function AIWebsiteBuilder() {
  const [activeTab, setActiveTab] = useState('overview');
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { role: 'assistant', content: 'Hi! I\'m your AI website assistant. I can help you with design suggestions, content generation, and personalization. What would you like to create today?' }
  ]);
  const [isGenerating, setIsGenerating] = useState(false);

  const handleChat = async () => {
    if (!chatInput.trim()) return;
    
    const userMessage = chatInput;
    setChatMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setChatInput('');
    setIsGenerating(true);

    // Simulate AI response
    setTimeout(() => {
      let response = '';
      const input = userMessage.toLowerCase();
      
      if (input.includes('hero') || input.includes('landing')) {
        response = 'Great! For your hero section, I suggest:\n\n✨ Bold headline: "Transform Your Business with AI"\n📱 Responsive design with gradient background\n🎯 Clear CTA button: "Get Started"\n🖼️ Hero image on the right side\n\nWould you like me to generate the content or adjust the layout?';
      } else if (input.includes('color') || input.includes('palette')) {
        response = 'Based on modern design trends, I recommend:\n\n🎨 Primary: Deep Blue (#2563eb)\n🎨 Secondary: Vibrant Purple (#7c3aed)\n🎨 Accent: Emerald Green (#10b981)\n🎨 Background: Soft Gray (#f9fafb)\n\nThis palette conveys trust, innovation, and growth. Would you like to see alternatives?';
      } else if (input.includes('content') || input.includes('write')) {
        response = 'I can generate content for:\n\n📝 Homepage copy\n📄 About Us section\n💼 Service descriptions\n📰 Blog posts\n📧 Email templates\n\nWhich section would you like me to write first?';
      } else {
        response = 'I can help you with:\n\n🎨 Design suggestions (layouts, colors, typography)\n✍️ Content generation (headlines, descriptions, CTAs)\n🤖 AI chatbot integration\n📊 Personalization features\n⚡ Automation workflows\n\nWhat would you like to explore?';
      }
      
      setChatMessages(prev => [...prev, { role: 'assistant', content: response }]);
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">AI Website Builder</h1>
                <p className="text-sm text-gray-500">No-code AI-powered platform</p>
              </div>
            </div>
            <button className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow">
              Launch Project
            </button>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {[
              { id: 'overview', label: 'Overview', icon: Globe },
              { id: 'features', label: 'AI Features', icon: Wand2 },
              { id: 'assistant', label: 'AI Assistant', icon: MessageSquare },
              { id: 'guide', label: 'Build Guide', icon: Layout }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 py-4 border-b-2 transition-colors ${
                  activeTab === tab.id
                    ? 'border-blue-600 text-blue-600'
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
        {activeTab === 'overview' && (
          <div className="space-y-8">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to Your AI-Powered Website Builder</h2>
              <p className="text-lg text-gray-600 mb-6">
                Create stunning, intelligent websites with no coding required. Our AI assists you at every step.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg">
                  <Wand2 className="w-8 h-8 text-blue-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">AI Design Assistant</h3>
                  <p className="text-sm text-gray-600">Get intelligent layout suggestions and color palettes tailored to your brand</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg">
                  <MessageSquare className="w-8 h-8 text-purple-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Content Generation</h3>
                  <p className="text-sm text-gray-600">Create compelling copy, headlines, and descriptions with AI</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-pink-50 to-pink-100 rounded-lg">
                  <Zap className="w-8 h-8 text-pink-600 mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Smart Automation</h3>
                  <p className="text-sm text-gray-600">Automate workflows and personalize user experiences</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Project Progress</h3>
              <div className="space-y-4">
                {[
                  { task: 'Choose AI platform and tools', status: 'complete' },
                  { task: 'Design homepage layout', status: 'complete' },
                  { task: 'Integrate AI chatbot', status: 'in-progress' },
                  { task: 'Add content generation', status: 'pending' },
                  { task: 'Set up automation workflows', status: 'pending' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        item.status === 'complete' ? 'bg-green-100' :
                        item.status === 'in-progress' ? 'bg-blue-100' : 'bg-gray-200'
                      }`}>
                        {item.status === 'complete' && <CheckCircle className="w-5 h-5 text-green-600" />}
                        {item.status === 'in-progress' && <Zap className="w-5 h-5 text-blue-600" />}
                      </div>
                      <span className="font-medium text-gray-900">{item.task}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      item.status === 'complete' ? 'bg-green-100 text-green-700' :
                      item.status === 'in-progress' ? 'bg-blue-100 text-blue-700' :
                      'bg-gray-200 text-gray-600'
                    }`}>
                      {item.status.replace('-', ' ')}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'features' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Smart Design Suggestions',
                    description: 'AI analyzes your content and brand to suggest optimal layouts, color schemes, and typography',
                    tools: ['Wix AI', 'Webflow', 'Figma AI'],
                    color: 'blue'
                  },
                  {
                    title: 'AI Content Writer',
                    description: 'Generate SEO-optimized headlines, product descriptions, and blog posts instantly',
                    tools: ['Claude API', 'Copy.ai', 'Jasper'],
                    color: 'purple'
                  },
                  {
                    title: 'Intelligent Chatbot',
                    description: 'Provide 24/7 customer support with context-aware responses and lead qualification',
                    tools: ['Tidio', 'Drift', 'Intercom'],
                    color: 'green'
                  },
                  {
                    title: 'Personalization Engine',
                    description: 'Show dynamic content based on user behavior, location, and preferences',
                    tools: ['Dynamic Yield', 'Optimizely', 'VWO'],
                    color: 'pink'
                  },
                  {
                    title: 'Image Generation',
                    description: 'Create custom graphics, icons, and hero images with AI image generators',
                    tools: ['DALL-E', 'Midjourney', 'Stable Diffusion'],
                    color: 'indigo'
                  },
                  {
                    title: 'Workflow Automation',
                    description: 'Connect apps and automate tasks like email marketing, CRM updates, and analytics',
                    tools: ['Zapier', 'Make', 'n8n'],
                    color: 'orange'
                  }
                ].map((feature, idx) => (
                  <div key={idx} className={`p-6 bg-gradient-to-br from-${feature.color}-50 to-${feature.color}-100 rounded-lg border border-${feature.color}-200`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-700 mb-4">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.tools.map((tool, i) => (
                        <span key={i} className="px-3 py-1 bg-white rounded-full text-xs font-medium text-gray-700 shadow-sm">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === 'assistant' && (
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-[600px] flex flex-col">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">AI Design Assistant</h2>
              <p className="text-gray-600">Ask for design suggestions, content ideas, or implementation help</p>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {chatMessages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] rounded-lg p-4 ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-900'
                  }`}>
                    <p className="whitespace-pre-line">{msg.content}</p>
                  </div>
                </div>
              ))}
              {isGenerating && (
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
            </div>
            
            <div className="p-6 border-t border-gray-200">
              <div className="flex space-x-3">
                <input
                  type="text"
                  value={chatInput}
                  onChange={(e) => setChatInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleChat()}
                  placeholder="Ask for design suggestions, content ideas, or help..."
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  onClick={handleChat}
                  disabled={isGenerating}
                  className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-shadow disabled:opacity-50"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'guide' && (
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Step-by-Step Build Guide</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Choose Your Platform</h3>
                  <p className="text-gray-700 mb-3">Select a no-code platform with AI capabilities:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• <strong>Wix AI:</strong> Best for beginners, automatic design generation</li>
                    <li>• <strong>Webflow:</strong> Advanced design control with AI suggestions</li>
                    <li>• <strong>WordPress + AI plugins:</strong> Most flexible, huge ecosystem</li>
                    <li>• <strong>Framer:</strong> Modern, design-focused with AI assistance</li>
                  </ul>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Integrate AI Chatbot</h3>
                  <p className="text-gray-700 mb-3">Add conversational AI to your website:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Sign up for Tidio, Drift, or Intercom</li>
                    <li>• Connect to your website via embed code</li>
                    <li>• Train the bot on your FAQs and content</li>
                    <li>• Set up automated responses and lead capture</li>
                  </ul>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: Add Content Generation</h3>
                  <p className="text-gray-700 mb-3">Use AI to create compelling content:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Integrate Claude API or ChatGPT for custom content</li>
                    <li>• Use Copy.ai or Jasper for marketing copy</li>
                    <li>• Generate meta descriptions and SEO content</li>
                    <li>• Create blog posts and product descriptions</li>
                  </ul>
                </div>

                <div className="border-l-4 border-pink-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4: Set Up Personalization</h3>
                  <p className="text-gray-700 mb-3">Show relevant content to each visitor:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Track user behavior with analytics</li>
                    <li>• Create dynamic content blocks</li>
                    <li>• Personalize based on location, device, and referral</li>
                    <li>• A/B test different variations</li>
                  </ul>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Step 5: Automate Workflows</h3>
                  <p className="text-gray-700 mb-3">Connect your tools with Zapier or Make:</p>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Connect form submissions to your CRM</li>
                    <li>• Auto-send welcome emails to new subscribers</li>
                    <li>• Sync data between platforms</li>
                    <li>• Schedule social media posts</li>
                  </ul>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🎯 Deliverable Checklist</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✅ Responsive website with modern design</li>
                    <li>✅ AI chatbot for customer support</li>
                    <li>✅ AI-generated content (headlines, copy, blog posts)</li>
                    <li>✅ Personalized user experiences</li>
                    <li>✅ Automated workflows (email, CRM, analytics)</li>
                    <li>✅ SEO optimization with AI suggestions</li>
                    <li>✅ Analytics and performance tracking</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}