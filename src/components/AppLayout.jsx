function AppLayout({ children }) {
   return (
      <div className="min-h-screen flex flex-col items-center w-full">
         {children}
      </div>
   );
}

export default AppLayout;
