import { CatContext, useCatSetup } from "@/hooks/use-cats";
import { catCount } from "@/lib/content/cats";

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
  const context = useCatSetup(catCount);

  return <CatContext.Provider value={context}>{children}</CatContext.Provider>;
}
