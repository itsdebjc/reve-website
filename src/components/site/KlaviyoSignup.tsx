import { useState } from "react";
import { toast } from "@/hooks/use-toast";

interface KlaviyoSignupProps {
  variant?: "default" | "footer" | "hero";
  className?: string;
}

const KlaviyoSignup = ({ variant = "default", className = "" }: KlaviyoSignupProps) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("https://a.klaviyo.com/client/subscriptions/?company_id=TPQB4A", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          revision: "2023-12-15",
        },
        body: JSON.stringify({
          data: {
            type: "subscription",
            attributes: { email, subscribed: "SUBSCRIBED" },
            relationships: { list: { data: { type: "list", id: "QQMm5G" } } },
          },
        }),
      });

      if (res.ok || res.status === 202) {
        toast({
          title: "You're subscribed!",
          description: "Check your inbox for what's next.",
        });
        setEmail("");
      } else {
        toast({
          title: "Hmm, something went wrong",
          description: "Try again or reach out directly.",
          variant: "destructive",
        });
      }
    } catch (err) {
      console.error("Subscription error:", err);
      toast({
        title: "Connection issue",
        description: "Please try again in a moment.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (variant === "footer") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col gap-2 ${className}`}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={loading}
          className="bg-surface border border-hairline rounded-full px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="bg-primary text-primary-foreground rounded-full py-2 text-sm label-mono hover:bg-pink-soft transition-colors disabled:opacity-50"
        >
          {loading ? "Subscribing..." : "Subscribe →"}
        </button>
      </form>
    );
  }

  if (variant === "hero") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${className}`}>
        <input
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={loading}
          className="w-full bg-surface border border-hairline rounded-lg px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-primary text-primary-foreground rounded-lg py-4 label-mono hover:bg-pink-soft transition-colors disabled:opacity-50"
        >
          {loading ? "Subscribing..." : "Get Started →"}
        </button>
        <p className="label-mono text-center text-foreground/50 text-sm">
          No spam. Unsubscribe anytime.
        </p>
      </form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-4 ${className}`}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        disabled={loading}
        className="w-full bg-surface border border-hairline rounded-full px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full bg-primary text-primary-foreground rounded-full py-4 label-mono hover:bg-pink-soft transition-colors disabled:opacity-50"
      >
        {loading ? "Subscribing..." : "Subscribe →"}
      </button>
      <p className="label-mono text-center text-foreground/50">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
};

export default KlaviyoSignup;
