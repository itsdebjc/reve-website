import { useState } from "react";
import { toast } from "@/hooks/use-toast";

const EmailCapture = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    try {
      const res = await fetch("https://a.klaviyo.com/client/subscriptions/?company_id=TPQB4A", {
        method: "POST",
        headers: { "Content-Type": "application/json", revision: "2023-12-15" },
        body: JSON.stringify({
          data: {
            type: "subscription",
            attributes: { email, subscribed: "SUBSCRIBED" },
            relationships: { list: { data: { type: "list", id: "QQMm5G" } } },
          },
        }),
      });

      if (res.ok || res.status === 202) {
        toast({ title: "You're on the list!", description: "Check your inbox for the checklist." });
        setEmail("");
      } else {
        toast({ title: "Hmm, something went wrong", description: "Try again or reach out directly.", variant: "destructive" });
      }
    } catch (err) {
      console.error("Subscription error:", err);
      toast({ title: "Connection issue", description: "Please try again in a moment.", variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-[#5FC2E8] py-20 md:py-24 px-6 md:px-16">
      <div className="mx-auto max-w-[1280px] grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p
            style={{ fontFamily: "'Inter', sans-serif", letterSpacing: "0.14em" }}
            className="text-[13px] font-bold text-[#20262A]/70 uppercase mb-5"
          >
            Free Guide
          </p>
          <h2
            style={{ fontFamily: "'Anton', sans-serif", fontWeight: 400 }}
            className="text-[#20262A] text-3xl md:text-4xl leading-[1.05] uppercase mb-4"
          >
            Get the AI Marketing Readiness Checklist.
          </h2>
          <p className="font-['Inter'] text-[#20262A]/75 text-lg leading-relaxed">
            The exact 20 points I check on every Game Plan. Free, straight to
            your inbox.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@yourbusiness.com"
            disabled={loading}
            className="flex-1 bg-[#20262A] text-[#F2E4D8] placeholder:text-[#F2E4D8]/50 rounded-[10px] px-5 py-4 font-['Inter'] focus:outline-none focus:ring-2 focus:ring-[#F2E4D8]/40 disabled:opacity-50"
          />
          <button
            type="submit"
            disabled={loading}
            style={{ fontFamily: "'Anton', sans-serif" }}
            className="bg-[#20262A] text-[#F2E4D8] rounded-[10px] px-8 py-4 text-sm uppercase hover:opacity-90 transition-opacity disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send It"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default EmailCapture;
