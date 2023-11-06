import Home from 'src/components/dashboard/home/Home';
import DashboardLayout from 'src/components/layout/DashboardLayout';
import { ToastContainer } from 'react-toastify';

export default function HomePage() {
  return (
    <>
      <ToastContainer />
      <DashboardLayout>
        <Home />
      </DashboardLayout>
    </>
  );
}
