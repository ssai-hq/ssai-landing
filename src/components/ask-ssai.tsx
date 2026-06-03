"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import { Send, ArrowRight, RotateCcw } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

type Phase = "form" | "chat";
type Message = { role: "user" | "assistant"; content: string };

interface UserProfile {
  teamSize: number;
  devopsHours: number;
  cloudProviders: string[];
  currentTools: string[];
}

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const CLOUD_OPTIONS = [
  "AWS",
  "GCP",
  "Azure",
  "Vercel",
  "Railway",
  "Heroku",
  "DigitalOcean",
];

const TOOL_OPTIONS = [
  "Datadog",
  "Grafana",
  "PagerDuty",
  "Terraform",
  "GitHub Actions",
  "CircleCI",
  "CloudWatch",
  "Sentry",
  "None",
];

const SUGGESTED_PROMPTS = [
  "What would SSAI actually do for my team?",
  "How does this compare to hiring a DevOps engineer?",
  "What does onboarding look like?",
];

/* ------------------------------------------------------------------ */
/*  ChipSelect                                                         */
/* ------------------------------------------------------------------ */

function ChipSelect({
  options,
  selected,
  onChange,
  label,
}: {
  options: string[];
  selected: string[];
  onChange: (val: string[]) => void;
  label: string;
}) {
  const toggle = (opt: string) => {
    if (opt === "None") {
      onChange(selected.includes("None") ? [] : ["None"]);
      return;
    }
    const without = selected.filter((s) => s !== "None");
    onChange(
      without.includes(opt)
        ? without.filter((s) => s !== opt)
        : [...without, opt],
    );
  };

  return (
    <div>
      <label className="mb-2.5 block font-mono text-[11px] uppercase tracking-[0.1em] text-[#6b6b65]">
        {label}
      </label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => {
          const active = selected.includes(opt);
          return (
            <button
              key={opt}
              type="button"
              onClick={() => toggle(opt)}
              className={`rounded-md border px-3 py-1.5 text-[13px] font-medium transition-all duration-150 ${
                active
                  ? "border-[#FF3C5B]/60 bg-[#FF3C5B]/10 text-[#FF3C5B]"
                  : "border-[#2a2a2a] bg-[#1a1a1a] text-[#6b6b65] hover:border-[#3a3a3a] hover:text-[#a8a8a0]"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Component                                                     */
/* ------------------------------------------------------------------ */

export function AskSSAI() {
  const [phase, setPhase] = useState<Phase>("form");
  const [profile, setProfile] = useState<UserProfile>({
    teamSize: 8,
    devopsHours: 10,
    cloudProviders: [],
    currentTools: [],
  });
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [transitioning, setTransitioning] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);

  const conversationRef = useRef<Message[]>([]);
  const chatEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll chat to bottom
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Focus input when entering chat phase
  useEffect(() => {
    if (phase === "chat" && !isLoading) {
      inputRef.current?.focus();
    }
  }, [phase, isLoading]);

  /* ---- Streaming API call ---- */

  const streamResponse = useCallback(
    async (apiMessages: Message[]) => {
      const res = await fetch("/api/ask-ssai", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: apiMessages, context: profile }),
      });

      if (!res.ok) throw new Error(`API error: ${res.status}`);

      const reader = res.body!.getReader();
      const decoder = new TextDecoder();
      let fullText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        fullText += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = {
            role: "assistant",
            content: fullText,
          };
          return updated;
        });
      }

      return fullText;
    },
    [profile],
  );

  /* ---- Form submit → initial assessment ---- */

  const handleFormSubmit = async () => {
    setTransitioning(true);
    await new Promise((r) => setTimeout(r, 250));
    setPhase("chat");
    setTransitioning(false);
    setIsLoading(true);

    const initialMsg: Message = {
      role: "user",
      content:
        "Based on my team profile, give me a quick honest assessment of whether SSAI is a good fit.",
    };
    conversationRef.current = [initialMsg];

    // Add empty assistant message placeholder for streaming
    setMessages([{ role: "assistant", content: "" }]);

    try {
      const responseText = await streamResponse([initialMsg]);
      conversationRef.current.push({
        role: "assistant",
        content: responseText,
      });
    } catch {
      setMessages([
        {
          role: "assistant",
          content:
            "Having trouble connecting right now. You can book a call directly at cal.com/avinier — happy to chat about your setup.",
        },
      ]);
    }
    setIsLoading(false);
  };

  /* ---- Send chat message ---- */

  const handleSend = async (text?: string) => {
    const msgText = text || input.trim();
    if (!msgText || isLoading) return;

    setInput("");
    setShowSuggestions(false);

    const userMsg: Message = { role: "user", content: msgText };
    conversationRef.current.push(userMsg);

    // Add user message + empty assistant placeholder
    setMessages((prev) => [
      ...prev,
      userMsg,
      { role: "assistant", content: "" },
    ]);
    setIsLoading(true);

    try {
      const responseText = await streamResponse(conversationRef.current);
      conversationRef.current.push({
        role: "assistant",
        content: responseText,
      });
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content:
            "Something went wrong. Try again or book a call at cal.com/avinier.",
        };
        return updated;
      });
    }
    setIsLoading(false);
  };

  /* ---- Reset to form ---- */

  const handleReset = () => {
    setPhase("form");
    setMessages([]);
    conversationRef.current = [];
    setShowSuggestions(true);
    setInput("");
  };

  /* ---- Computed labels ---- */

  const teamLabel =
    profile.teamSize <= 3
      ? "Solo / tiny"
      : profile.teamSize <= 8
        ? "Small startup"
        : profile.teamSize <= 20
          ? "Growing team"
          : profile.teamSize <= 35
            ? "Mid-size"
            : "Large team";

  const hoursLabel =
    profile.devopsHours <= 3
      ? "Almost none"
      : profile.devopsHours <= 10
        ? "A few hours"
        : profile.devopsHours <= 20
          ? "Significant chunk"
          : profile.devopsHours <= 30
            ? "Half someone's job"
            : "Nearly full-time";

  const teamFill = ((profile.teamSize - 1) / 49) * 100;
  const hoursFill = (profile.devopsHours / 40) * 100;

  /* ---- Render ---- */

  return (
    <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
      {/* ---- Left column: text ---- */}
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#6b6b65]">
          Ask SSAI
        </p>
        <h2 className="mt-4 font-title text-[clamp(36px,5vw,64px)] leading-[1.05] text-[#f5f5f0]">
          Is SSAI right for <span className="text-[#FF3C5B]">your</span> team?
        </h2>
        <p className="mt-5 max-w-[520px] text-[17px] leading-7 text-[#a8a8a0]">
          Tell us about your setup. Our AI will give you an honest assessment —
          no sales pitch, no fluff.
        </p>

        {/* Profile summary card (visible in chat phase) */}
        {phase === "chat" && (
          <div className="mt-6 rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] px-4 py-3">
            <p className="font-mono text-[10px] uppercase tracking-[0.1em] text-[#6b6b65]">
              Your profile
            </p>
            <p className="mt-2 text-[14px] leading-relaxed text-[#a8a8a0]">
              {profile.teamSize} engineers &middot; {profile.devopsHours} hrs/wk
              ops
              {profile.cloudProviders.length > 0 &&
                ` \u00b7 ${profile.cloudProviders.join(", ")}`}
            </p>
            {profile.currentTools.length > 0 &&
              !profile.currentTools.includes("None") && (
                <p className="mt-1 text-[13px] text-[#6b6b65]">
                  Tools: {profile.currentTools.join(", ")}
                </p>
              )}
          </div>
        )}
      </div>

      {/* ---- Right column: interactive card ---- */}
      <div
        className={`transition-opacity duration-300 ${transitioning ? "opacity-0" : "opacity-100"}`}
      >
        {phase === "form" ? (
          /* =============== ONBOARDING FORM =============== */
          <div className="rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] p-6 sm:p-8">
            <div className="space-y-7">
              {/* Team size slider */}
              <div>
                <div className="mb-3 flex items-baseline justify-between">
                  <label className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#6b6b65]">
                    Engineering team size
                  </label>
                  <span className="text-[14px] font-medium text-[#f5f5f0]">
                    {profile.teamSize}{" "}
                    <span className="text-[12px] font-normal text-[#6b6b65]">
                      &mdash; {teamLabel}
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min={1}
                  max={50}
                  value={profile.teamSize}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      teamSize: Number(e.target.value),
                    }))
                  }
                  className="ask-ssai-slider w-full"
                  style={
                    { "--fill": `${teamFill}%` } as React.CSSProperties
                  }
                />
                <div className="mt-1.5 flex justify-between font-mono text-[10px] text-[#4a4a45]">
                  <span>1</span>
                  <span>50+</span>
                </div>
              </div>

              {/* DevOps hours slider */}
              <div>
                <div className="mb-3 flex items-baseline justify-between">
                  <label className="font-mono text-[11px] uppercase tracking-[0.1em] text-[#6b6b65]">
                    Weekly hours on DevOps / ops
                  </label>
                  <span className="text-[14px] font-medium text-[#f5f5f0]">
                    {profile.devopsHours}h{" "}
                    <span className="text-[12px] font-normal text-[#6b6b65]">
                      &mdash; {hoursLabel}
                    </span>
                  </span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={40}
                  value={profile.devopsHours}
                  onChange={(e) =>
                    setProfile((p) => ({
                      ...p,
                      devopsHours: Number(e.target.value),
                    }))
                  }
                  className="ask-ssai-slider w-full"
                  style={
                    { "--fill": `${hoursFill}%` } as React.CSSProperties
                  }
                />
                <div className="mt-1.5 flex justify-between font-mono text-[10px] text-[#4a4a45]">
                  <span>0</span>
                  <span>40+</span>
                </div>
              </div>

              {/* Cloud providers */}
              <ChipSelect
                label="Cloud providers"
                options={CLOUD_OPTIONS}
                selected={profile.cloudProviders}
                onChange={(val) =>
                  setProfile((p) => ({ ...p, cloudProviders: val }))
                }
              />

              {/* Current tools */}
              <ChipSelect
                label="DevOps tools you currently use"
                options={TOOL_OPTIONS}
                selected={profile.currentTools}
                onChange={(val) =>
                  setProfile((p) => ({ ...p, currentTools: val }))
                }
              />

              {/* Submit */}
              <button
                onClick={handleFormSubmit}
                className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#FF3C5B] px-5 py-2.5 text-[14px] font-medium text-white transition-all duration-150 hover:bg-[#e63550] active:scale-[0.98] sm:w-auto"
              >
                Talk
                <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        ) : (
          /* =============== CHAT INTERFACE =============== */
          <div
            className="flex flex-col rounded-lg border border-[#2a2a2a] bg-[#1a1a1a] overflow-hidden"
            style={{ height: "min(520px, 75svh)" }}
          >
            {/* Header */}
            <div className="flex shrink-0 items-center justify-between border-b border-[#2a2a2a] px-5 py-3">
              <div className="flex items-center gap-2.5">
                <Image
                  src="/logo-icon-light.png"
                  alt="SSAI"
                  width={18}
                  height={18}
                  className="h-[18px] w-[18px]"
                />
                <span className="font-title text-[14px] text-[#e0ddd6]">ssai</span>
              </div>
              <button
                onClick={handleReset}
                className="flex items-center gap-1.5 text-[12px] text-[#6b6b65] transition-colors hover:text-[#a8a8a0]"
              >
                <RotateCcw className="h-3 w-3" />
                Start over
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 space-y-4 overflow-y-auto px-5 py-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-lg px-4 py-2.5 text-[14px] leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#2a2a2a] text-[#e0ddd6]"
                        : "border border-[#2a2a2a] bg-[#1a1a1a] text-[#e0ddd6]"
                    } ${
                      msg.role === "assistant" &&
                      isLoading &&
                      i === messages.length - 1 &&
                      msg.content
                        ? "streaming-cursor"
                        : ""
                    }`}
                  >
                    {msg.content || (
                      <span className="inline-flex items-center gap-1.5">
                        <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF3C5B]" />
                        <span
                          className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF3C5B]"
                          style={{ animationDelay: "150ms" }}
                        />
                        <span
                          className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-[#FF3C5B]"
                          style={{ animationDelay: "300ms" }}
                        />
                      </span>
                    )}
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            {/* Suggested prompts */}
            {showSuggestions && messages.length > 0 && !isLoading && (
              <div className="flex shrink-0 flex-wrap gap-2 border-t border-[#2a2a2a] px-5 py-3">
                {SUGGESTED_PROMPTS.map((prompt) => (
                  <button
                    key={prompt}
                    onClick={() => handleSend(prompt)}
                    className="rounded-md border border-[#FF3C5B]/20 bg-[#FF3C5B]/5 px-3 py-1.5 text-[12px] text-[#FF3C5B] transition-all duration-150 hover:border-[#FF3C5B]/40 hover:bg-[#FF3C5B]/10"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <div className="shrink-0 border-t border-[#2a2a2a] px-4 py-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex gap-2"
              >
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about your setup..."
                  disabled={isLoading}
                  className="flex-1 rounded-lg border border-[#2a2a2a] bg-[#131313] px-4 py-2.5 text-[14px] text-[#e0ddd6] placeholder-[#4a4a45] outline-none transition-colors focus:border-[#FF3C5B]/40 disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#FF3C5B] text-white transition-all duration-150 hover:bg-[#e63550] disabled:opacity-30 disabled:hover:bg-[#FF3C5B]"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
