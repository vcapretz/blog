import { ago } from "time-ago";

export default function TimeAgo({
  date,
  timestamp,
  long = false,
}: {
  long?: boolean;
  date: string;
  timestamp?: string;
}) {
  return !long ? (
    <>{ago(timestamp || date, true)} ago</>
  ) : (
    <>
      {date} ({ago(timestamp || date, true)} ago)
    </>
  );
}
