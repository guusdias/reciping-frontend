import Header from "@/app/ui/home/heading-bar";

// export const experimental_ppr = true;
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-col md:overflow-hidden">
      <div className="w-full">
        <Header />
      </div>
      <div className="flex p-6  md:p-12">{children}</div>
    </div>
  );
}
