import { CatContext, useCatSetup } from "@/hooks/use-cats";

/**
 * Provider for cat context
 * @param {ReactNode} children The children components
 * @returns The provider component
 */
export default function CatProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const context = useCatSetup(10);

  return <CatContext.Provider value={context}>{children}</CatContext.Provider>;
}
