import React from "react";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";
import Link from "next/link";

import withViews from "../lib/with-views";

import { Post } from "./post";
import { Header } from "./post-header";
import { H2 } from "./post-heading";
import { P } from "./post-paragraph";
import { Snippet } from "./post-snippet";
import { Quote } from "./post-quote";
import { Code } from "./post-code";

const components = {
  h2: H2,
  p: P,
  code: Snippet,
  inlineCode: Code,
  blockquote: Quote,
  a: ({ children, href }: { children: React.ReactNode; href: string }) => {
    if (!href.startsWith("/")) {
      return (
        <a href={href} target="_blank">
          {children}
        </a>
      );
    }
    return <Link href={href}>{children}</Link>;
  },
};

const NextraPostLayout = ({
  meta,
}: {
  meta: { date: string; title: string; description: string; og: string };
}) => {
  return withViews(
    ({ views, children }: { children: React.ReactNode; views: number }) => {
      return (
        <Post>
          <Header title={meta.title} date={meta.date} views={views} />

          <Head>
            <meta property="og:title" content={meta.title} />
            <meta property="og:site_name" content="Vitor Capretz's blog" />
            <meta property="og:description" content={meta.description} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@vcapretz" />
            <meta property="og:image" content={meta.og} />
          </Head>
          <MDXProvider components={components}>{children}</MDXProvider>
        </Post>
      );
    }
  );
};

export default NextraPostLayout;
