import { ToastProvider } from '@/components/toast-bar/toast';

import { Base } from '../templates/Base';

const Index = () => (
  <ToastProvider>
    <Base />
  </ToastProvider>
);

export default Index;
