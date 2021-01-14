import { Layout } from "./layout";

export function Post({ children }: { children: React.ReactNode }) {
  return (
    <Layout>
      <main>
        <article>{children}</article>
      </main>

      <style jsx>{`
        main {
          padding: 15px;
          font-size: 18px;
        }

        article {
          scroll-margin-top: 50px;
        }

        @media (min-width: 500px) {
          max-width: 42rem;
          margin: auto;
        }
      `}</style>
    </Layout>
  );
}
