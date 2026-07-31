import Link from "next/link";
import { Button } from "@/components/ui/button";
import { HeadingLine } from "@/components/HeadingLine";

export default function NotFound() {
  return (
    <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal">
        404
      </p>
      <h1 className="mt-3 font-display text-4xl font-semibold text-navy">
        Page not found
      </h1>
      <HeadingLine />
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Button
        render={<Link href="/" />}
        className="mt-8 bg-teal text-white hover:bg-[#00a1be]"
      >
        Back to home
      </Button>
    </main>
  );
}
