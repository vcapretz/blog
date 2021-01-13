import Head from "next/head";

import reset from "../css/reset";
import typography from "../css/typography";
import colors from "../css/colors";
import { Header } from "./header";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Vitor Capretz's blog</title>
      </Head>

      <style jsx global>
        {reset}
      </style>
      <style jsx global>
        {colors}
      </style>
      <style jsx global>
        {typography}
      </style>

      <Header />

      {children}

      <style jsx>{`
        main {
          padding: 10px;
        }
        @media (max-width: 600px) {
          padding: 20px;
        }
      `}</style>
    </main>
  );
}
