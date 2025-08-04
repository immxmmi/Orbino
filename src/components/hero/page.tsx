import { BackgroundPattern } from "@/components/hero/components/background-pattern";
import { ComingSoonContent } from "@/components/hero/components/content";
import { ComingSoonHeader } from "@/components/hero/components/header";

const ComingSoon = () => {
  return (
    <div>
      <ComingSoonHeader />
      <div className="min-h-screen flex items-center justify-center px-6">
        <BackgroundPattern />
        <ComingSoonContent />
      </div>
    </div>
  );
};

export default ComingSoon;