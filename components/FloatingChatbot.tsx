/* ============================================================
   Component: FloatingChatbot
   Floating button + Modern Chat UI + Mock AI responses
   ============================================================ */

'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, User, Sparkles } from 'lucide-react';
import { CHATBOT_GREETING, CHATBOT_RESPONSES } from '@/constants/site';
import type { ChatMessage } from '@/types';
import { cn } from '@/utils/cn';
import { trackEvent } from '@/lib/analytics';

const QUICK_QUESTIONS = [
  'Giá bao nhiêu?',
  'Tính năng nổi bật?',
  'Bảo hành thế nào?',
  'Dùng cát loại nào?',
];

export function FloatingChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: CHATBOT_GREETING,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
    trackEvent('chatbot_open', 'opened');
  };

  const handleSend = (textToSend?: string) => {
    const text = (textToSend || input).trim();
    if (!text) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Mock AI Response search
    setTimeout(() => {
      let responseText = CHATBOT_RESPONSES.default;
      const lower = text.toLowerCase();

      if (lower.includes('giá') || lower.includes('bao nhiêu')) {
        responseText = CHATBOT_RESPONSES.gia;
      } else if (lower.includes('tính năng') || lower.includes('làm sạch') || lower.includes('app')) {
        responseText = CHATBOT_RESPONSES['tính năng'];
      } else if (lower.includes('bảo hành')) {
        responseText = CHATBOT_RESPONSES['bảo hành'];
      } else if (lower.includes('giao hàng') || lower.includes('vận chuyển')) {
        responseText = CHATBOT_RESPONSES['giao hàng'];
      } else if (lower.includes('mèo') || lower.includes('cân nặng') || lower.includes('kg')) {
        responseText = CHATBOT_RESPONSES.mèo;
      } else if (lower.includes('cát')) {
        responseText =
          'Open Top Pro Plus tương thích với các loại cát vón cục phổ biến như cát bentonite, cát đậu nành (tofu), cát ngô hạt từ 1.5mm trở lên bạn nhé!';
      }

      const botMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: responseText,
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 1000);
  };

  return (
    <>
      {/* Floating Action Button */}
      <motion.button
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        onClick={handleOpen}
        aria-label="Mở khung trò chuyện hỗ trợ"
        className={cn(
          'fixed bottom-6 right-6 z-40 p-4 rounded-full shadow-2xl',
          'bg-primary text-white hover:bg-primary-hover',
          'transition-transform duration-200 active:scale-95',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2',
          isOpen && 'hidden',
        )}
      >
        <span className="relative">
          <MessageSquare className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-success rounded-full ring-2 ring-white" />
        </span>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className={cn(
              'fixed bottom-6 right-6 z-50 w-[90vw] sm:w-[380px] h-[520px]',
              'bg-white dark:bg-gray-950 rounded-3xl shadow-2xl',
              'border border-border dark:border-gray-800',
              'flex flex-col overflow-hidden',
            )}
          >
            {/* Header */}
            <div className="bg-primary px-5 py-4 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-sm flex items-center gap-1.5">
                    Trợ lý HeLiPet AI <Sparkles className="w-3.5 h-3.5" />
                  </h4>
                  <span className="text-xs text-white/80 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" /> Trực tuyến 24/7
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Đóng chat"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>

            {/* Messages Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50/50 dark:bg-gray-900/50 text-sm">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={cn(
                    'flex gap-2.5 max-w-[85%]',
                    msg.role === 'user' ? 'ml-auto flex-row-reverse' : 'mr-auto',
                  )}
                >
                  <div
                    className={cn(
                      'w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-xs mt-0.5',
                      msg.role === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-gray-200 dark:bg-gray-800 text-heading dark:text-white',
                    )}
                  >
                    {msg.role === 'user' ? <User className="w-4 h-4" /> : <Bot className="w-4 h-4" />}
                  </div>
                  <div
                    className={cn(
                      'p-3 rounded-2xl leading-relaxed',
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-tr-none'
                        : 'bg-white dark:bg-gray-800 text-heading dark:text-gray-200 border border-border/50 dark:border-gray-700/50 rounded-tl-none shadow-sm',
                    )}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Bot className="w-4 h-4" />
                  <span className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400 animate-bounce [animation-delay:0.4s]" />
                  </span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Suggestions */}
            <div className="px-3 py-2 bg-white dark:bg-gray-950 border-t border-border/40 dark:border-gray-800 flex gap-1.5 overflow-x-auto scrollbar-hide text-xs">
              {QUICK_QUESTIONS.map((q, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(q)}
                  className="px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-primary hover:text-white dark:hover:bg-primary text-body dark:text-gray-300 transition-colors flex-shrink-0"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Footer */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-3 bg-white dark:bg-gray-950 border-t border-border dark:border-gray-800 flex items-center gap-2"
            >
              <input
                type="text"
                placeholder="Nhập câu hỏi của bạn..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 px-3.5 py-2 rounded-full bg-gray-100 dark:bg-gray-900 border-0 text-heading dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-primary placeholder:text-gray-400"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                aria-label="Gửi tin nhắn"
                className="p-2 rounded-full bg-primary text-white hover:bg-primary-hover disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
