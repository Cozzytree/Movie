function AppLayout({ children }) {
   return (
      <div className="min-h-[100dvh] bg-background flex flex-col items-center w-full">
         {children}
      </div>
   );
}

export default AppLayout;
