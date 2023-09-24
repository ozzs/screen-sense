import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Header() {
  return (
    <div className="flex m-4">
      <Input type="userName" placeholder="User Name" className="mr-4" />
      <Button> Search </Button>
    </div>
  );
}
