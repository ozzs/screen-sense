'use client';
import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header/header';
import { GeneralInfo } from '@/components/general-info/general-info';
import { TabsDetails } from '@/components/tabs/tabs';
import { useState } from 'react';
import { getUserInfo } from '../../pages/api/trakt';
import Loader from '@/components/ui/loader';

export default function Page() {
  const [userNameValue, setUserNameValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (value: string) => {
    setHasSearched(true);
    setUserNameValue(value);
    setIsLoading(true);

    // Fetch the user info (validate if the user exists)
    try {
      await getUserInfo(value);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          {!hasSearched && (
            <div className="flex justify-center items-center h-screen">
              Please Enter a User Name
            </div>
          )}
          {userNameValue && (
            <>
              <Separator />
              <GeneralInfo userNameValue={userNameValue} />
              <TabsDetails userNameValue={userNameValue} />
            </>
          )}
        </>
      )}
    </>
  );
}
