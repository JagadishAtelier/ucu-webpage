import { useEffect, useState } from "react";
import { getProgramContent, getTabSections } from "./ProgramContentApi";

export default function useProgramTabSections(programId, tabName) {
  const [sections, setSections] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const fetchSections = async () => {
      setLoading(true);
      try {
        const program = await getProgramContent(programId);
        if (active) setSections(getTabSections(program, tabName));
      } catch (error) {
        if (active) setSections([]);
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchSections();

    return () => {
      active = false;
    };
  }, [programId, tabName]);

  return { sections, loading };
}
