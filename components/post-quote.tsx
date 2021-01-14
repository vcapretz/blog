export const Quote = ({
  by,
  children,
}: {
  children: React.ReactNode;
  by?: string;
}) => (
  <blockquote>
    <p>
      {children}
      {by ? (
        <>
          <br />– {by}
        </>
      ) : null}
    </p>
    <style jsx>{`
      blockquote {
        margin: 30px 0;
        color: #666;
        font-style: oblique;
        border-left: 8px solid #ccc;
        padding-left: 20px;
      }

      p {
        line-height: 28px;
      }
    `}</style>
  </blockquote>
);
