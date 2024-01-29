import { useEffect } from "react";
import JournalCard from "../components/my-journal-page/journal-card";
import JournalTopFilter from "../components/my-journal-page/journal-top-filter";
import axios from "axios";

function MyJournalsPage() {
  const journals = [
    {
      title: "Hello world",
      date: Date.now(),
      entries: [
        {
          content: "Spent time with the cat",
        },
        {
          content: "Spent time with the fuckin cat again",
        },
      ],
    },
  ];

  return (
    <div className="p-10 flex-1 h-full">
      <div>
        <JournalTopFilter />
      </div>
      <div className="-mx-3 flex flex-wrap p-2  ">
        {journals.map((data, i) => (
          <JournalCard key={i} data={data} />
        ))}
      </div>
    </div>
  );
}

export default MyJournalsPage;
