import { CatContext, useCatSetup } from "@/hooks/use-cats";

/**
 * Provider for cat context
 * @param {ReactNode} children The children components
 * @returns The provider component
 */
export default function CatProvider({
  count,
  children,
}: {
  count: number;
  children: React.ReactNode;
}) {
  const context = useCatSetup(count);

  return <CatContext.Provider value={context}>{children}</CatContext.Provider>;
}
