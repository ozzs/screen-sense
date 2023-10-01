import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

type SearchProps = {
  handleSearch: (userNameValue: string) => void;
};

export const Header = ({ handleSearch }: SearchProps) => {
  const [userName, setUserName] = useState('');

  // Set the userName state
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  // On "Search" button click
  const handleSearchClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(`Searching for user name: ${userName}`);
    handleSearch(userName);
  };

  // On "Enter" key button press
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      console.log(`Searching for user name: ${userName}`);
      handleSearch(userName);
    }
  };

  return (
    <div className="flex m-4 items-center space-x-4">
      <img src="/logo.png" alt="Logo" className="w-56" />
      <Input
        type="userName"
        placeholder="User Name"
        className="mr-4 text-center"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleSearchClick}> Search </Button>
    </div>
  );
};
