'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useUserContext } from '@/app/context/UserContext';
import { getUserStats } from '../../../pages/api/trakt';

type SearchProps = {
  handleSearch: (value: string) => void;
};

export const Header = (props: SearchProps) => {
  const { handleSearch } = props;
  const { userName, setUserName } = useUserContext();

  // Set the userName state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  // On "Search" button click
  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Searching for user name: ${userName}`);
    handleSearch(userName);
  };

  return (
    <div className="flex m-4">
      <Input
        type="userName"
        placeholder="User Name"
        className="mr-4"
        onChange={handleInputChange}
      />
      <Button onClick={handleSearchClick}> Search </Button>
    </div>
  );
};
