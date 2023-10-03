import { GeneralInfo } from '@/components/general-info/GeneralInfo';
import { Header } from '@/components/header/Header';
import { TabsDetails } from '@/components/tabs/TabsDetails';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Loader from '@/components/ui/loader';
import { Separator } from '@/components/ui/separator';
import { AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getUserInfo } from '../../pages/api/trakt';

export default function Home() {
  const [userName, setUserName] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  const handleSearch = async (value: string) => {
    setHasSearched(true);
    setUserName(value);
  };

  const { isLoading, error } = useQuery<boolean, Error>({
    queryKey: ['getUserInfo', userName],
    queryFn: () => getUserInfo(userName),
    // Only fetch when userName exists!
    enabled: !!userName,
    refetchOnWindowFocus: false
  });

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Separator />
      {isLoading ? (
        <Loader isLoading={isLoading} />
      ) : (
        <>
          {error ? (
            <div className="flex justify-center items-center h-screen">
              <Alert variant="destructive" className="w-fit animate-bounce">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error.message}</AlertDescription>
              </Alert>
            </div>
          ) : (
            <>
              {!hasSearched && (
                <div className="flex justify-center items-center h-screen">
                  Please Enter a User Name
                </div>
              )}
              {userName && (
                <>
                  <GeneralInfo userNameValue={userName} />
                  <TabsDetails userNameValue={userName} />
                </>
              )}
            </>
          )}
        </>
      )}
    </>
  );
}
