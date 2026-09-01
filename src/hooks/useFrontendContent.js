import { useState, useEffect } from "react";
import { getFrontendPageContent } from "../Api/FrontendContentApi";

export default function useFrontendContent(pageKey) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    getFrontendPageContent(pageKey).then((pageData) => {
      if (active && pageData) {
        setData(pageData);
      }
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [pageKey]);

  // Helper to find the section content object by component name
  const getContent = (componentName) => {
    const section = data?.sections?.find(
      (s) => s.componentName && s.componentName.toLowerCase() === componentName.toLowerCase()
    );
    return section?.content || null;
  };

  // Helper to query keyValues in a component
  const getKeyValue = (componentName, key, defaultValue) => {
    const content = getContent(componentName);
    const item = content?.keyValues?.find(
      (kv) => kv.key && kv.key.toLowerCase() === key.toLowerCase()
    );
    return item ? item.value : defaultValue;
  };

  // Helper to query inlineText items by index
  const getInlineText = (componentName, index, defaultValue) => {
    const content = getContent(componentName);
    if (content?.inlineText && content.inlineText[index] !== undefined) {
      return content.inlineText[index];
    }
    return defaultValue;
  };

  // Helper to query image references by index
  const getImage = (componentName, index, defaultValue) => {
    const content = getContent(componentName);
    if (content?.imageReferences && content.imageReferences[index] !== undefined) {
      return content.imageReferences[index];
    }
    return defaultValue;
  };

  // Helper to retrieve custom structured lists (like lists of cards or banners)
  const getArray = (componentName, arrayName, defaultValue) => {
    const content = getContent(componentName);
    if (content?.structuredArrays && content.structuredArrays[arrayName] !== undefined) {
      return content.structuredArrays[arrayName];
    }
    return defaultValue;
  };

  return {
    data,
    loading,
    getContent,
    getKeyValue,
    getInlineText,
    getImage,
    getArray,
  };
}
