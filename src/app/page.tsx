import { Separator } from '@/components/ui/separator';
import { Header } from '@/components/header/header';
import { GeneralInfo } from '@/components/general-info/general-info';
import { TabsDetails } from '@/components/tabs/tabs';

export default function Page() {
  return (
    <>
      <Header />
      <Separator />
      <GeneralInfo />
      <TabsDetails />
    </>
  );
}
