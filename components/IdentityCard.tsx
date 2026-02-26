import { UIUser } from "@/lib/types";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";

interface IdentityCardProps {
  user: UIUser;
}

export default function IdentityCard({ user }: IdentityCardProps) {
  return (
    <Card className="flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-[var(--text)]">
          Hello, {user.name}
        </h2>
        <p className="text-[var(--textLight)] mt-1">
          Please confirm your identity to unlock full access.
        </p>
      </div>
      <Button>Complete Profile</Button>
    </Card>
  );
}
