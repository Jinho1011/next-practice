import type { AppProps } from "next/app";
import { Hydrate, QueryClient, QueryClientProvider } from "react-query";
import { css } from "@emotion/react";

import { globalStyle } from "../../public/styles/global";
import "../../public/styles/tabs.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {globalStyle}
        <div css={containerCss}>
          <Component {...pageProps} />
        </div>
      </Hydrate>
    </QueryClientProvider>
  );
}

const containerCss = css`
  margin: 0 auto;
  max-width: 414px;
`;
