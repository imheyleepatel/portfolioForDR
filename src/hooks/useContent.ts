import { useEffect, useState } from "react";
import { getContent } from "../service/contentService";
import { ContentData, SheetRow } from "../type/content";

export const useContent = () => {
  const [data, setData] = useState<ContentData>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const rows: SheetRow[] = await getContent();

        const formatted: ContentData = {};

        rows.forEach((item) => {
          if (!formatted[item.section]) {
            formatted[item.section] = {};
          }

          formatted[item.section][item.key] = item.value;
        });
        console.log("ROWS:", rows);

        setData(formatted);
        console.log("FORMATTED:", formatted);

      } catch (error) {
        console.error("Error fetching content:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading };
};