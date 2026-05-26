"use client"

import { useState, useRef, useEffect } from 'react'
import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { MessageCircle, X, Send, Phone, Calendar, Loader2 } from 'lucide-react'
import { businessInfo } from '@/lib/business-info'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const quickReplies = [
  "What services do you offer?",
  "I need a roof repair",
  "Schedule an estimate",
  "What areas do you serve?",
  "24/7 emergency?",
]

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  
  const { messages, input, handleInputChange, handleSubmit, status, setInput } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })

  const isLoading = status === 'streaming' || status === 'submitted'

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const handleQuickReply = (reply: string) => {
    setInput(reply)
    // Trigger form submission
    const form = document.getElementById('chat-form') as HTMLFormElement
    if (form) {
      setTimeout(() => form.requestSubmit(), 0)
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-24 right-6 z-50 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-muted text-muted-foreground" : "bg-primary text-primary-foreground hover:bg-primary/90"
        )}
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat Window */}
      <div
        className={cn(
          "fixed bottom-24 right-6 z-50 w-[360px] max-w-[calc(100vw-3rem)] bg-card border border-border rounded-2xl shadow-2xl overflow-hidden transition-all duration-300",
          isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
        )}
        style={{ height: isOpen ? '500px' : '0' }}
      >
        {/* Header */}
        <div className="bg-primary text-primary-foreground p-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-foreground/20 rounded-full flex items-center justify-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">BGK Handy Services</h3>
              <p className="text-xs text-primary-foreground/80">Ask us anything!</p>
            </div>
          </div>
        </div>

        {/* Messages */}
        <div className="h-[340px] overflow-y-auto p-4 space-y-4 bg-background">
          {/* Welcome message */}
          {messages.length === 0 && (
            <div className="space-y-4">
              <div className="bg-muted rounded-lg p-3 max-w-[80%]">
                <p className="text-sm text-foreground">
                  Hi! I&apos;m here to help with your home repair questions. How can I assist you today?
                </p>
              </div>
              
              {/* Quick Replies */}
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <button
                    key={reply}
                    onClick={() => handleQuickReply(reply)}
                    className="text-xs px-3 py-1.5 bg-primary/10 text-primary rounded-full hover:bg-primary/20 transition-colors"
                  >
                    {reply}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Chat Messages */}
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.role === 'user' ? "justify-end" : "justify-start"
              )}
            >
              <div
                className={cn(
                  "max-w-[80%] rounded-lg p-3",
                  message.role === 'user'
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-foreground"
                )}
              >
                {message.parts?.map((part, index) => {
                  if (part.type === 'text') {
                    return (
                      <p key={index} className="text-sm whitespace-pre-wrap">
                        {part.text}
                      </p>
                    )
                  }
                  if (part.type === 'tool-invocation') {
                    // Show tool results nicely
                    if (part.state === 'output-available' && part.output) {
                      const output = part.output as Record<string, unknown>
                      if (output.calendlyUrl) {
                        return (
                          <div key={index} className="mt-2">
                            <a
                              href={output.calendlyUrl as string}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
                            >
                              <Calendar className="h-4 w-4" />
                              Schedule Appointment
                            </a>
                          </div>
                        )
                      }
                    }
                    return null
                  }
                  return null
                })}
              </div>
            </div>
          ))}

          {/* Loading indicator */}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-muted rounded-lg p-3">
                <Loader2 className="h-5 w-5 animate-spin text-muted-foreground" />
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Actions */}
        <div className="px-4 py-2 border-t border-border bg-card flex gap-2">
          <a href={`tel:${businessInfo.phoneRaw}`} className="flex-1">
            <Button variant="outline" size="sm" className="w-full gap-1 text-xs">
              <Phone className="h-3 w-3" />
              Call
            </Button>
          </a>
          <a href={businessInfo.calendly} target="_blank" rel="noopener noreferrer" className="flex-1">
            <Button variant="outline" size="sm" className="w-full gap-1 text-xs">
              <Calendar className="h-3 w-3" />
              Schedule
            </Button>
          </a>
        </div>

        {/* Input */}
        <form id="chat-form" onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1 px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
              disabled={isLoading}
            />
            <Button
              type="submit"
              size="icon"
              disabled={isLoading || !input.trim()}
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </form>
      </div>
    </>
  )
}
