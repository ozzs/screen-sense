'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUserContext } from '@/app/context/UserContext';

export function Header() {
  const { userName, setUserName } = useUserContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  return (
    <div className="flex m-4">
      <Input
        type="userName"
        placeholder="User Name"
        className="mr-4"
        onChange={handleInputChange}
      />
      <Button> Search </Button>
    </div>
  );
}
